import { FaStar } from 'react-icons/fa';

const ReviewsCards = () => {
  // Array of review objects, each containing an id, name, date, text, and image path
  const reviews = [
    {
      id: 1,
      name: 'Robyn',
      date: 'April 2026',
      text: '"Phillip was an amazing host. He couldn\'t have done anything more to make our stay more enjoyable!"',
      img: './gallery/pool.webp',
    },
    {
      id: 2,
      name: 'Justin',
      date: 'February 2026',
      text: '"Phillip is a genuine and caring host. Aside from the property, we really enjoyed his company."',
      img: './gallery/night_outside.webp',
    },
    {
      id: 3,
      name: 'Sean',
      date: 'April 2026',
      text: '"This house was beautiful, located in a very quiet area and well-positioned between the East Cape surf spots and the town."',
      img: './gallery/living_room.webp',
    },
  ];

  return (
    <section className="bg-baja-light px-6 py-16 sm:px-8 md:px-16 lg:px-24">
      {/* Grid 3 columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {reviews.map((review) => (
          //  Main container for each review card
          <div
            key={review.id}
            className="group relative h-[350px] w-full cursor-pointer overflow-hidden rounded-sm shadow-xl sm:h-[400px]"
          >
            {/* Image background */}
            <img
              src={review.img}
              alt={`Review by ${review.name}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end p-6 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-8">
              {/* Name and Stars */}
              <div className="mb-3 flex items-center space-x-3">
                <span className="font-serif text-xl font-semibold text-white sm:text-2xl">
                  {review.name}
                </span>

                {/* Stars Jumping */}
                <div className="flex space-x-1 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm text-white" />
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="mb-4 font-sans text-sm leading-relaxed text-gray-200">{review.text}</p>

              {/* Date */}
              <span className="self-end font-sans text-xs font-medium text-gray-400">
                {review.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsCards;
