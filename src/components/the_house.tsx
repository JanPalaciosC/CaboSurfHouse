import { FaBed, FaSwimmer, FaChartLine, FaSnowflake, FaCouch, FaKey } from 'react-icons/fa';
import { MdEnergySavingsLeaf } from 'react-icons/md';

const TheHouse = () => {
  const houseDetails = [
    {
      id: 1,
      title1: '3 BEDROOMS',
      title2: '3.5 BATHROOMS',
      title3: '',
      icon: <FaBed size={40} />,
    },
    {
      id: 2,
      title1: 'AIR',
      title2: 'CONDITIONING',
      title3: '',
      icon: <FaSnowflake size={40} />,
    },
    {
      id: 3,
      title1: '7M X 3M',
      title2: 'CHUKUM POOL',
      title3: '',
      icon: <FaSwimmer size={40} />,
    },
    {
      id: 4,
      title1: 'OFF-GRID BRAND NEW',
      title2: 'LITHIUM BATTERIES',
      title3: '',
      icon: <MdEnergySavingsLeaf size={40} />,
    },
    {
      id: 5,
      title1: 'FULLY',
      title2: 'FURNISHED',
      title3: '',
      icon: <FaCouch size={40} />,
    },
    {
      id: 6,
      title1: 'TURN KEY',
      title2: 'INVESTMENT PROPERTY',
      title3: '',
      icon: <FaKey size={40} />,
    },
    {
      id: 7,
      title1: '$4,000 USD/ AVG',
      title2: 'INCOME',
      title3: '',
      icon: <FaChartLine size={40} />,
    },
  ];

  return (
    <section
      id="the-house"
      className="w-full bg-baja-blue px-6 py-16 text-baja-light sm:px-8 md:px-16 lg:px-24"
    >
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side: Icons Grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 sm:gap-x-10 lg:w-[75%]">
          {houseDetails.map((detail) => (
            <div
              key={detail.id}
              className="group flex w-[42%] sm:w-[22%] flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {detail.icon}
              </div>

              {/* Title */}
              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase transition-transform duration-300 group-hover:scale-110">
                {detail.title1} {detail.title2 && <br />} {detail.title2} {detail.title3 && <br />}{' '}
                {detail.title3}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Side: Text Block (Price + Description) */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[25%] lg:pl-8">
          {/* Precio y MLS */}
          <div className="mb-6 w-full border-b border-white/20 pb-6">
            <h2 className="font-serif text-3xl font-semibold tracking-wider text-white sm:text-4xl">
              $729,000 USD
            </h2>
            <p className="mt-2 font-sans text-sm font-bold tracking-widest text-baja-green uppercase">
              MLS# 26-553
            </p>
          </div>

          {/* Descripción de la casa */}
          <p className="font-serif text-lg leading-relaxed text-baja-light sm:text-2xl">
            A spacious, off-grid sanctuary engineered for ultimate comfort, offering complete energy
            autonomy and living in perfect harmony with nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheHouse;
