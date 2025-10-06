import { useState } from 'react';
import PhenakistoscopeViewer from './components/PhenakistoscopeViewer';
import ImageSelector from './components/ImageSelector';
import { presetImages } from './data/presetImages';

function App() {
  const [selectedImage, setSelectedImage] = useState<string>(presetImages[0].url);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(200);
  const min: number = 20;
  const max: number = 900;
  const step: number = 10;

  const handleImageSelect = (imageUrl: string, speed: number) => {
    setSelectedImage(imageUrl);
    setRotationSpeed(speed);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Phenakistoscope</h1>
          <p className="text-slate-300 text-lg">
            A 19th-century animation device brought to digital life
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PhenakistoscopeViewer
              imageUrl={selectedImage}
              isRotating={isRotating}
              rotationSpeed={rotationSpeed}
            />
          </div>

          <div className="space-y-6">
            <ImageSelector
              presetImages={presetImages}
              onImageSelect={handleImageSelect}
              onFileUpload={handleFileUpload}
              selectedImage={selectedImage}
            />

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Controls</h3>

              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {isRotating ? 'Pause' : 'Play'}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Rotation Speed: {rotationSpeed}ms
                  </label>
                  <input
                    type="range"
                    min={ min }
                    max={ max }
                    step={ step }
                    value={rotationSpeed}
                    onChange={(e) => setRotationSpeed(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>Fast ({min}ms)</span>
                    <span>Slow ({max}ms)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-2">How to Use</h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Select a preset animation or upload your own circular image</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Adjust the rotation speed to find the optimal viewing rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>For best effect, focus on the center while the disk rotates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
