import { useEffect, useState } from 'react'
import Player from './components/Player';
import Cover1 from './assets/cover-1.png'
import Cover2 from './assets/cover-2.png'
import Song1 from './assets/lost-in-city-lights-145038.mp3'
import Song2 from './assets/forest-lullaby-110624.mp3'
const tracks = [
  {
    name: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    url: Song1,
    image: Cover1,
  },
  {
    name: "Forest Lullaby",
    author: "Lesfm",
    url: Song2,
    image: Cover2,
  },
];
let currentTrack = 0;
function App() {
  
  const [song, setSong] = useState(tracks[currentTrack])

  function prevTrack () {
    if (currentTrack <= 0) {
      currentTrack = tracks.length -1
    } else {
      currentTrack--;
    }
    setSong(tracks[currentTrack])
  }
  function nextTrack () {
    if ((parseInt(currentTrack) + 1) >= tracks.length) {
      currentTrack = 0
    } else {
      currentTrack++;
    }
    setSong(tracks[currentTrack])
  }
  return (
    <main className='w-[21.625rem] h-[33rem] bg-gray-2 rounded-2xl p-5 flex flex-col items-center'>
      <Player {...song} nextTrack={nextTrack} prevTrack={prevTrack}/>
    </main>
  )
}

export default App
