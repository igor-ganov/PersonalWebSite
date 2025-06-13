import {toArray} from "./_help-functions";

const buildState = (state: {[key: string]: string | number}) => toArray(state).map(({key, value}) => `${key}: ${value};`).join('\n')
export const createStyles = ({id, startState, states, scrollContainerTimeline}: {
    id: string,
    startState: {[key: string]: string | number},
    states: {
        state: {[key: string]: string | number},
        interval: {from: number, to: number}
    }[],
    scrollContainerTimeline: string,
}) => `
            .${id} {
                ${buildState(startState)}
                position: absolute;
                animation: animation-${id} linear forwards;
                animation-timeline: ${scrollContainerTimeline};
                animation-range: 0% contain 100%;
            }
            @keyframes animation-${id} {
                ${states.map(({state, interval: {from, to}}, index) =>
                `${from}% {
                    ${buildState(index == 0 ? startState : states[index - 1].state)}}
                ${to}% {
                    ${buildState(state)}
                }`).join('\n')}
            }`;