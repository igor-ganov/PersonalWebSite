import Avatar, {greetingAnimations, greetingChildrenKeys} from "./animation-objects/_greeting";
import {Animations, MergeIfNoDuplicates} from "./types";
import Header, {headerAnimations, headerKeys} from "./animation-objects/_header";

export type TimelinesPart = keyof typeof timelines;
export const timelines = {
    part1: 100,
    part2: 100,
    part3: 100,
    part4: 100,
}

type ChildrenAnimations = keyof MergeIfNoDuplicates<[
    typeof greetingChildrenKeys,
    typeof headerKeys,
]>;

export const animations : Animations<ChildrenAnimations> = {
    ...greetingAnimations,
    ...headerAnimations
}

export const children = [Avatar(), Header()];