import { useRef, useState } from "react";

function App() {
  const audioEngineRef = useRef(null)
  const oscRef = useRef(null)
  const gainRef = useRef(null)

  const [volume, setVolume] = useState(0.1)
  const [frequency, setFrequency] = useState(220)
  const [isPlaying, setIsPlaying] = useState(false)

  const startTone = () => {
    //Create persistent audio engine
    if (audioEngineRef.current === null) { audioEngineRef.current = new AudioContext() }
    const audioContext = audioEngineRef.current

    const osc = audioContext.createOscillator()
    osc.frequency.value = frequency
    oscRef.current = osc

    //Create gain and connect
    const gain = audioContext.createGain()
    gain.gain.value = volume
    osc.connect(gain)
    gain.connect(audioContext.destination)
    gainRef.current = gain

    osc.start()
    setIsPlaying(true)
    console.log("Playing...")
  };

  const stopTone = () => {
    const osc = oscRef.current
    osc.stop()
    setIsPlaying(false)
    console.log("Stopping...")
    oscRef.current = null
    gainRef.current = null
  }

  const changeFrequency = (e) => {
    const value = Number(e.target.value)
    setFrequency(value)
    if (oscRef.current !== null) {
      oscRef.current.frequency.value = value
    }
  }

  const changeVolume = (e) => {
    const value = Number(e.target.value)
    setVolume(value)
    if (gainRef.current !== null) {
      gainRef.current.gain.value = value
    }
  }

  return (
    <div className="main">
      <header>
        <h1>WebMS</h1>
      </header>
      <button onClick={isPlaying ? stopTone : startTone}>
        {isPlaying ? "Stop" : "Play"}
      </button>
      <label>
        Frequency: {frequency}Hz
        <input
          type="range"
          min="50"
          max="1000"
          value={frequency}
          onChange={changeFrequency}>
        </input>
      </label>
      <label>
        Volume {Math.round(volume * 200)}%
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.01"
          value={volume}
          onChange={changeVolume}>
        </input>
      </label>

    </div>
  )
}

export default App
