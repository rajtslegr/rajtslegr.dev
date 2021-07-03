import CodeBlock from 'components/CodeBlock';
import Image from 'next/image';
import hero from '../../public/static/images/hero.jpg';

interface Props {
  heroCode: string[];
}

const Hero: React.FC<Props> = ({ heroCode }) => {
  const IS_DEV = process.env.NODE_ENV === 'development';

  return (
    <div className="flex flex-col-reverse items-center justify-between xl:justify-around gap-y-8 lg:flex-row">
      <CodeBlock code={heroCode} />
      <div className="overflow-hidden rounded-full">
        <Image
          unoptimized={IS_DEV}
          className="rounded-full shadow"
          src={hero}
          alt="Hero"
          placeholder="blur"
          priority
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
