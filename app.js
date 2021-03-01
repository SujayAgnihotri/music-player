
const music=document.getElementById("aud");
const play=document.getElementById("play");
const img=document.querySelector("img");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let playing=false;
const songs=[
 {
 name:"song_1",
 title:"shayad",
 artist:"Arijit Singh",
},
{
 name:"song_2",
 title:"Aabad Barbad",
 artist:"Arijit Singh",
},
{
 name:"song_3",
 title:"ilahi",
 artist:"Arijit Singh",
},
{
 name:"song_4",
 title:"duaa",
 artist:"Arijit Singh",
},
{
 name:"song_5",
 title:"Tu Hi Hai Aashiqui",
 artist:"Arijit Singh",
}];

  const playMusic=() => {
   playing=true;
 music.play();
 play.classList.replace('fa-play','fa-pause');
 img.classList.add("ani")
};

const pauseMusic=() => {
   playing=false;
 music.pause();
 play.classList.replace('fa-pause','fa-play');
 img.classList.remove("ani")
};

function playsongs(){
 if (playing) {
  pauseMusic();
 }else{
  playMusic();
 }
};
const loadSong = (songs) => {
 title.textContent=songs.title;
 artist.textContent=songs.artist;
 music.src=songs.name+".mp3";
 img.src=songs.name+".jpg";
};
songIndex=0;
loadSong(songs[0])

function nextsong() {
 songIndex=(songIndex + 1) % songs.length;
 loadSong(songs[songIndex]);
 playMusic();
}
function prevsong() {
 songIndex=(songIndex - 1 + songs.length) % songs.length;
 loadSong(songs[songIndex]);
 playMusic();
}