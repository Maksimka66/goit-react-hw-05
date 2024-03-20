import { useEffect, useState } from "react";

import { getMovieReviews } from "../../films";
import { useParams } from "react-router-dom";

export default function MovieReviews({ id }) {
  const [review, setReview] = useState("");
  const { reviewId } = useParams();
  console.log(reviewId);

  useEffect(() => {
    if (!id) {
      return;
    }
    const getReviewsById = async () => {
      try {
        const reviews = await getMovieReviews(id);
        console.log(reviews);
        setReview(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewsById();
  }, [id]);

  return (
    <div>
      <p>{review}</p>
    </div>
  );
}
