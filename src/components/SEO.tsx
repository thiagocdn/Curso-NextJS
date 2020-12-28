import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shoudExcludeTitleSufix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  shoudExcludeTitleSufix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `${title}${!shoudExcludeTitleSufix ? ' | DevCommerce' : ''}`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : null;


  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta name="description" content={description}/> }
      { image && <meta name="image" content={pageImage}/> }

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> }
    </Head>
  );
}