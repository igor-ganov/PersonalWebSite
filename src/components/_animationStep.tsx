import {ReactNode} from "react";

const AnimationStep = ({children, id, animationName, scrollContainerTimeline, interval}: {
    children: ReactNode,
    id: string,
    animationName: string,
    scrollContainerTimeline: string,
    interval: {from: number, to: number}
}) => (
    <div>
        <style>
            {`
            .animation-${id} {
              animation: ${animationName} linear forwards;
              animation-timeline: ${scrollContainerTimeline};
              animation-range: contain ${interval.from}% contain ${interval.to}%;
            }
            `}
        </style>
        {children}
    </div>
);

export default AnimationStep;