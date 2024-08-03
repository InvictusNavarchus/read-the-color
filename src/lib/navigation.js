import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

const routes = ['/', '/intro', '/example/red', '/example/blue', '/play'];
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
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
    }
}