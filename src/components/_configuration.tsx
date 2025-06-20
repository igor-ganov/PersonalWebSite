import Avatar, {childrenAnimations} from "./animation-objects/_avatar";

export type TimelinesPart = keyof typeof timelines;
export const timelines = {
    part1: 100,
    part2: 100,
    part3: 100,
    part4: 100,
}
type ChildrenKey = keyof typeof childrenAnimations;
export const animations : Record<ChildrenKey, {
    start: { [key: string]: string | number },
    states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    timeline?: string
}> = {... childrenAnimations}

export const children = [Avatar()];