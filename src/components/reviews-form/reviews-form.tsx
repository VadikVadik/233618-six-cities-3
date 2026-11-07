import { useState, ChangeEvent, Fragment } from 'react';

function ReviewsForm() {
  const [userRatings, setUserRatings] = useState([
    { title: 'perfect', value: 5, checked: false },
    { title: 'good', value: 4, checked: false },
    { title: 'not bad', value: 3, checked: false },
    { title: 'badly', value: 2, checked: false },
    { title: 'terribly', value: 1, checked: false },
  ]);

  const [userReview, setUserReview] = useState('');

  const handleRatingChange = (value: number) => {
    const newUserRatings = userRatings.map((rating) => ({
      ...rating,
      checked: rating.value === value,
    }));

    setUserRatings(newUserRatings);
  };

  const handleReviewChange = (
    target: ChangeEvent<HTMLTextAreaElement>['target'],
  ) => setUserReview(target.value);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {userRatings.map(({ value, title, checked }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={checked}
              onChange={() => handleRatingChange(value)}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
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
        onChange={({ target }) => handleReviewChange(target)}
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
