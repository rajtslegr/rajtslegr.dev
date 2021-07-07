const projects = [
  {
    title: 'cov19cz',
    description: 'Czech COVID-19 tracker application.',
    build: ['React', 'Axios', 'Recharts', 'styled-components'],
    image: 'cov19cz',
    live: 'https://cov19cz.vercel.app/',
    repo: 'https://github.com/RajceP/cov19cz',
  },
  {
    title: 'TypeWriter',
    description: 'Small typing game.',
    build: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite.js',
      'Faker',
      'Supabase',
    ],
    image: 'typewriter',
    live: 'https://typewriter-theta.vercel.app',
    repo: 'https://github.com/RajceP/typewriter',
  },
  {
    title: 'Twitter Bot - Vaccinated in Czechia',
    description:
      'Twitter bot tweeting daily number of people vaccinated in Czechia and other interesting statistics.',
    build: ['Node.js', 'TypeScript', 'Puppeteer', 'Twitter API'],
    image: 'vaccbot',
    live: 'https://twitter.com/ockovano',
    repo: 'https://github.com/RajceP/twitter-bot-vaccinated-in-czechia',
  },
  {
    title: 'rajtslegr.com',
    description: 'You are here right now! Cool, right?',
    build: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    image: 'rajtslegr',
    live: 'https://rajtslegr.com/',
    repo: 'https://github.com/RajceP/rajtslegr.com',
  },
];

export default projects;
