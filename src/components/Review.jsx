import image1 from '../constants/happy-dog-1.jpg'
import image2 from '../constants/happy-dog-2.jpg'
import image3 from '../constants/happy-dog-3.jpg'

function Review(props) {
  const { imageNum, name, text } = props
  const images = [image1, image2, image3]

  return (
    <div className="review">
      <img src={images[imageNum - 1]} style={{ height: '300px', width: '400px' }} />
      <p>{text}</p>
      <p>{`-${name}`}</p>
    </div>
  )
}

export default Review