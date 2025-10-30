import Link from 'next/link'
import styles from '../components/styles/styles.module.css'
const HeroHomeTwo = () => {
  return (
    <>
      <div className={`techin-hero-section ${styles['bg-background']} `}>
        <div className="container">
          <div className="techin-hero-content2">
            <div className="techin-hero-tag tag2">
              <img src="/images/hero/shape2.svg" alt="" />
              Get Best IT Solution Business
              <img src="assets/images/hero/shape2.svg" alt="" />
            </div>
            <h1>IT Solutions for You</h1>
          </div>
          <div className="techin-hero-thumb thumb2" data-aos="fade-up" data-aos-duration="300">
            <img src="/images/hero/hero-thumb2.png" alt="" />
            <Link className="techin-popup-video2" href="/contact-us">
              <img className="teching-rotated" src="/images/hero/Circle-Button.svg" alt="" />
              <div className="play-btn">
                <img src="/images/hero/btn.svg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroHomeTwo
