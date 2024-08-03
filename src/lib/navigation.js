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
const routes = ['/', '/example/red', '/example/blue', '/intro', '/ready', '/countdown', '/play'];
export const currentIndex = writable(0);

export function nextSlide(totalJump) {
    currentIndex.update(index => {
        if (index < routes.length - 1) {
            goto(routes[index + totalJump]);
            return index + totalJump;
        }
        return index;
    });
}

export function prevSlide(totalJump) {
    currentIndex.update(index => {
        if (index > 0) {
            goto(routes[index - totalJump]);
            return index - totalJump;
        }
        return index;
    });
}

export function handleKeydown(event, totalJump) {
    if (nextKeysSet.has(event.key)) {
        nextSlide(totalJump);
    } else if (prevKeysSet.has(event.key)) {
        prevSlide(totalJump);
    }
}