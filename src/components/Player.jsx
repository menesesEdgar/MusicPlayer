import PlayFill from "../assets/Play_fill.svg"
import StopAndPlayFillReverse from "../assets/Stop_and_play_fill_reverse.svg"
import StopAndPlayFill1 from "../assets/Stop_and_play_fill-1.svg"
import PauseFill from "../assets/PauseFill.svg"
import { useEffect, useRef, useState } from "react"
const player = new Audio()

const Player = ({name, author , image, url, nextTrack, prevTrack}) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const progress = useRef()

  useEffect(() => {
    if (url) {
      player.src = url
      progress.current.min = 0
      progress.current.value = 0
      setIsPaused(true)
      player.pause()
    }
  }, [url])
  player.ondurationchange = (event) => {
    console.log("ondurationchange")
    let mins = Math.floor(player.duration / 60);
    let secs = Math.floor(player.duration % 60);
    if (secs < 10) secs = `0${secs}`;
    if (mins < 10) mins = `0${mins}`;
    setTotalTime(`${mins}:${secs}`)
    progress.current.max = Math.floor(player.duration);
  }
  player.ontimeupdate = () => {
    console.log("ontimeupdate")
    progress.current.value = Math.floor(player.currentTime);
    let mins = Math.floor(player.currentTime / 60);
    let secs = Math.floor(player.currentTime % 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    setCurrentTime(`${mins}:${secs}`)
  }


  function playTrack () {
    if (player.paused) {
      setIsPaused(false)
      player.play()
    } else {
      setIsPaused(true)
      player.pause()
    }
  }
  function updateValue () {
    player.currentTime = progress.current.value
  }
  return ( 
      <>
    <img src={image} alt="Cover 1" className='rounded-xl object-contain w-full'/>
    <h2 className='text-white text-[1rem] mt-2 font-semibold'>{name}</h2>
    <span className='text-gray text-[12px] m-0 p-0 mb-4'>{author}</span>
    <div className='mb-2 w-full flex flex-col'>
      <div className='flex flex-row justify-between text-gray text-[0.625rem] pb-[2px]'>
        <label htmlFor="" className='m-0 p-0'>{currentTime}</label>
        <label htmlFor="" className='mb-0'>{totalTime}</label>
      </div>
      <input
        ref={progress}
        type="range"
        name="progress"
        id="progress"
        className='progress'
        onInput={updateValue}
      />
    </div>
    <section className='flex flex-row gap-x-5 justify-center items-center text-[10px] mt-7'>
      <button onClick={prevTrack}>
        <img src={StopAndPlayFill1} alt="" />
      </button>
      <button className='rounded-full bg-pink p-2' onClick={playTrack}>
        <img src={isPaused ? PlayFill : PauseFill} alt="" className='' />
      </button>
      <button onClick={nextTrack}>
        <img src={StopAndPlayFillReverse} alt="" />
      </button>
    </section>
      </>
  );
}
 
export default Player;