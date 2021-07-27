import { useState, useEffect } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('value', value);

    return () => {
      console.log('effect cleanup', value);
    };
  }, [value]);

  // 1. Unmount component
  // 2. Dependency update

  return (
    <div>
      <h1 onClick={() => setValue(value + 1)}>{value}</h1>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}>{review}</li>
        ))}
      </ul>

      <button onClick={() => setReviews(['Все круто!!!'])}>
        Update reviews
      </button>
    </div>
  );
};
