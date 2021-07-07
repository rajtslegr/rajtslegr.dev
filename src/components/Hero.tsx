import CodeBlock from '@/components/CodeBlock';

interface Props {
  heroCode: string[];
}

const Hero: React.FC<Props> = ({ heroCode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-8">
      <CodeBlock code={heroCode} />
    </div>
  );
};

export default Hero;
