import {toArray} from "./_help-functions";

const buildState = (state: {[key: string]: string | number}) => toArray(state).map(({key, value}) => `${key}: ${value};`).join('\n')
export const createStyles = ({id, firstPart, startState, states, scrollContainerTimeline, mobile}: {
    id: string,
    firstPart: number,
    startState: {[key: string]: string | number},
    states: {
        state: {[key: string]: string | number},
        interval: {from: number, to: number}
    }[],
    mobile?: {
        startState: {[key: string]: string | number},
        states: {
            state: {[key: string]: string | number},
            interval: {from: number, to: number}
        }[]
    },
    scrollContainerTimeline: string,
}) => (states[0].interval.from === -1 ? `
            .${id} {

                ${buildState(states[0].state)}
                transition: all 2s;
                @starting-style {
                    ${buildState(startState)}
                }
            }
` : `
            .${id} {
                ${buildState(startState)}
            }
`) + `
            .${id} {
                position: absolute;
                animation: animation-${id} linear forwards;
                animation-timeline: ${scrollContainerTimeline};
                animation-range: ${firstPart}% contain 100%;
            }
            @keyframes animation-${id} {
                ${states.map(({state, interval: {from, to}}, index) => `
                ${from !== 0 ?`${from}% {
                    ${buildState(index === 0 ? startState : states[index - 1].state)}}` : ''}
                ${to}% {
                    ${buildState(state)}
                }`).join('\n')}
                100% {
                    ${buildState(states[states.length - 1].state)}
                }
            }` + (mobile ? `
                @media (max-width: 768px) {
                .${id} {
                    ${buildState(mobile.startState)}
                }
                @keyframes animation-${id} {
                    ${mobile.states.map(({state, interval: {from, to}}, index) =>
    `${from}% {
                        ${buildState(index == 0 ? mobile.startState : mobile.states[index - 1].state)}}
                    ${to}% {
                        ${buildState(state)}
                    }`).join('\n')}
                }
            }
            ` : '');