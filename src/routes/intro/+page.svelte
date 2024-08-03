<script>
    import '../../app.css';
</script>
<main>
    <div class="container">
        <div class="color-box White">White</div>
        <div class="color-box Red">Red</div>
        <div class="color-box Yellow">Yellow</div>
        <div class="color-box Green">Green</div>
        <div class="color-box Blue">Blue</div>
        <div class="color-box Cyan">Cyan</div>
        <div class="color-box Orange">Orange</div>
        <div class="color-box Purple">Purple</div>
    </div>
</main>
<style>
    main {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 2vmin;
        width: 95vw;
        height: 95vh;
    }
    .color-box {
        flex: 1 1 calc(25% - 2vmin);
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 3.3em;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .color-box:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .White { background-color: #FFFFFF; color: #000; }
    .Red { background-color: #FF0000; }
    .Yellow { background-color: #FFFF00; color: #000; }
    .Green { background-color: #00FF00; color: #000; }
    .Blue { background-color: #0000FF; }
    .Cyan { background-color: #00FFFF; color: #000; }
    .Orange { background-color: #FFA500; color: #000; }
    .Purple { background-color: #A020F0; }
</style>