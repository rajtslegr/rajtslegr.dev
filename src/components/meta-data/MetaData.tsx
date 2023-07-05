import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaDataProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const MetaData: React.FC<MetaDataProps> = ({
  title,
  description = 'Software Developer based in Prague, Czechia.',
  image = '/static/images/meta-image.jpg',
  type = 'website',
  date,
}) => {
  const router = useRouter();
  const url = `https://rajtslegr.dev${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={`https://rajtslegr.dev${image}`} />
      <meta property="og:type" content={type}></meta>
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Petr Rajtslegr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://rajtslegr.dev${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  );
};

export default MetaData;
