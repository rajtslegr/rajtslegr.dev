const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-around">
      <img
        srcSet="/static/images/hero-1.jpg 164w, /static/images/hero-2.jpg 328w, /static/images/hero-3.jpg 658w"
        sizes="(max-width: 327px) 95vw, 328px"
        width={327}
        height={327}
        alt="Hero"
        className="rounded-full shadow-xl"
      ></img>
      <div className="hidden m-6 xl:block">
        <p className="mb-4 text-4xl">Petr Rajtslegr</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">Hello!</p>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          I am developer based in Prague, Czech Republic and I love to create things!
        </p>
      </div>
    </div>
  );
};

export default Hero;
