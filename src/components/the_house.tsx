import { FaBed, FaSwimmer, FaChartLine } from 'react-icons/fa';
import { MdEnergySavingsLeaf } from 'react-icons/md';

const TheHouse = () => {
  // Array of house details with their respective icons and descriptions
  const houseDetails = [
    {
      id: 1,
      title1: '3 BEDROOMS',
      title2: '3.5 BATHROOMS',
      title3: 'With A/C',
      icon: <FaBed size={40} />,
    },
    {
      id: 2,
      title1: '7M X 3M',
      title2: 'CHUKUM POOL',
      icon: <FaSwimmer size={40} />,
    },
    {
      id: 3,
      title1: 'OFF-GRID',
      title2: 'SOLAR POWER',
      icon: <MdEnergySavingsLeaf size={40} />,
    },
    {
      id: 4,
      title1: '$4,000 USD/ AVG',
      title2: 'INCOME',
      icon: <FaChartLine size={40} />,
    },
  ];

  return (
    <section
      id="the-house"
      className="w-full bg-baja-blue px-6 py-16 sm:px-8 md:px-16 lg:px-24 text-baja-light"
    >
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-8 md:grid-cols-4 lg:w-[70%]">
          {houseDetails.map((detail) => (
            // Group id for hover effect
            <div
              key={detail.id}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/*Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {detail.icon}
              </div>

              {/* Title */}
              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase transition-transform duration-300 group-hover:scale-110">
                {detail.title1} <br /> {detail.title2} <br /> {detail.title3}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Text Block */}
        <div className="lg:w-[30%] lg:pl-12">
          <p className="font-serif text-lg leading-relaxed text-baja-light sm:text-xl">
            A spacious, off-grid sanctuary engineered for ultimate comfort, offering complete energy
            autonomy and living in perfect harmony with nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheHouse;
