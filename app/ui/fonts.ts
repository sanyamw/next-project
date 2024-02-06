import { Inter, Lusitana } from 'next/font/google';

type FontConfig = {
  subsets: string[];
  weight?: string[];
};

export const inter: FontConfig = Inter({ subsets: ['latin'] });
export const lusitana: FontConfig = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
