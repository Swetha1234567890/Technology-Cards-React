// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`list-item-container ${className}`}>
      <div className="container">
        <div className="text-container">
          <h1 className="title">{title}</h1>
          <p className="about">{description}</p>
        </div>
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
