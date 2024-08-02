<script>
    import { fly } from 'svelte/transition';
    import '../app.css';

    const colorMapForBlackBackground = {
        'White': '#FFFFFF',
        'Red': '#FF0000',
        'Yellow': '#FFFF00',
        'Green': '#00FF00',
        'Blue': '#0000FF',
        'Cyan': '#00FFFF',
        'Orange': '#FFA500',
        'Purple': '#A020F0',
    };

    const colorNames = Object.keys(colorMapForBlackBackground);

    function getRandomColorName() {
        return colorNames[Math.floor(Math.random() * colorNames.length)];
    }

    let colorText = getRandomColorName();
    let colorValue = colorMapForBlackBackground[getRandomColorName()];
    let iterationCount = 0;

    function changeColor() {
        colorText = getRandomColorName();
        colorValue = colorMapForBlackBackground[getRandomColorName()];
        iterationCount++;
    }
</script>

<main>
    {#key iterationCount}
        <div style="color: {colorValue}">
            <h1
                in:fly={{ x: 300, duration: 800 }}
                out:fly={{ x: -300, duration: 150 }}
            >
                {colorText}
            </h1>
        </div>
    {/key}
</main>

<svelte:window on:keydown={changeColor}/>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
    }
    h1 {
        font-size: 15rem;
    }
</style>