import { MdSurfing } from 'react-icons/md';
import { IoSunnySharp } from 'react-icons/io5';
import { GiMeditation } from 'react-icons/gi';
import { FaMountainSun } from 'react-icons/fa6';

const Features = () => {
  // List of the 4 features with their respective icons, colors, and descriptions
  const featureList = [
    {
      id: 1,
      title: 'SURF',
      desc: 'World-class Waves a few steps from home.',
      color: 'text-baja-blue',
      icon: <MdSurfing size={48} />,
    },
    {
      id: 2,
      title: 'RELAX',
      desc: 'Private pool, ocean views & total privacy.',
      color: 'text-baja-green',
      icon: <IoSunnySharp size={48} />,
    },
    {
      id: 3,
      title: 'REFRESH',
      desc: 'Wellness spaces for mind, body & soul.',
      color: 'text-baja-blue',
      icon: <GiMeditation size={48} />,
    },
    {
      id: 4,
      title: 'EXPLORE',
      desc: 'The beauty & adventure of East Cape.',
      color: 'text-baja-green',
      icon: <FaMountainSun size={48} />,
    },
  ];

  return (
    <section className="w-full bg-baja-light px-6 py-16 sm:px-8 md:px-16 lg:px-24">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* left text block */}
        <div className="lg:w-1/3">
          <p className="font-serif text-lg leading-relaxed text-baja-dark sm:text-xl lg:text-2xl">
            A luxury retreat designed for those who seek more than just a vacation. Baja Surf House
            is where modern comfort meets the untamed beauty of Baja California Sur.
          </p>
        </div>

        {/* Right grid for features */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-8 md:grid-cols-4 lg:w-2/3">
          {featureList.map((feature) => (
            <div
              key={feature.id}
              className="group flex cursor-pointer flex-col items-center text-center"
            >
              <div
                className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3
                className={`mb-3 font-serif text-base font-semibold tracking-widest uppercase transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
              >
                {feature.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-baja-dark sm:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
