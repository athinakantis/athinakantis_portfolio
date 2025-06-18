import { ReactNode, useEffect, useState } from 'react';
import { Assets, assets, preloadAssets } from '../utils/assets.data';
import { ContentContext } from './ContentContext';

interface Props {
  children: ReactNode;
}

export const ContentProvider = ({ children }: Props) => {
  const [content, setContent] = useState<Assets | null>(null);

  /*------------side effects-----------------*/
  useEffect(() => {
    const loadAllImages = async () => {
      try {
        const preloadedAssets = await preloadAssets(assets);
        setContent(preloadedAssets);
      } catch (err) {
        console.error('Error preloading images:', err);
      }
    };

    loadAllImages();
  }, []);

  const value = { content };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
