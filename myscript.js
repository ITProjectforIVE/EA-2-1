const songs = [
    { name: "France", file: "./Music/France.mp3"},
    { name: "Japan", file: "./Music/Japan.mp3"},
    { name: "German", file: "./Music/German.mp3"},
    { name: "USA", file: "./Music/USA.mp3"},
    { name: "China", file: "./Music/China.mp3"},
    { name: "USSR", file: "./Music/USSR.mp3"},
    { name: "Finland", file: "./Music/Finland.mp3"},
];
let currentSongIndex = 0;

function loadSong(index) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = songs[index].file;
    audio.load();
    audio.play();
    currentSongDisplay.textContent = `Now Playing: ${songs[index].name}`;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex); //play to next song
}

const currentSongDisplay = document.getElementById('current-song');
loadSong(currentSongIndex);