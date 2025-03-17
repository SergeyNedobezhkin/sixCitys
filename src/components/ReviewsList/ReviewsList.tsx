import { ReviewsBlock } from "../../types/reviews.types";


function ReviewsList({ reviewsBlock }: { reviewsBlock: ReviewsBlock }) {

  return (
    <>
      <h2 className="reviews__title">
        Reviews · {reviewsBlock?.reviewsCount ? <span className="reviews__amount">{reviewsBlock?.reviewsCount}</span> : 0}
      </h2>
      <ul className="reviews__list">
        {reviewsBlock?.reviews?.map((review) =>
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.avatar}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">{review.rating}</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">
                {review.date.toLocaleDateString()}
              </time>
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default ReviewsList

