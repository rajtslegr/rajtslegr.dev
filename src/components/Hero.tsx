import Image from 'next/image';
import CodeBlock from './CodeBlock';

interface Props {
  heroCode: [string];
}

const Hero: React.FC<Props> = ({ heroCode }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-between xl:justify-around gap-y-8 lg:flex-row">
      <CodeBlock code={heroCode} />
      <Image
        className="rounded-full shadow"
        src="/static/images/hero.png"
        alt="Hero"
        width={344}
        height={344}
        priority
      ></Image>
    </div>
  );
};

export default Hero;
