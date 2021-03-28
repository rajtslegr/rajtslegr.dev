const Hero: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around items-center">
      <img
        srcSet="/hero-1.jpg 164w, /hero-2.jpg 328w, /hero-3.jpg 658w"
        sizes="(max-width: 327px) 95vw, 328px"
        width={327}
        height={327}
        alt="Hero"
        className="rounded-full shadow-xl"
      ></img>
      <div className="hidden 2xl:block m-6">
        <p className="text-4xl mb-4">Petr Rajtslegr</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">Hello!</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          I am developer based in Prague, Czech Republic and I love to create things!
        </p>
      </div>
    </div>
  );
};

export default Hero;
