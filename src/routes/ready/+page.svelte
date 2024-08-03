<script>
    import '../../app.css'
</script>
<main>
    <h1 class="word">
        <div class="red">Get</div><div class="blue">Ready</div> 
    </h1>
</main>
<style> 
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    .word {
        font-size: clamp(1rem, 15vw, 30vh);
    }
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
</style>