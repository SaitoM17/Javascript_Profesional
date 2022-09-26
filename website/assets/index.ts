import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector('video')
const player = new MediaPlayer({el:video,
    plugins:[new AutoPlay(), new AutoPause(), new Ads()]});

const button: HTMLElement = document.querySelector('button')
button.onclick = () => player.osino();
 

const ButtonMuted: HTMLElement = document.querySelector('#ButtonMuted')
ButtonMuted.onclick = () => player.toMuted();


/*
if ('servirWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}*/