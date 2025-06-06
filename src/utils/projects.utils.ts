import { Project } from '../types/types';

function preloadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = (err) => {
      console.error(`Failed to preload image: ${src}`, err);
      reject(new Error(`Failed to preload image: ${src}`));
    };
  });
}

function preloadVideo(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = src;
    video.preload = 'auto';
    video.oncanplaythrough = () => resolve(src);
    video.onerror = () => {
      console.error(`Failed to preload video: ${src}`);
      reject(new Error(`Failed to preload video: ${src}`));
    };
  });
}

export async function preloadProjectMedia(project: Project) {
  const preview = project.preview?.src
    ? (project.preview.type === 'img'
        ? preloadImage(project.preview.src).catch(() => null)
        : preloadVideo(project.preview.src).catch(() => null))
    : null;

  const screenshots = project.screenshots?.length
    ? await Promise.all(
        project.screenshots.map(src =>
          preloadImage(src).catch(() => null)
        )
      )
    : [];

  await Promise.all([preview, ...screenshots]);
  return project;
}