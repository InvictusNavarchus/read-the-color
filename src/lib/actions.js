import { handleKeydown } from './navigation';
import { nextKeys } from './keyevents';

let nextKeysSet
  // Reactive statements
  $: nextKeys.subscribe(value => {
    nextKeysSet = value;
  });

export function keyboardNavigation(node) {
    const handleKeypress = (event) => {
        console.log(nextKeysSet)
        if (window.location.pathname === '/play') {
            if (nextKeysSet.has(event.key)) {
                return
            }
        }
        handleKeydown(event);
    };

    window.addEventListener('keydown', handleKeypress);

    return {
        destroy() {
            window.addEventListener('keydown', handleKeypress);
        }
    };
}