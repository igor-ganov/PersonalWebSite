import {FC, JSX} from "react";
import {createStyles} from "./_animationStep";
import {getKeys, toArray, toObject} from "./_help-functions";
import {animations, timelines, TimelinesPart, children} from "./_configuration";

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

const parts = getKeys(timelines).map(key => timelines[key]);
const offsetBefore = 100;
const offsetAfter = 100;
const fullDuration =
    parts.reduce((sum, value) => sum + value, 0);
const firstPart = +(offsetBefore / (fullDuration + offsetBefore + offsetAfter) * 100).toFixed(2);
const intervals = toObject([
    {key: getKeys(timelines)[0], from: -1, to: 0},
    ...aggregate(getKeys(timelines).splice(1), (acc, key) => ({
    key: key,
    from: acc.to,
    to: acc.to + timelines[key] / fullDuration * 100
}), {to: 0})], ({key, from, to}) => [key, {from: from, to: to}]);

const animationStyles = toArray(animations).map(({key, value: {start, states, timeline, mobile}}) => createStyles(
    {
        id: key,
        firstPart: firstPart,
        startState: start,
        states: toArray(states).map(s => ({state: s.value, interval: intervals[s.key]})),
        mobile: mobile ? {
                startState: mobile.start,
                states: toArray(mobile.states).map(s => ({state: s.value, interval: intervals[s.key]}))
            } : undefined,
        scrollContainerTimeline: timeline ?? "--default-timeline"
    })).join('\n');

const getInterval = (part: TimelinesPart | { from: TimelinesPart, to: TimelinesPart }) => typeof part === 'object' ?
    {from: intervals[part.from].from, to: intervals[part.to].to} : intervals[part];


const AnimationBlock: FC = () => (
    <div className={"scroll-container"}>
        <style>{`${animationStyles}`}</style>
        <div className={"time-line-container"}>
            <div className={"sticky"}>
                <div className={"test-time-line"}></div>
                {children}
            </div>
            <div className={"snap-container"}>
                <div className={'snap-block'} style={{'height': `100vh`}}></div>
                {parts.map((duration, index) =>
                    <div className={'snap-block'} key={index} style={{'height': `${duration}vh`}}></div>)}
            </div>
        </div>
        <div className={'snap-block'} style={{'height': `100vh`}}></div>
    </div>

);


export default AnimationBlock;