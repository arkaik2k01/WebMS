import { useRef, useState } from "react";

function App() {
  const audioEngineRef = useRef(null)
  const oscRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const startTone = () => {
    //Create persistent audio engine
    if (audioEngineRef.current === null) {
      audioEngineRef.current = new AudioContext()
    }
    const audioEngine = audioEngineRef.current

    const osc = audioEngine.createOscillator()
    osc.frequency.value = 220
    oscRef.current = osc

    const gain = audioEngine.createGain()
    gain.gain.value = 0.1

    osc.connect(gain)
    gain.connect(audioEngine.destination)

    osc.start()
    setIsPlaying(true)
    console.log("Playing...")
  };

  const stopTone = () => {
    const osc = oscRef.current
    osc.stop()
    setIsPlaying(false)
    console.log("Stopping...")
  }

  return (
    <div className="main">
      <header>
        <h1>WebMS</h1>
      </header>
      <button onClick={isPlaying ? stopTone : startTone}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  )
}

export default App
