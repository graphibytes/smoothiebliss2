import { RatingCarousel } from "../components/ratingcarousel";

export function AboutUs() {
    return (
    <section id="about-us" className=" py-16 px-8">
      <div className="flex flex-col ">
                <h2 className="text-6xl font-serif font-bold text-gray-800 mb-6">About Us</h2>
                <div className="flex flex-col lg:flex-row gap-4 mx-auto">
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                        Welcome to <span className="font-semibold text-amber-500">Smoothie Bliss</span>, where every sip is a step toward
                        happiness and health! We believe in the power of fresh, natural ingredients to nourish your body and uplift
                        your spirit.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-4">
                        From classic favorites to creative blends, our smoothies are crafted with care, using locally sourced,
                        organic ingredients. Whether you're fueling your workout, kick-starting your morning, or just treating
                        yourself, every cup is packed with flavor and goodness.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                        Join us on a journey of flavor and wellness. One smoothie at a time, let’s sip our way to bliss!
                        </p>

                </div>

        {/* RATINS HEADING */}
        <h2 className="text-4xl font-serif font-bold text-gray-800 my-6">What Our Clients say</h2>
                
        {/* RATINGS */}
        <RatingCarousel/>
      </div>
    </section>
  );
}