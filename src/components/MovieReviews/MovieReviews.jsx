import { useEffect, useState } from "react";

import { getMovieReviews } from "../../films";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const [review, setReview] = useState("");
  const { reviewId } = useParams();
  console.log(reviewId);

  useEffect(() => {
    if (!reviewId) {
      return;
    }
    const getReviewsById = async () => {
      try {
        const reviews = await getMovieReviews(reviewId);
        console.log(reviews);
        setReview(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewsById();
  }, [reviewId]);

  return (
    <div>
      <p>{review}</p>
    </div>
  );
}
