import {toArray} from "./_help-functions";


type State = {
    startState: {[key: string]: string | number},
    states: {
        state: {[key: string]: string | number},
        interval: {from: number, to: number}
    }[]
}
const buildState = (state: {[key: string]: string | number}) => toArray(state).map(({key, value}) => `${key}: ${value};`).join('\n')
export const createStyles = ({id, firstPart, startState, states, scrollContainerTimeline, mobile}: {
    id: string,
    firstPart: number,
    mobile?: State,
    scrollContainerTimeline: string,
} & State) => `
            .${id} {
                position: absolute;
                animation: animation-${id} linear forwards;
                animation-timeline: ${scrollContainerTimeline};
                animation-range: ${firstPart}% contain 100%;
            }
            ${buildStateStyles({id, startState, states})}
            ` + (mobile ? `
            @media (max-width: 768px) {
                ${buildStateStyles({id, startState: mobile.startState, states: mobile.states})}
            }
            ` : '');


const buildStateStyles =  ({id, startState, states}: {id: string} & State) => (states[0].interval.from === -1 ? `
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
            }`;