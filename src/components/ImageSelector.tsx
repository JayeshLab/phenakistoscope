import { Upload } from 'lucide-react';

interface PresetImage {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

interface ImageSelectorProps {
  presetImages: PresetImage[];
  onImageSelect: (imageUrl: string) => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage: string;
}

function ImageSelector({ presetImages, onImageSelect, onFileUpload, selectedImage }: ImageSelectorProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
      <h3 className="text-xl font-semibold text-white mb-4">Select Animation</h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {presetImages.map((image) => (
          <button
            key={image.id}
            onClick={() => onImageSelect(image.url)}
            className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
              selectedImage === image.url
                ? 'ring-4 ring-blue-500 shadow-lg shadow-blue-500/50'
                : 'ring-2 ring-slate-600 hover:ring-slate-500'
            }`}
          >
            <img
              src={image.thumbnail}
              alt={image.name}
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <span className="text-white text-xs font-medium p-2 w-full text-center">
                {image.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={onFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-medium py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Upload size={20} />
          <span>Upload Custom Image</span>
        </label>
      </div>

      <p className="text-xs text-slate-400 mt-2 text-center">
        For best results, use circular images with radial patterns
      </p>
    </div>
  );
}

export default ImageSelector;
