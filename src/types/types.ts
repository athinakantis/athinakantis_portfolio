export interface ProjectT {
  id: number,
  title: string,
  description: string,
  tags: string[],
  preview: {
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
}