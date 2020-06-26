import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview  } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const review = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {review}
        </ul>
      </div>
    );
  }

};

export default Reviews;