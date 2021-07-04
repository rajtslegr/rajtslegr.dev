import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  description?: string;
  type?: string;
  date?: string;
}

const MetaData: React.FC<Props> = ({
  title,
  description = 'Full Stack developer based in Prague, Czech Republic.',
  type = 'website',
  date,
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta property="title" content={title} />
      <meta name="description" content={description}></meta>
      <link rel="canonical" href={`https://rajtslegr.com${router.asPath}`} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:site_name" content="Petr Rajtslegr" />
      <meta property="og:type" content={type}></meta>
      <meta
        property="og:url"
        content={`https://rajtslegr.com${router.asPath}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  );
};

export default MetaData;
