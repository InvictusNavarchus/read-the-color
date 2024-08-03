import { handleKeydown } from './navigation';
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

export function keyboardNavigation(node) {
    const handleKeypress = (event) => {
        console.log(nextKeysSet)
        if (window.location.pathname === '/play') {
            if (nextKeysSet.has(event.key)) {
                return
            }
            if (prevKeysSet.has(event.key)) {
                handleKeydown(event, 2);
                return;
            }
        }
        handleKeydown(event, 1);
    };

    window.addEventListener('keydown', handleKeypress);

    return {
        destroy() {
            window.addEventListener('keydown', handleKeypress);
        }
    };
}