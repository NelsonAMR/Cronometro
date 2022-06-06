const stopwatch = document.getElementById('stopWatch');
const playPauseButton = document.getElementById('playPaused');
const secondCircle = document.getElementById('secondCircle');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if(isPaused){
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}

const start = () => {
    secondCircle.style.animation = 'rotation 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondCircle.style.animationPLayState = 'running';
    stopwatchInterval = setInterval(() => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`;
}

const pause = () => {
    secondCircle.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondCircle.style.transform = 'rotate(-90deg) translateX(60px)';
    secondCircle.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}