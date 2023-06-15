import reviews from '../constants/reviews'
import Review from '../components/Review'

function Reviews(props) {
  const reviewComponents = reviews.map(rev => (
    <Review
      imageNum={rev.image}
      text={rev.text}
      name={rev.name}
    ></Review>
  ))

  return (
    <div id="reviewContainer">
      <h2>Read some reviews from satisfied customers</h2>
      {reviewComponents}
    </div>
  )
}

export default Reviews