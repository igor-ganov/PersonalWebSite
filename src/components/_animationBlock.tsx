import {FC, JSX} from "react";
import AnimationStep from "./_animationStep";

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
const keyOf = <T extends object>(o: T): (keyof T)[] => (Object.keys(o) as (keyof T)[]);
const toObject = <T, TKey extends string, TValue>(src: T[], fn: (value: T) => [TKey, TValue]): Record<TKey, TValue> => Object.fromEntries(src.map(fn)) as Record<TKey, TValue>;

const timelines = {
    part1: 100,
    part2: 100,
    part3: 200,
}
const parts = keyOf(timelines).map(key => timelines[key]);
const fullDuration =
    parts.reduce((sum, value) => sum + value, 0);
const intervals = toObject([...aggregate(keyOf(timelines), (acc, key) => ({
    key: key,
    from: acc.to,
    to: acc.to + timelines[key] / fullDuration * 100
}), {to: 0})], ({key, from, to}) => [key, {from: from, to: to}]);

type TimelinesPart = keyof typeof timelines;

const children: {
    parts: TimelinesPart | {from: TimelinesPart, to: TimelinesPart},
    componentFactory: (key: string, interval: { from: number, to: number }) => JSX.Element
}[] = [
    {
        parts: 'part1', componentFactory: (key: string, interval: { from: number, to: number }) =>
            <AnimationStep
                key={key} id={key} animationName={"my-move"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>
    },
    {
        parts: {from: 'part2', to: 'part3'}, componentFactory: (key: string, interval: { from: number, to: number }) =>
            <AnimationStep
                key={key} id={key} animationName={"my-move-2"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>
    },
    {
        parts: 'part3', componentFactory: (key: string, interval: { from: number, to: number }) =>
            <AnimationStep
                key={key} id={key} animationName={"my-move-3"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>
    },
];

const getInterval = (part: TimelinesPart | {from: TimelinesPart, to: TimelinesPart}) => typeof part === 'object' ?
    {from: intervals[part.from].from, to: intervals[part.to].to} : intervals[part];

const AnimationBlock: FC = () => (
    <div>
        <div>
            {children.map(({componentFactory, parts}, index) =>
                componentFactory(`animation-${index}`, getInterval(parts)))}
        </div>
        <div>
            {parts.map((duration, index) =>
                <div key={index} style={{'height': `${duration}px`}}></div>)}
        </div>
    </div>
);

export default AnimationBlock;