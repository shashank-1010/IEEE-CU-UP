export interface GalleryImage {
  imageUrl: string;
  title?: string;
  description?: string;
  photographer?: string;
  photographerUrl?: string;
}

export interface WidgetConfig {
  content?: {
    title?: string;
    subtitle?: string;
    images?: GalleryImage[];
  };
  settings?: {
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showThumbnails?: boolean;
    thumbnailPosition?: 'bottom' | 'right';
    transitionDuration?: number;
    enableKeyboardNav?: boolean;
  };
  styleOverrides?: {
    [elementId: string]: React.CSSProperties;
  };
}