import Link from 'next/link'
import styles from './styles/styles.module.css'
const CtaHomeOne = () => {
  return (
    <>
      <div className={`${styles['bg-background']} techin-cta-section cta-v1 `}>
        <div className="container">
          <div className="techin-cta-wrap">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="techin-cta-content">
                  <div className="techin-cta-content-top">
                    <img src="/images/shape/cta-shape1.svg" alt="" />
                    <h6>
                      Get personalized solutions tailored to your business needs. Contact us for a
                      free consultation and quote.
                    </h6>
                    <img src="assets/images/shape/cta-shape1.svg" alt="" />
                  </div>
                  <div className="techin-cta-content-bottom">
                    <h2>Ready to Transform Your IT Infrastructure?</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="techin-title-btn">
                  <Link
                    className="techin-default-btn pill techin-cta-btn"
                    href="/contact-us"
                    data-text="Get A Quote"
                  >
                    <span className="button-wraper">Get A Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CtaHomeOne
