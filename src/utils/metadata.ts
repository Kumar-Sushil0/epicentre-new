import { Metadata } from 'next';

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  image = '/og-image.jpg',
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `https://thesilent.club${path}`;
  const fullTitle = `${title} | The Silent Club`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'The Silent Club',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
