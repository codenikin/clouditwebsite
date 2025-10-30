'use client'
import faq_data from '@/data/faq-data'
import { useState } from 'react'

const FaqHomeThree = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="techin-section-padding2 light-bg1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="techin-faq-wrap2">
              <div className="techin-title-tag">
                <span>
                  <img src="assets/images/v1/shape1.svg" alt="" />
                </span>
                <h6>Why Choose Us</h6>
                <span>
                  <img src="assets/images/v1/shape1.svg" alt="" />
                </span>
              </div>
              <h2>Why Choose Cloud IT Solution?</h2>
              <ul className="text-with-polish">
                <li className="polish-list-item">
                  <span className="list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
                        fill="#2BC8EB"
                      />
                    </svg>
                  </span>
                  Over a Decade of Experience
                </li>
                <li className="polish-list-item">
                  <span className="list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
                        fill="#2BC8EB"
                      />
                    </svg>
                  </span>
                  Skilled & Certified Team
                </li>
                <li className="polish-list-item">
                  <span className="list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
                        fill="#2BC8EB"
                      />
                    </svg>
                  </span>
                  Quality Products & Services
                </li>
                <li className="polish-list-item">
                  <span className="list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
                        fill="#2BC8EB"
                      />
                    </svg>
                  </span>
                  Client-Centered Solutions
                </li>{' '}
                <li className="polish-list-item">
                  <span className="list-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
                        fill="#2BC8EB"
                      />
                    </svg>
                  </span>
                  24/7 Support
                </li>
              </ul>
              <div className="techin-skill-wraper">
                <div className="techin-skill-icon">
                  <img src="/images/v3/icon2.svg" alt="" />
                </div>
                <div className="techin-skill-icon2">
                  <img src="/images/v3/icon3.svg" alt="" />
                </div>
                <div className="techin-skill-wrap">
                  <div className="techin-skill-item">
                    <div className="techin-skill-title">
                      <h6>IT Management</h6>
                    </div>
                    <div className="techin-skill-line">
                      <div className="techin-skill-bar bar-one"></div>
                    </div>
                  </div>
                  <div className="techin-skill-item">
                    <div className="techin-skill-title">
                      <h6>Data Security</h6>
                    </div>
                    <div className="techin-skill-line">
                      <div className="techin-skill-bar bar-two"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="techin-faq-wrap1">
              {faq_data.map((faq, index) => (
                <div
                  className={`techin-faq-item ${activeIndex === index ? 'open' : ''}`}
                  key={index}
                >
                  <div
                    className="techin-faq-header"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h6>{faq.question}</h6>
                    <div className="techin-active-icon">
                      <img
                        className="active-icon"
                        src="/images/v1/top-arrow.svg"
                        alt=""
                        style={{
                          transform: activeIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                          transition: 'transform 0.3s',
                        }}
                      />
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="techin-faq-body body2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqHomeThree
