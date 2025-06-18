import { createContext } from 'react';
import { Assets } from '../utils/assets.data';

type ContentProvider = {
  content: Assets | null
}

export const ContentContext = createContext<ContentProvider | undefined>(undefined);