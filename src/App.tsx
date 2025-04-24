import { Animations } from "./components/animations";
import { AudioEditor } from "./components/audio-editor";
import { BentoGrid } from "./components/bento-grid";
import { ImageViewer360 } from "./components/image-viewer-360";
import { ThreeModel } from "./components/three-fiber-model";

function App() {
  return (
    <>
      <h1 className="font-semibold">React, Vite and Tailwind CSS</h1>
      <Animations />
      <AudioEditor />
      <ThreeModel />
      <ImageViewer360 />
      <BentoGrid />
    </>
  );
}

export default App;
