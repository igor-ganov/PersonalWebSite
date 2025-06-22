import {TimelinesPart} from "./_configuration";

export type Animations<T extends string> = Record<T, {
    start: { [key: string]: string | number },
    states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    mobile?: {
        start: { [key: string]: string | number },
        states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    }
    timeline?: string
}>;


type DuplicateKeys<T extends object[], Seen = never> =
    T extends [infer F, ...infer R extends object[]]
        ? keyof F & Seen | DuplicateKeys<R, Seen | keyof F>
        : never;

export type MergeIfNoDuplicates<T extends object[]> =
    DuplicateKeys<T> extends never
        ? UnionToIntersection<T[number]>
        : never;

type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends
        (k: infer I) => void ? I : never;

