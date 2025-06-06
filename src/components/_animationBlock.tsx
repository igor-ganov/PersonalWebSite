import {FC, JSX} from "react";
import AnimationStep from "./_animationStep";


const children: {
    duration: number,
    componentFactory: (key: string, interval: { from: number, to: number }) => JSX.Element
}[] = [
    {
        duration: 150, componentFactory: (key: string, interval: { from: number, to: number }) => {
            console.log(key);
            return <AnimationStep
                key={key} id={key} animationName={"my-move"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>;
        }
    },
    {
        duration: 150, componentFactory: (key: string, interval: { from: number, to: number }) =>
            <AnimationStep
                key={key} id={key} animationName={"my-move-2"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>
    },
    {
        duration: 300, componentFactory: (key: string, interval: { from: number, to: number }) =>
            <AnimationStep
                key={key} id={key} animationName={"my-move-3"}
                scrollContainerTimeline={"--default-timeline"}
                interval={interval}>
                <div></div>
            </AnimationStep>
    },
];
const fullDuration =
    children.reduce((sum, current) => sum + current.duration, 0);

const childrenWithIntervals = [...aggregate(
    children,
    ({interval: {to}}, current) =>
        ({
            ...current,
            interval: {from: to, to: to + current.duration / fullDuration * 100}
        }),
    {interval: {to: 0}}
)];

console.log(childrenWithIntervals.map((o, index) => index));

const AnimationBlock: FC = () => (
    <div>
        <div>
            {childrenWithIntervals.map(({interval, componentFactory }, index)=>
                componentFactory(`animation-${index}`, interval))}
        </div>
        <div>
            {childrenWithIntervals.map(({duration}, index)=>
                <div key={index} style={{'height': `${duration}px`}}></div>)}
        </div>
    </div>
);

export default AnimationBlock;

function* aggregate<T, TResult extends TInit, TInit>(
    src: Iterable<T>,
    fn: (acc: TInit, value: T) => TResult,
    initialValue: TInit): Iterable<TResult> {

    let previous = initialValue;
    for (const value of src) {
        const result = fn(previous, value);
        yield result;
        previous = result;
    }
}