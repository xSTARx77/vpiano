const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio('tunes/a.wav');

const playTune = (key) => {
    audio.play();
}
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener('keydown', function keyDetect(event) {
    playsound(event.key);
})

function playsound(key) {
    switch (key) {
        case "a":
            var akey = new Audio("tunes/a.wav");
            akey.play();
            break;

        case "d":
            var dkey = new Audio("tunes/d.wav");
            dkey.play();
            break;
        case "e":
            var ekey = new Audio("tunes/e.wav");
            ekey.play();
            break;
        case "f":
            var fkey = new Audio("tunes/f.wav");
            fkey.play();
            break;
        case "g":
            var gkey = new Audio("tunes/g.wav");
            gkey.play();
            break;
        case "h":
            var hkey = new Audio("tunes/h.wav");
            hkey.play();
            break;
        case "j":
            var jkey = new Audio("tunes/j.wav");
            jkey.play();
            break;
        case "k":
            var kkey = new Audio("tunes/k.wav");
            kkey.play();
            break;
        case "l":
            var lkey = new Audio("tunes/l.wav");
            lkey.play();
            break;
        case "o":
            var okey = new Audio("tunes/o.wav");
            okey.play();
            break;
        case "p":
            var pkey = new Audio("tunes/p.wav");
            pkey.play();
            break;
        case "s":
            var skey = new Audio("tunes/s.wav");
            skey.play();
            break;
        case "t":
            var tkey = new Audio("tunes/t.wav");
            tkey.play();
            break;
        case "u":
            var ukey = new Audio("tunes/u.wav");
            ukey.play();
            break;
        case "w":
            var wkey = new Audio("tunes/w.wav");
            wkey.play();
            break;
        case "y":
            var ykey = new Audio("tunes/y.wav");
            ykey.play();
            break;
        case ";":
            var rkey = new Audio("tunes/;.wav");
            rkey.play();
            break;
        
        default:
            break;
    }
}