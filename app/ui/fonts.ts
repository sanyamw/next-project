import { Inter, Lusitana } from 'next/font/google';

type FontConfig = {
  [key: string]: any; // A more generic approach, allows any properties
};

export const inter: FontConfig = Inter({ subsets: ['latin'] });
export const lusitana: FontConfig = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
