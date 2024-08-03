import { goto } from '$app/navigation';
import { writable } from 'svelte/store';
import { nextKeys, prevKeys } from './keyevents';

let nextKeysSet;
let prevKeysSet;
  // Reactive statements
  $: nextKeys.subscribe(value => {
    nextKeysSet = value;
  });
  $: prevKeys.subscribe(value => {
    prevKeysSet = value;
  });
const routes = ['/', '/intro', '/example/red', '/example/blue', '/ready', '/countdown', '/play'];
export const currentIndex = writable(0);

export function nextSlide() {
    currentIndex.update(index => {
        if (index < routes.length - 1) {
            goto(routes[index + 1]);
            return index + 1;
        }
        return index;
    });
}

export function prevSlide() {
    currentIndex.update(index => {
        if (index > 0) {
            goto(routes[index - 1]);
            return index - 1;
        }
        return index;
    });
}

export function handleKeydown(event) {
    if (nextKeysSet.has(event.key)) {
        nextSlide();
    } else if (prevKeysSet.has(event.key)) {
        prevSlide();
    }
}