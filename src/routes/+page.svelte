<main style='background-color: black'>
    <h1 style="color: {colorValue}">{colorText}</h1>
</main>

<svelte:window on:keydown={changeColor}/>

<script>
    import '../app.css'
    const colorMap = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00',
        purple: '#800080',
        orange: '#FFA500',
        pink: '#FFC0CB',
        cyan: '#00FFFF',
        magenta: '#FF00FF',
        lime: '#00FF00',
        maroon: '#800000',
        navy: '#000080',
        aqua: '#00FFFF',
        olive: '#808000',
        silver: '#C0C0C0',
        gray: '#808080',
        black: '#000000',
    }
    const colorMapForBlackBackground = {
        'White': '#FFFFFF',
        'Red': '#FF0000',
        'Yellow': '#FFFF00',
        'Green': '#00FF00',
        'Blue': '#0000FF',
        'Cyan': '#00FFFF',
        'Magenta': '#FF00FF',
        'Orange': '#FFA500',
        'Pink': '#FFC0CB',
        'Lime': '#00FF00'
    };
    const colorNames = Object.keys(colorMapForBlackBackground);
    function getRandomColorNames() {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        const randomColorName = colorNames[randomIndex];
        return randomColorName
    }
    let colorText = getRandomColorNames()
    let colorValue = colorMapForBlackBackground[getRandomColorNames()]
    function changeColor() {
        console.log('changeColor runs')
        colorText = getRandomColorNames()
        colorValue = colorMapForBlackBackground[getRandomColorNames()]
    }
</script>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h1 {
        font-size: 15rem ;
    }
</style>