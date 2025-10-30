import Image from 'next/image'
import Link from 'next/link'

const PopularServices = () => {
  return (
    <section className="zirox-services zirox-services--popular-services zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center zirox-text-overlay">
          These core values guide everything we do and every decision we make.
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-center">
          Our Values
        </h2>
        <div className="row position-relative z-3">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3">
            <Link href="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-target"></i>
                <h3>Innovation</h3>
                <p>We stay ahead of technology trends to provide cutting-edge solutions.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-md-6 col-lg-3">
            <Link href="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-recovery"></i>
                <h3>Reliability</h3>
                <p>Dependable service and support you can count on 24/7.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-12 col-md-6 col-lg-3">
            <Link href="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-report"></i>
                <h3>Transparency </h3>
                <p>Honest pricing, clear communication, no hidden surprises.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-3">
            <Link href="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-statistics"></i>
                <h3>Growth</h3>
                <p>We grow with your business, scaling solutions as you expand.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularServices
