<script>
    import { onMount } from 'svelte';

    let countdownNumbers = ["3", "2", "1"];
    let currentNumber = countdownNumbers[0];
    let index = 0;

    onMount(() => {
        const interval = setInterval(() => {
            index++;
            if (index < countdownNumbers.length) {
                currentNumber = countdownNumbers[index];
            } else {
                clearInterval(interval);
            }
        }, 1000);
    });
</script>
<main>
    <div class="countdown">
        <span>{currentNumber}</span>
    </div>
</main>

<style>
    .countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #000;
        color: #fff;
        font-family: Arial, sans-serif;
        font-size: 10vw;
        position: relative;
    }
    .countdown span {
        display: inline-block;
        animation: fadeInOut 1s ease-in-out;
    }
    @keyframes fadeInOut {
        0% { opacity: 0; transform: scale(2); }
        25% { opacity: 1; transform: scale(1); }
        75% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(2); }
    }
</style>