import { readable } from "svelte/store";
export const nextKeys = readable(new Set(['ArrowUp', 'ArrowRight', 'PageDown']))
export const prevKeys = readable(new Set(['ArrowDown', 'ArrowLeft', 'PageUp']))