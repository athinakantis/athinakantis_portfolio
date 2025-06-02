export interface Project {
  id: number,
  title: string,
  description: string,
  tags: string[],
  preview: {
    height?: string | number,
    width?: string | number,
    type: string,
    src: string,
    alt: string
  },
  cardPreview: {
    src: string,
    alt: string,
    description: string
  },
  features?: string[],
  technologies: string[],
  screenshots: string[],
  embeddedContent: {
    figma: string
  } | null,
  livePage: string | null,
  sourceCode: string
  figmaDesign?: string;
}