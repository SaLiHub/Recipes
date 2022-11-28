import { RecipesEnum } from "../store/reducers/recipes/recipes-types";

export const getRandomInt = (min = 0, max = 8000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const getPercentage = (n: number | undefined) => {
    if (!n) return '-';
    return Math.floor(n * 100);
}

export const debounce = (func: (id: string) => { payload: string; type: RecipesEnum }, timeout = 300) => {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: [id: string]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export const roundDown = (number: number, decimals: number) => {
    decimals = decimals || 0;
    return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
}