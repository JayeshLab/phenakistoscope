interface PhenakistoscopeViewerProps {
  imageUrl: string;
  isRotating: boolean;
  rotationSpeed: number;
}

function PhenakistoscopeViewer({ imageUrl, isRotating, rotationSpeed }: PhenakistoscopeViewerProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-full shadow-2xl"
            style={{
              width: '500px',
              height: '500px',
              maxWidth: '90vw',
              maxHeight: '90vw',
            }}
          >
            <img
              src={imageUrl}
              alt="Phenakistoscope disk"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                animation: isRotating ? `spin ${rotationSpeed}ms linear infinite` : 'none',
              }}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border-4 border-slate-600 shadow-lg z-10" />
        </div>
      </div>
    </div>
  );
}

export default PhenakistoscopeViewer;
