
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  { name: "John Doe", review: "Amazing experience! Helped me stay productive.", rating: 5 },
  { name: "Sarah Smith", review: "Great UI and easy to use. Love the drag & drop feature!", rating: 4.5 },
  { name: "Michael Lee", review: "Simple yet powerful task manager. Highly recommended!", rating: 5 },
  { name: "Emma Watson", review: "Really improved my workflow. Fantastic!", rating: 4.5 },
];

const Testimonials = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-10 px-4">
      <h2 className="text-2xl font-bold mb-2">What Our Users Say...</h2>
      <div className="flex justify-center mb-4 text-yellow-500">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
        <Star size={20} fill="currentColor" className="opacity-50" />
        <span className="ml-2 text-gray-600 text-lg">4.5</span>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"{testimonial.review}"</p>
              <p className="mt-2 font-semibold">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;