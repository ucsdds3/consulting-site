import { useState } from 'react';
import { useTheme } from "../Home/useTheme";

interface Photo {
  id: string;
  src: string;
  alt: string;
}

const PhotoGallery = () => {
  const { isDark } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // placeholder images
  const photos: Photo[] = [
    { id: 'photo1', src: '/path/to/photo1.jpg', alt: 'Gallery image 1' },
    { id: 'photo2', src: '/path/to/photo2.jpg', alt: 'Gallery image 2' },
    { id: 'photo3', src: '/path/to/photo3.jpg', alt: 'Gallery image 3' },
    { id: 'photo4', src: '/path/to/photo4.jpg', alt: 'Gallery image 4' },
    { id: 'photo5', src: '/path/to/photo5.jpg', alt: 'Gallery image 5' },
    { id: 'photo6', src: '/path/to/photo6.jpg', alt: 'Gallery image 6' },
    { id: 'photo7', src: '/path/to/photo7.jpg', alt: 'Gallery image 7' },
  ];

  const handlePhotoClick = (photoId: string) => {
    setSelectedPhoto(photoId);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className={`border rounded-lg overflow-hidden ${
        isDark ? "border-white-700 bg-black" : "border-black bg-white"
      }`}>
        <div className="grid grid-cols-3 gap-2 p-2">
          {/* Large photo - left top */}
          <div className="col-span-1 row-span-1 aspect-square">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo1' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo1')}
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Medium photo - middle top */}
          <div className="col-span-1 row-span-1 aspect-square">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo2' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo2')}
            >
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Large photo - right side (spans 2 rows) */}
          <div className="col-span-1 row-span-2 aspect-[1/2]">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo3' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo3')}
            >
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Medium photo - middle bottom */}
          <div className="col-span-1 row-span-1 aspect-square">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo4' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo4')}
            >
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small photo - middle */}
          <div className="col-span-1 row-span-1 aspect-square">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo6' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo6')}
            >
              <img
                src={photos[5].src}
                alt={photos[5].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Large photo - left bottom (spans 2 columns) */}
          <div className="col-span-2 row-span-1 aspect-[2/1]">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo5' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo5')}
            >
              <img
                src={photos[4].src}
                alt={photos[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small photo - bottom right */}
          <div className="col-span-1 row-span-1 aspect-square">
            <div 
              className={`w-full h-full bg-gray-200 cursor-pointer ${selectedPhoto === 'photo6' ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handlePhotoClick('photo6')}
            >
              <img
                src={photos[6].src}
                alt={photos[6].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;