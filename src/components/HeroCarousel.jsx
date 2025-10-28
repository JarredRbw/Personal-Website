import './HeroCarousel.css'

const HeroCarousel = ({ images }) => {
  // 只显示第一张图片
  const firstImage = images[0]

  return (
    <div className="hero-carousel">
      {/* 图片容器 - 只显示第一张 */}
      <div className="hero-images-container">
        <div className="hero-image">
          <img src={firstImage.url} alt={firstImage.title} />
          <div className="image-overlay" />
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
