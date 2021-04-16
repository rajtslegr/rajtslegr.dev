import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-around">
      <Image
        className="rounded-full shadow"
        src="/static/images/hero.png"
        alt="Hero"
        width={344}
        height={344}
        priority
      ></Image>
      <div className="hidden m-6 xl:block">
        <p className="mb-4 text-4xl">Petr Rajtslegr</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">Hello!</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          I am developer based in Prague, Czech Republic and I love to create
          things!
        </p>
      </div>
    </div>
  );
};

export default Hero;
