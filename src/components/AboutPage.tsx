'use client'

import Link from 'next/link'
const PageAbout = () => {
  return (
    <section className="zirox-about zirox-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__wrapper">
              <div data-aos="fade-up" className="zirox-about__left ">
                <div data-aos="fade-up" data-aos-delay="300" className="zirox-about__left-exp">
                  <h3>30</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="zirox-about__left__bg__img overflow-hidden"></div>
                <div className="zirox-about__left__front__img overflow-hidden"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right ">
              <h6 data-aos="fade-up" data-aos-delay="300">
                Get To Know Us
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="400">
                From Vision to Reality
              </h2>
              <p data-aos="fade-up" data-aos-delay="500" className="zirox-about__right-text">
                Cloud IT Solution is a trusted provider of cloud-based IT services, business
                applications, and technology infrastructure solutions. Since our inception in 2012,
                we have been dedicated to helping businesses embrace digital transformation by
                delivering scalable, secure, and customized technology solutions. Over the past
                decade, we have evolved from a forward-thinking startup into a full-service IT
                partner for organizations across sectors such as education, healthcare, retail,
                manufacturing, and public services. Our focus has always remained on quality,
                innovation, and client success. Today, we're proud to serve over 500 businesses
                across the region, providing everything from cutting-edge cloud solutions to 24/7
                technical support. We're not just a vendor – we're your technology partner,
                committed to your success.
              </p>
              <div className="row align-items-center mb-3">
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-group"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                      To simplify and strengthen businesses through modern IT infrastructure, cloud
                      computing, and intelligent software solutions that optimize performance and
                      create long-term value.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-watch-tv"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>
                      To be a globally recognized leader in IT services and cloud solutions,
                      enabling organizations to innovate, transform, and excel in the digital age.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                data-aos="fade-up"
                data-aos-delay="800"
                href="/contact"
                className="zirox-button"
              >
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageAbout
