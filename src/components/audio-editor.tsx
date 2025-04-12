import { useEffect, useRef, useState } from "react";

export const AudioEditor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitch, setPitch] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const balanceNodeRef = useRef<StereoPannerNode | null>(null);
  const biquadFilterNodeRef = useRef<BiquadFilterNode | null>(null);

  useEffect(() => {
    // Initialize the AudioContext
    const context = new AudioContext();
    audioContextRef.current = context;
    return () => {
      // Clean up the AudioContext on unmount
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const loadAudio = async (url: string) => {
    if (!audioContextRef.current) return;
    try {
      setPitch(0);
      setBalance(0);
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
      const gainNode = audioContextRef.current.createGain();
      const balanceNode = new StereoPannerNode(audioContextRef.current, { pan: 0 });
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source
        .connect(gainNode)
        .connect(balanceNode)
        .connect(audioContextRef.current.destination);
      gainNodeRef.current = gainNode;
      balanceNodeRef.current = balanceNode;
      sourceRef.current = source;
    } catch (error) {
      console.error("Error loading audio:", error);
    }
  };

  const addBiquad = () => {
    if (!audioContextRef.current || !sourceRef.current) return;
    const biquadFilterNode = audioContextRef.current.createBiquadFilter();
    sourceRef.current
      .connect(biquadFilterNode)
      .connect(audioContextRef.current.destination);
    biquadFilterNodeRef.current = biquadFilterNode;
  };

  const removeBiquad = () => {
    if (biquadFilterNodeRef.current) {
      biquadFilterNodeRef.current.disconnect();
      biquadFilterNodeRef.current = null;
    }
  };

  const togglePlay = () => {
    if (!sourceRef.current) return;
    if (isPlaying) {
      setIsPlaying(false);
      sourceRef.current.stop();
      sourceRef.current = null;
    } else if (!isPlaying) {
      sourceRef.current.start();
      setIsPlaying(true);
      sourceRef.current.onended = () => {
        setIsPlaying(false);
        if (!sourceRef.current?.loop) {
          sourceRef.current = null;
        }
      };
    }
  };

  const handleDetune = (value: number) => {
    if (sourceRef.current) {
      sourceRef.current.detune.value = value;
      setPitch(value);
    }
  };

  const handleBalance = (value: number) => {
    if (balanceNodeRef.current) {
      balanceNodeRef.current.pan.value = value;
      setBalance(value);
    }
  };

  const handleVolume = (value: number) => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = value;
    }
  };

  const toggleLoop = () => {
    if (sourceRef.current) {
      const curr = sourceRef.current.loop;
      sourceRef.current.loop = !curr;
      setIsLoop(!curr);
    }
  };

  const reset = () => {
    if (sourceRef.current) {
      sourceRef.current.detune.value = 0;
      setPitch(0);
    }
    if (balanceNodeRef.current) {
      balanceNodeRef.current.pan.value = 0;
      setBalance(0);
    }
  };

  return (
    <div className="bg-slate-700/40">
      <h1>Audio Editor</h1>
      <button
        className="block border p-2"
        onClick={() => loadAudio("your-audio-url-or-path.mp3")}
      >
        Load Audio
      </button>
      <button
        className="block border p-2"
        onClick={togglePlay}
        disabled={!sourceRef.current}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
      <button
        className="block border p-2"
        onClick={toggleLoop}
        disabled={!sourceRef.current}
      >
        {isLoop ? "Loop is on" : "Loop is off"}
      </button>
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.5"
          onChange={(e) => handleVolume(Number(e.target.value))}
          className="block"
        />
      </label>
      <label>
        Detune (pitch):
        <span className="ml-2 font-medium">
          {pitch}
        </span>
        <input
          type="range"
          min="-1000"
          max="1000"
          step="1"
          value={pitch}
          onChange={(e) => handleDetune(Number(e.target.value))}
          className="block"
          disabled={!sourceRef.current}
        />
      </label>
      <label>
        L-R:
        <span className="ml-2 font-medium">
          {balance}
        </span>
        <input
          type="range"
          min="-1"
          max="1"
          step="0.01"
          value={balance}
          onChange={(e) => handleBalance(Number(e.target.value))}
          className="block"
          disabled={!sourceRef.current}
        />
      </label>
      <button
        className="block border p-2"
        onClick={addBiquad}
        disabled={!sourceRef.current}
      >
        Add Biquad Filter
      </button>
      <button
        className="block border p-2"
        onClick={removeBiquad}
        disabled={!sourceRef.current}
      >
        Remove Biquad Filter
      </button>
      <button
        className="block border p-2"
        onClick={reset}
        disabled={!sourceRef.current}
      >
        Reset effects
      </button>
    </div>
  );
};