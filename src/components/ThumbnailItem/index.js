// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageData, isActive, setActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageData
  const imgClass = isActive ? 'img active' : 'img'

  const onClickImg = () => {
    setActiveId(id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onClickImg} className="img-button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className={imgClass} />
      </button>
    </li>
  )
}

export default ThumbnailItem
