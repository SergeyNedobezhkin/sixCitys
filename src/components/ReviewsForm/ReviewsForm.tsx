import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Review } from "../../types/reviews.types";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useParams } from "react-router-dom";
import { fetchNewCommentReviewsBlockAction } from "../../store/api-actions";

function getRatingTitle(rating: number): string {
  switch (rating) {
    case 5: return 'perfect';
    case 4: return 'good';
    case 3: return 'not bad';
    case 2: return 'badly';
    case 1: return 'terribly';
    default: return '';
  }
}

function ReviewsForm() {
  const dispatch = useAppDispatch();
  const reviewsBlock = useAppSelector((state) => state.offersReducer.reviewsBlock as Review[]);
  const { offerId } = useParams();
  const [newReview, setNewReview] = useState({
    comment: '',
    rating: 0
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isCommentValid = newReview.comment.length >= 50;
    const isRatingValid = newReview.rating > 0;
    setIsSubmitDisabled(!(isCommentValid && isRatingValid));
  }, [newReview.comment, newReview.rating]);

  const changeRatingValues = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNewReview({
      ...newReview,
      rating: value
    });
  };

  const changeCommentValues = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setNewReview({
      ...newReview,
      comment: comment
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (offerId && !isSubmitDisabled) {
      dispatch(fetchNewCommentReviewsBlockAction({
        offerId,
        reviewData: {
          comment: newReview.comment,
          rating: newReview.rating
        }
      })).then(() => {
        // Сброс формы
        setNewReview({
          comment: '',
          rating: 0
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <React.Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              checked={newReview.rating === rating}
              id={`${rating}-stars`}
              onChange={changeRatingValues}
              type="radio"
              value={rating}
            />
            <label
              htmlFor={`${rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={getRatingTitle(rating)}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={changeCommentValues}
        value={newReview.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;