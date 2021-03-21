import { NextPage } from 'next';
import { useTheme } from 'next-themes';
import React from 'react';
import ThemeButton from '../components/ThemeButton';

const IndexPage: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ThemeButton handleClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        asd
      </ThemeButton>
      <div className="container flex justify-center items-top h-screen mx-auto">
        <div className="flex justify-center items-center w-full md:w-1/3 h-1/5 m-4 p-4 border border-solid border-gray-400 rounded-lg shadow-xs">
          <h1 className="mb-4 font-semibold">Coming soon...</h1>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
