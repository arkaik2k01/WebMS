# WebMS

**Web-Modular-System** is a modular synthesizer that runs in the browser. Build patches by dragging cables between modules, shape sound with knobs, and explore synthesis from the signal path up.

> **Status:** In early development.

## Overview

WebMS follows the model of a hardware modular synthesizer. Each module performs a single function (oscillator, filter, envelope, LFO) and modules are connected with patch cables to form a signal chain. Any output can be routed to any compatible input, including control signals that modulate other modules' parameters.

The project is built directly on the Web Audio API, with a React interface for patching and control. Its long-term focus is easy and seamless ambient and algorithmic sound design.

## Features

Planned:

- Drag-and-drop patch cables between module jacks
- Rotary knobs for real-time parameter control
- Core module set: oscillator, filter, amplifier, envelope, LFO
- Control-signal routing into module parameters
- Computer keyboard and MIDI input
- Save and load patches as JSON
- Clock, sequencing, and randomization modules for generative patches
- Delay and reverb effects

## Tech stack

| Layer | Technology |
|---|---|
| Interface | React |
| Build tooling | Vite |
| Language | JavaScript |
| Audio | Web Audio API |
| Patch cables | SVG |
| Testing | Vitest |

## Architecture

The audio engine is independent of the user interface.

- **Engine** (`src/engine`): plain JavaScript classes that define modules and manage the patch graph. It has no dependency on React.
- **Interface** (`src/ui`): React components that render modules, knobs, jacks, and cables, and send commands to the engine.

A patch is modeled as a directed graph in which modules are nodes and cables are edges. Control-signal connections map onto Web Audio `AudioParam` inputs.

## Project structure

```
webms/
├── docs/        # Design notes and documentation
├── src/
│   ├── engine/  # Audio engine and patch graph
│   ├── ui/      # React components
│   └── main.jsx
├── tests/
└── README.md
```

## Getting started

Setup instructions will be added once the project scaffold is in place.

## Browser support

WebMS targets current versions of Chrome, Firefox, Safari, and Edge.

## License

To be determined.
