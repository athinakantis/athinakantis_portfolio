import portrait from '../assets/about/IMG_7939.jpeg';
import toddlerPortrait from '../assets/about/portrait_athina.jpg';
import drawing from '../assets/about/old_drawing_700w.png';
import { preloadImage } from './projects.utils';
import { art } from './gallery.data';

export interface Assets {
  about: { id: string; src: string }[];
  gallery: {
    portraits: { src: string; height: number }[];
    landscapes: { src: string; height: number }[];
    illustrations: { src: string; height: number }[];
  };
}

export const assets: Assets = {
  about: [
    { id: 'portrait', src: portrait },
    { id: 'drawing', src: drawing },
    { id: 'toddlerPortrait', src: toddlerPortrait },
  ],
  gallery: art,
};

export async function preloadAssets(assets: Assets): Promise<Assets> {
  const about = await Promise.all(
    assets.about.map(async ({ id, src }) => ({
      id,
      src: await preloadImage(src),
    }))
  );

  const gallery: Assets['gallery'] = {
    portraits: await Promise.all(
      assets.gallery.portraits.map(async ({ src, height }) => ({
        src: await preloadImage(src),
        height,
      }))
    ),
    landscapes: await Promise.all(
      assets.gallery.landscapes.map(async ({ src, height }) => ({
        src: await preloadImage(src),
        height,
      }))
    ),
    illustrations: await Promise.all(
      assets.gallery.illustrations.map(async ({ src, height }) => ({
        src: await preloadImage(src),
        height,
      }))
    ),
  };

  return { about, gallery };
}
