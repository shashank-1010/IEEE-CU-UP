import { useState } from 'react';
import { useEmbeddableData } from '@embeddable/sdk';
import { WidgetConfig } from './types';
import { ImageSlider } from './components/ImageSlider';
import { ThumbnailGrid } from './components/ThumbnailGrid';
import './theme.css';

export default function App() {
  const { data: config } = useEmbeddableData<WidgetConfig>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { content, settings, styleOverrides } = config;

  if (!content?.images || content.images.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[px] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] prounded-xl">
        <p className="text-center text-[hsl(var(--muted-foreground))]">
          No images available. Please add images to display in the gallery.
        </p>
      </div>
    );
  }

  const thumbnailPosition = settings?.thumbnailPosition || 'bottom';
  const showThumbnails = settings?.showThumbnails ?? true;
  const isBottomLayout = thumbnailPosition === 'bottom';

  return (
    <div 
      className="w-full max-w-7xl mx-auto p-4 bg-[hsl(var(--background))]"
      data-element-id="gallery-wrapper"
      data-element-type="container"
      data-element-label="Gallery Wrapper"
      style={{backgroundColor: 'hsl(var(--background))', ...styleOverrides?.['gallery-wrapper']}}
    >
      {(content.title || content.subtitle) && (
        <div 
          className="mb text-center"
          data-element-id="header"
          data-element-type="container"
          data-element-label="Header"
          style={{...styleOverrides?.['header']}}
        >
          {content.title && (
            <h1 
              className="text-[hsl(var(--foreground))] text-4xl font-bold mb-2"
              data-element-id="title"
              data-element-type="text"
              data-element-label="Title"
              data-element-content-prop="content.title"
              style={{color: 'hsl(var(--foreground))', ...styleOverrides?.['title']}}
            >
              {content.title}
            </h1>
          )}
          {content.subtitle && (
            <p 
              className="text-[hsl(var(--muted-foreground))] text-lg"
              data-element-id="subtitle"
              data-element-type="text"
              data-element-label="Subtitle"
              data-element-content-prop="content.subtitle"
              style={{color: 'hsl(var(--muted-foreground))', ...styleOverrides?.['subtitle']}}
            >
              {content.subtitle}
            </p>
          )}
        </div>
      )}

      <div 
        className={`flex ${
          isBottomLayout ? 'flex-col' : 'flex-row'
        } gap-4`}
        data-element-id="gallery-content"
        data-element-type="container"
        data-element-label="Gallery Content"
        style={{...styleOverrides?.['gallery-content']}}
      >
        <div 
          className={`${
            isBottomLayout ? 'w-full' : showThumbnails ? 'w/4' : 'w-full'
          }`}
          style={{ aspectRatio: isBottomLayout ? '/9' : 'auto', minHeight: isBottomLayout ? 'auto' : '600px' }}
        >
          <ImageSlider
            images={content.images}
            autoPlay={settings?.autoPlay}
            autoPlayInterval={settings?.autoPlayInterval}
            transitionDuration={settings?.transitionDuration}
            enableKeyboardNav={settings?.enableKeyboardNav}
            currentIndex={currentImageIndex}
            onImageChange={setCurrentImageIndex}
            styleOverrides={styleOverrides}
          />
        </div>

        {showThumbnails && (
          <div 
            className={`${
              isBottomLayout ? 'w-full' : 'w-1/4'
            } bg-[hsl(var(--card))] rounded-xl shadow-sm`}
            style={{backgroundColor: 'hsl(var(--card))'}}
          >
            <ThumbnailGrid
              images={content.images}
              currentIndex={currentImageIndex}
              onThumbnailClick={setCurrentImageIndex}
              position={thumbnailPosition}
              styleOverrides={styleOverrides}
            />
          </div>
        )}
      </div>
    </div>
  );
}