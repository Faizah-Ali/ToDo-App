import React, { useState } from 'react';
import './CSS/Review.css';

const reviews = [
  {
    text: "This app revolutionized my task management! A must-have for anyone!",
    author: "Jane Doe"
  },
  {
    text: "I can't believe how much more productive I've become!",
    author: "John Smith"
  },
  {
    text: "User-friendly interface and great features. Highly recommend!",
    author: "Alice Johnson"
  },
  {
    text: "This app helps me stay organized and focused every day.",
    author: "Bob Brown"
  },
  {
    text: "Perfect for both work and personal tasks. Love it!",
    author: "Charlie White"
  },
  {
    text: "The reminder feature is a lifesaver! Thank you!",
    author: "Diana Prince"
  },
  {
    text: "Finally, a to-do app that works for me. Excellent job!",
    author: "Eve Adams"
  },
  {
    text: "Sleek design and easy to navigate. My go-to app!",
    author: "Frank Castle"
  },
  {
    text: "Customizable and efficient. I can't recommend it enough!",
    author: "Gina Lee"
  },
  {
    text: "Keeps me on track with my goals. Fantastic app!",
    author: "Hank Pym"
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="review-section">
      <button className="arrow left" onClick={prevReview}>&lt;</button>
      <div className="review">
        <p>"{reviews[currentIndex].text}"</p>
        <h4>- {reviews[currentIndex].author}</h4>
      </div>
      <button className="arrow right" onClick={nextReview}>&gt;</button>
    </div>
  );
};

export default Review;
