import { useRef, useState } from "react";

function App() {
  const generateTone = () => {
    const audioEngine = new AudioContext()

    const osc = audioEngine.createOscillator()
    osc.frequency.value = 220

    const gain = audioEngine.createGain()
    gain.gain.value = 0.1

    osc.connect(gain)
    gain.connect(audioEngine.destination)

    osc.start()
  };

  return (
    <div className="main">
      <header>
        <h1>WebMS</h1>
      </header>
      <button onClick={generateTone}>PLAY</button>
    </div>
  )
}

export default App
