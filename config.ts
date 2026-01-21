import { WidgetConfig } from './types';

export const widgetConfig: WidgetConfig = {
  content: {
    title: 'Modern Architecture Gallery',
    subtitle: 'Discover stunning architectural masterpieces from around the world',
    images: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1615020c4bff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDMMjd8MHwxfHNlYXJjaHwxfHxtbRlcm4lMjBhcmNoaXRlY3RcmV8ZW58MHwwfHx8MTcMjcNjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Contemporary Concrete',
        description: 'A stunning example of modern concrete architecture',
        photographer: 'Amir Hosseini',
        photographerUrl: 'https://unsplash.com/@mmpixz'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1521-1bed150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDM4Mjd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHwwfHx8MTc2Mjc4NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Reaching Skyward',
        description: 'A dramatic upward perspective of contemporary tower design',
        photographer: 'Coline Beulin',
        photographerUrl: 'https://unsplash.com/@colinextremis'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1543071-d91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDM4Mjd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHwwfHx8MTc2Mjc4NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Minimalist Elegance',
        description: 'Clean lines and natural materials in perfect harmony',
        photographer: 'Wiktor Karkocha',
        photographerUrl: 'https://unsplash.com/@rotkif'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1531022-ebb0da1ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDM4Mjd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHwwfHx8MTc2Mjc4NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Geometric Abstraction',
        description: 'Bold geometric patterns creating visual intrigue',
        photographer: 'Tobias Keller',
        photographerUrl: 'https://unsplash.com/@tokeller'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1518045bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDM4Mjd8MHwxfHNlYXJjaHwfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHwwfHx8MTc2Mjc4NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Industrial Beauty',
        description: 'Raw concrete forming powerful structural elements',
        photographer: 'Paul Minami',
        photographerUrl: 'https://unsplash.com/@paulminami'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1461008cbd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDM4Mjd8MHwxfHNlYXJjaHwfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHwwfHx8MTc2Mjc4NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Glass Reflection',
        description: 'Modern glass facade reflecting the urban landscape',
        photographer: 'Redd Francisco',
        photographerUrl: 'https://unsplash.com/@reddfrancisco'
      }
    ]
  },
  settings: {
    autoPlay:,
    autoPlayInterval: 5000,
    showThumbnails: true,
    thumbnailPosition: 'bottom',
    transitionDuration: 500,
    enableKeyboardNav: true
  }
};
