import {FC, JSX} from "react";
import {createStyles} from "./_animationStep";
import {toArray, getKeys, toObject} from "./_help-functions";

const aggregate = function* <T, TResult extends TInit, TInit>(
    src: Iterable<T>,
    fn: (acc: TInit, value: T) => TResult,
    initialValue: TInit
): Iterable<TResult> {
    let previous = initialValue;
    for (const value of src) {
        const result = fn(previous, value);
        yield result;
        previous = result;
    }
};

const timelines = {
    part1: 100,
    part2: 100,
    part3: 100,
    part4: 100,
}
const parts = getKeys(timelines).map(key => timelines[key]);
const fullDuration =
    parts.reduce((sum, value) => sum + value, 0);
const intervals = toObject([...aggregate(getKeys(timelines), (acc, key) => ({
    key: key,
    from: acc.to,
    to: acc.to + timelines[key] / fullDuration * 100
}), {to: 0})], ({key, from, to}) => [key, {from: from, to: to}]);

type TimelinesPart = keyof typeof timelines;


type ChildrenKey = 'hello' | 'greeting-container' | 'avatar';

const animations: Record<ChildrenKey, {
    start: {[key: string]: string | number},
    states: Partial<Record<TimelinesPart, {[key: string]: string | number}>>,
    timeline?: string
}> = {
    hello: {
        start: {opacity: 0},
        states: {
            part1: {opacity: 1},
            part3: {opacity: 0}
        }
    },
    avatar: {
        start: {transform: 'translateX(-100%)'},
        states: {
            part2: {transform: 'translateX(0)'},
            part4: {transform: 'translateX(-100%)'},
        }
    },
    "greeting-container": {
        start: {'grid-template-columns': '0 1fr'},
        states: {
            part2: {'grid-template-columns': '150px 1fr'},
            part4: {'grid-template-columns': '0 1fr'}
        }
    }
}

const children: JSX.Element[] = [
    <div key='greeting-container' className={"greeting-container dum-block-container"}>
        <div key='avatar' className={"avatar dum-block"}></div>
        <div key='hello' className={"hello dum-block"}></div>
    </div>
];

const animationStyles = toArray(animations).map(({key, value: {start, states, timeline}}) => createStyles(
    {
        id: key,
        startState: start,
        states: toArray(states).map(s => ({state: s.value, interval: intervals[s.key]})),
        scrollContainerTimeline: timeline ?? "--default-timeline"
    })).join('\n');

const getInterval = (part: TimelinesPart | { from: TimelinesPart, to: TimelinesPart }) => typeof part === 'object' ?
    {from: intervals[part.from].from, to: intervals[part.to].to} : intervals[part];

const AnimationBlock: FC = () => (
    <div className={"scroll-container"}>
        <style>{`${animationStyles}`}</style>
        <div className={"time-line-container"}>
            <div className={"sticky"}>
                {children}
            </div>
            <div className={"snap-container"}>
                {parts.map((duration, index) =>
                    <div className={'snap-block'} key={index} style={{'height': `${duration}vh`}}></div>)}
            </div>
        </div>
        <div className={'snap-block'} style={{'height': `100vh`}}></div>
    </div>

);


export default AnimationBlock;