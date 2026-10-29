import { useState, ChangeEvent, Fragment } from 'react';

function ReviewsForm() {
  const [userRating, setUserRating] = useState([
    { title: 'perfect', value: 5, checked: false },
    { title: 'good', value: 4, checked: false },
    { title: 'not bad', value: 3, checked: false },
    { title: 'badly', value: 2, checked: false },
    { title: 'terribly', value: 1, checked: false },
  ]);

  const [userReview, setUserReview] = useState('');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {userRating.map((ratingItem, id) => (
          <Fragment key={ratingItem.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingItem.value}
              id={`${ratingItem.value}-stars`}
              type="radio"
              checked={ratingItem.checked}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                setUserRating([
                  ...userRating
                    .slice(0, id)
                    .map((item) => ({ ...item, checked: false })),
                  { ...ratingItem, checked: target.checked },
                  ...userRating
                    .slice(id + 1)
                    .map((item) => ({ ...item, checked: false })),
                ]);
              }}
            />
            <label
              htmlFor={`${ratingItem.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingItem.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userReview}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setUserReview(target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
