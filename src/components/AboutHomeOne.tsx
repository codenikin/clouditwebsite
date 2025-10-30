import Link from 'next/link'

const AboutHomeOne = () => {
  return (
    <>
      <section className="techin-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="techin-about-thumb position-r">
                <img src="/images/about-thumb1.png" alt="" />
                <div className="techin-about-thumb2">
                  <img src="/images/about-thumb2.png" alt="" />
                </div>
                <div className="techin-about-tag">
                  <img src="/images/tag1.svg" alt="" />
                </div>
                <div className="techin-about-frame">
                  <img src="/images/Frame.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="techin-about-content pl-60">
                <div className="techin-title-tag">
                  <span>
                    <img src="/images/shape1.svg" alt="" />
                  </span>
                  <h6>About Us</h6>
                  <span>
                    <img src="/images/shape1.svg" alt="" />
                  </span>
                </div>
                <h2>
                  Empowering Your Business With <span className="title">Cloud</span> IT Solutions
                </h2>
                <p>
                  At techin, we are dedicated to delivering innovative IT solutions and services
                  that empower businesses to thrive in the digital age. With a team of experienced
                  professionals, we provide customized technology strategies, robust support, and
                  cutting-edge solutions tailored to your unique needs. Our mission is to help you
                  achieve your goals by making technology work for you efficiently, securely, and
                  reliably.
                </p>
                <div className="techin-iconbox-wraper">
                  <div className="techin-iconbox-wrap">
                    <div className="techin-iconbox-icon">
                      <img src="/images/icon1.svg" alt="" />
                    </div>
                    <div className="techin-iconbox-data">
                      <h5>Providing Skillful Services</h5>
                    </div>
                  </div>
                  <div className="techin-iconbox-wrap">
                    <div className="techin-iconbox-icon">
                      <img src="/images/icon2.svg" alt="" />
                    </div>
                    <div className="techin-iconbox-data">
                      <h5>24/7 Support For Clients</h5>
                    </div>
                  </div>
                </div>
                <div className="techin-about-info-wraper">
                  <Link
                    className="techin-default-btn"
                    data-text="More Information"
                    href="/about-us"
                  >
                    <span className="button-wraper">More Information</span>
                  </Link>
                  <div className="techin-about-info-wrap">
                    <div className="techin-about-info-icon">
                      <a href="tel:009">
                        <img src="/images/phone.svg" alt="" />
                      </a>
                    </div>
                    <div className="techin-about-info-text">
                      <a href="tel:009">Call Us Any Time</a>
                      <a href="tel:009">
                        <span>+(009) 1888 000 2222</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHomeOne
