<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { keyboardNavigation } from '$lib/actions';
    import { currentIndex } from '$lib/navigation';
    import '../app.css';

    const routes = ['/', '/intro', '/example/red', '/example/blue', '/ready', '/countdown', '/play'];

    $: {
        $currentIndex = routes.indexOf($page.url.pathname);
    }
</script>

<div use:keyboardNavigation>
    <slot />
</div>