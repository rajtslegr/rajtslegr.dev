import Image from 'next/image';
import hero from '../../public/static/images/hero.jpg';
import WindowHeader from './WindowHeader';
export interface Props {
  code: string[];
}

const CodeBlock: React.FC<Props> = ({ code }) => {
  const IS_DEV = process.env.NODE_ENV === 'development';

  return (
    <div className="relative flex flex-col w-full max-w-4xl overflow-auto bg-white rounded-b shadow dark:bg-card">
      <WindowHeader />
      <div className="absolute hidden w-32 h-32 rounded-full md:w-56 md:h-56 overflow-hidden sm:block top-12 right-6">
        <Image
          unoptimized={IS_DEV}
          className="rounded-full shadow"
          src={hero}
          alt="Hero"
          placeholder="blur"
          priority
        ></Image>
      </div>
      <div className="p-2 text-sm sm:p-4 font-monos">
        {code.map((row, i) => {
          return (
            <pre key={i}>
              <code className="flex flex-row gap-3 break-all whitespace-pre-wrap sm:gap-6">
                <span className="leading-relaxed text-gray-500 select-none dark:text-gray-400">
                  {i < 9 ? ` ${i + 1}` : i + 1}
                </span>
                <span
                  className={`${
                    row.indexOf('//') === 0
                      ? 'text-gray-500 dark:text-gray-400'
                      : ''
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
