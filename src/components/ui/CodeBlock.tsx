import Image from 'next/image';
import hero from '../../../public/static/images/hero.jpg';
import WindowHeader from './WindowHeader';
export interface Props {
  code: string[];
}

const CodeBlock: React.FC<Props> = ({ code }) => {
  return (
    <div className="relative flex flex-col w-full max-w-4xl overflow-auto bg-white rounded shadow dark:bg-card">
      <WindowHeader />
      <div className="absolute hidden w-32 h-32 overflow-hidden rounded-full shadow md:w-56 md:h-56 sm:block top-12 right-6">
        <Image src={hero} alt="Hero" placeholder="blur" priority></Image>
      </div>
      <div className="p-2 text-sm sm:p-4">
        {code.map((row, i) => {
          return (
            <pre key={i}>
              <code className="flex flex-row gap-3 font-mono break-all whitespace-pre-wrap sm:gap-6">
                <span className="leading-relaxed text-gray-500 select-none dark:text-gray-400">
                  {i < 9 ? ` ${i + 1}` : i + 1}
                </span>
                <span
                  className={`${
                    row.indexOf('//') === 0
                      ? 'text-gray-500 dark:text-gray-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {row}
                </span>
              </code>
            </pre>
          );
        })}
      </div>
    </div>
  );
};

export default CodeBlock;
