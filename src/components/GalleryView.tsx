'use client';

import { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface Photo {
  _id: string;
  title: string;
  image: any;
  alt: string;
  clientName?: string;
  location?: string;
}

export default function GalleryView({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  const formattedPhotos = photos.map((photo) => ({
    src: urlForImage(photo.image).url()!,
    width: 1080, // Default width for ratio calculation
    height: 1620, // Default height for ratio calculation
    alt: photo.alt,
    title: photo.title,
    clientName: photo.clientName,
    location: photo.location,
  }));

  return (
    <>
      <MasonryPhotoAlbum
        photos={formattedPhotos}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        spacing={20}
        render={{
          photo: ({ photo, wrapperStyle }: any) => (
            <div style={wrapperStyle} className="group relative overflow-hidden cursor-pointer">
              <Image
                src={photo.src}
                alt={photo.alt || ''}
                width={photo.width}
                height={photo.height}
                className="grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-light uppercase tracking-widest">{photo.title}</h3>
                {photo.clientName && (
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{photo.clientName}</p>
                )}
              </div>
            </div>
          ),
        }}
      />

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={formattedPhotos.map((p) => ({ src: p.src }))}
      />
    </>
  );
}
