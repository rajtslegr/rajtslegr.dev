interface Props {
  code: string[];
}

const CodeBlock: React.FC<Props> = ({ code }) => {
  return (
    <div className="flex flex-col w-full p-4 overflow-auto text-sm transition border border-gray-200 rounded shadow font-monos lg:max-w-lg">
      {code.map((row, i) => {
        return (
          <pre
            key={i}
            className="flex flex-row gap-6 break-all whitespace-pre-wrap"
          >
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
          </pre>
        );
      })}
    </div>
  );
};

export default CodeBlock;
