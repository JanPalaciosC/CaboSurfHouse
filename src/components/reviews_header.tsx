import { FaStar } from 'react-icons/fa';

const ReviewsHeader = () => {
  return (
    <section
      id="airbnb"
      className="flex flex-col items-center justify-center bg-baja-blue px-6 py-16 sm:px-8 text-center text-baja-light"
    >
      <h2 className="mb-4 font-serif text-3xl font-semibold leading-snug tracking-widest uppercase md:text-4xl">
        GUEST REVIEWS & BOOKING
      </h2>

      <p className="mb-10 font-sans text-base text-baja-light/90 sm:text-lg">
        Our Guests love their stay. Experience it for yourself.
      </p>

      {/* flex container for the rating and button */}
      <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
        {/* block of rating */}
        <div className="flex cursor-pointer items-center space-x-3 transition-transform duration-300 hover:scale-105">
          <span className="font-sans text-base font-medium tracking-wide sm:text-lg">
            Rate: 4.9 / 5
          </span>
          <div className="flex space-x-1">
            {/* Dynamic stars */}
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-white" />
            ))}
          </div>
        </div>

        {/* Button to view on Airbnb */}
        <a
          href="https://www.airbnb.com/rooms/801720303200373103?unique_share_id=045c04bd-8b83-4ce0-862e-d56eced865b0&viralityEntryPoint=1&s=76"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white bg-transparent px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-white hover:text-baja-blue"
        >
          VIEW ON AIRBNB
        </a>
      </div>
    </section>
  );
};

export default ReviewsHeader;
