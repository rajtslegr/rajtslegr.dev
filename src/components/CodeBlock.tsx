import WindowHeader from './WindowHeader';

export interface Props {
  code: string[];
}

const CodeBlock: React.FC<Props> = ({ code }) => {
  return (
    <div className="flex flex-col w-full overflow-auto bg-white rounded-b shadow lg:max-w-lg dark:bg-card">
      <WindowHeader />
      <div className="p-4 text-sm font-monos">
        {code.map((row, i) => {
          return (
            <pre key={i}>
              <code className="flex flex-row gap-6 break-all whitespace-pre-wrap">
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
