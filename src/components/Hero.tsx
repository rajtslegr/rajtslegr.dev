import CodeBlock from 'components/CodeBlock';
import Image from 'next/image';
import hero from '../../public/static/images/hero.jpg';

interface Props {
  heroCode: string[];
}

const Hero: React.FC<Props> = ({ heroCode }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-between xl:justify-around gap-y-8 lg:flex-row">
      <CodeBlock code={heroCode} />
      <Image
        className="rounded-full shadow"
        src={hero}
        alt="Hero"
        placeholder="blur"
      ></Image>
    </div>
  );
};

export default Hero;
