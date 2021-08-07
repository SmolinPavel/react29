import { useState, useMemo } from 'react';
import Button from '@material-ui/core/Button';

export const Reviews = () => {
  const [reviews, setReviews] = useState(['норм']);
  const [value, setValue] = useState(121);

  const calculatedValue = useMemo(() => {
    return value * 2 * 2 * 2 * 2;
  }, [value]);

  return (
    <div>
      <h1>Value: {calculatedValue} </h1>
      <div>
        <Button variant="contained" color="primary">
          Show time spent on this page!
        </Button>
      </div>
      <div>
        <input placeholder="Leave your feedback" />
      </div>
      <h1 onClick={() => setValue(value + 1)}>{value}</h1>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}>{review}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setReviews((prevReviews) => {
            return [...prevReviews, 'Все круто!!!'];
          })
        }
      >
        Update reviews
      </button>
    </div>
  );
};
