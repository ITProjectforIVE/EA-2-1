const songs = [
    { name: "France", file: "./Music/France.mp3"},
    { name: "German", file: "./Music/German.mp3"},
    { name: "USA", file: "./Music/USA.mp3"},
    { name: "Japan", file: "./Music/Japan.mp3"},
    { name: "China", file: "./Music/China.mp3"},
    { name: "Soviet Union", file: "./Music/USSR.mp3"},
    { name: "Finland", file: "./Music/Finland.mp3"},
];
let currentSongIndex = 0;

function loadSong(index) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');
    const currentSongDisplay = document.getElementById('current-song');
    audioSource.src = songs[index].file;
    audio.load();
    audio.play();
    currentSongDisplay.innerHTML =  `Now Playing: ${songs[index].name}`;//display the song playing now
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex); //play to next song
}

function previousSong() {
    if(currentSongIndex >0){
        currentSongIndex = (currentSongIndex - 1) % songs.length;
    }
    else{
        return false;
    }
    loadSong(currentSongIndex); //play to previousSong song
}

loadSong(currentSongIndex);//call the function