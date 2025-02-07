import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { RatingCard } from "./ratingcard";

export function RatingCarousel() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 5000, // Transition speed
    slidesToShow: 3, // Number of items shown at a time
    slidesToScroll: 1, // Number of items scrolled at a time
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set speed for auto sliding
    responsive: [
      {
        breakpoint: 768, // For small screens (mobile), show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1024, // For medium screens (tablet), show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  const ratingsData = {
    ratings: {
      average: 4.5,
      totalReviews: 125,
      reviews: [
        {
          username: "Michael Mwai",
          src: "https://placehold.co/600x400.png",
          rating: 5,
          comment: "Excellent smoothies! Loved every sip."
        },
        {
          username: "Aisha Mohammed",
          src: "https://placehold.co/600x400.png",
          rating: 4,
          comment: "Great flavor, but the price could be a bit lower."
        },
        {
          username: "Peter Mungai",
          src: "https://placehold.co/600x400.png",
          rating: 4,
          comment: "Very refreshing, will definitely come back!"
        },
        {
          username: "Steve Nene",
          src: "https://placehold.co/600x400.png",
          rating: 4,
          comment: "Very refreshing, will definitely come back!"
        },
        {
          username: "Washington Maina",
          src: "https://placehold.co/600x400.png",
          rating: 4,
          comment: "Very refreshing, will definitely come back!"
        }
      ]
    }
  };

  // Function to render the rating stars
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-amber-500" /> : <FaRegStar key={i} className="text-amber-500" />);
    }
    return stars;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-xl font-bold mb-4">Average Ratings: {ratingsData.ratings.average}</h2>
      <h2 className="text-xl font-bold mb-8">Total Reviews: {ratingsData.ratings.totalReviews}</h2>
      <Slider {...settings}>
        {ratingsData.ratings.reviews.map((review, index) => (
          <div key={index} className="px-4 mt-4 mb-4">
            <RatingCard
              src={review.src}
              username={review.username}
              rating={renderStars(review.rating)}
              desc={review.comment}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
