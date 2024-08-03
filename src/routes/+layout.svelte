<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { keyboardNavigation } from '$lib/actions';
    import { currentIndex } from '$lib/navigation';
    import '../app.css';

    const routes = ['/', '/example/red', '/example/blue', '/intro', '/ready', '/countdown', '/play'];

    $: {
        $currentIndex = routes.indexOf($page.url.pathname);
    }
</script>

<div use:keyboardNavigation>
    <slot />
</div>