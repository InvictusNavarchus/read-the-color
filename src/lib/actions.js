import { handleKeydown } from './navigation';

export function keyboardNavigation(node) {
    const handleKeypress = (event) => {
        if (window.location.pathname === '/play') {
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                return;
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