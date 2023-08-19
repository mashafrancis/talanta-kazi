import type { ReactNode } from 'react';

import '@/assets/css/fonts.css';
import { ClientProvider } from '@/components/client-provider';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import '../assets/css/global.css';

export const metadata = {
	title: 'Talanta Kazi',
	description: 'Unleash Kenyan talent.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en'
			className={cn(
				'min-h-screen font-sans text-black',
				fontSans.variable,
				fontMono.variable
			)}
			suppressHydrationWarning
		>
			<body className='antialiased'>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
}
