import Avatar, {greetingAnimations, greetingChildrenKeys} from "./animation-objects/_greeting";
import {Animations, MergeIfNoDuplicates} from "./types";
import Header, {headerAnimations, headerKeys} from "./animation-objects/_header";
import Technologies, {technologiesAnimations, technologiesKeys} from "./animation-objects/technologies";

export type TimelinesPart = keyof typeof timelines;
export const timelines = {
    part1: 100,
    part2: 100,
    part3: 100,
    part4: 100,
    part5: 100,
    part6: 100,
    part7: 100,
    part8: 100,
    part9: 100,
    part10: 100,
    part11: 100,
    part12: 100
}

type ChildrenAnimations = keyof MergeIfNoDuplicates<[
    typeof greetingChildrenKeys,
    typeof headerKeys,
    typeof technologiesKeys,
]>;

export const animations : Animations<ChildrenAnimations> = {
    ...greetingAnimations,
    ...headerAnimations,
    ...technologiesAnimations,
}

export const children = [Avatar(), Header(), Technologies()];