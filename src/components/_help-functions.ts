export const getKeys = <T extends object>(o: T): (keyof NonNullable<T>)[] => (Object.keys(o) as (keyof Required<T>)[]);
export const toObject = <T, TKey extends string, TValue>(src: T[], fn: (value: T) => [TKey, TValue]): Record<TKey, TValue> =>
    Object.fromEntries(src.map(fn)) as Record<TKey, TValue>;
export const toArray = <T extends object>(o: T): {
    key: keyof T,
    value: NonNullable<T[keyof T]>
}[] => getKeys(o).map(key => ({key: key, value: o[key]!}));