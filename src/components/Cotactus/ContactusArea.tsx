'use client'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  select: string
  phone?: string
}

export function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    select: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)
    console.log(formData)
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', select: '', phone: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setStatus('success')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="techin-section-padding6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2 d-flex align-items-center">
            <div className="techin-contact-us-thumb">
              <img src="/images/v1/img8.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="techin-default-content pr-50">
              <div className="techin-title-tag">
                <span>
                  <img src="assets/images/v1/shape1.svg" alt="" />
                </span>
                <h6>Contact Us</h6>
                <span>
                  <img src="assets/images/v1/shape1.svg" alt="" />
                </span>
              </div>
              <h2>Cloud IT Solutions.Bangalore</h2>
              <div className="techin-appointment-box box-3 light-bg1">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="techin-main-field field4">
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="First Name"
                        />
                        <img src="/images/v1/a1.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="techin-main-field field4">
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email Address"
                        />
                        <img src="/images/v1/a2.svg" alt="" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="techin-main-field field4">
                        <input
                          type="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number"
                        />
                        <img src="/images/v1/phone.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="techin-main-field field4">
                        <select
                          value={formData.select}
                          onChange={(e) => setFormData({ ...formData, select: e.target.value })}
                          className="techin-form-select"
                          name="select"
                        >
                          <option value="" disabled>
                            Select Service
                          </option>
                          <option value="web-development">Web Development</option>
                          <option value="app-development">App Development</option>
                          <option value="cloud-services">Cloud Services</option>
                          <option value="consulting">IT Consulting</option>
                        </select>
                        <img src="assets/images/v1/a1.svg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12"></div>
                  </div>
                  <div className="techin-main-field-textarea textarea2">
                    <textarea
                      className="button-text2"
                      name="textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message Here..."
                    ></textarea>
                  </div>
                  <div className="techin-appointment-submit-btn mt-30">
                    <button
                      className="techin-default-btn"
                      type="submit"
                      disabled={isSubmitting}
                      data-text="Send Message"
                    >
                      <span className="button-wraper">Send Message</span>
                    </button>
                  </div>
                </form>
                {/* {status === 'success' && (
                <p className="success-message">Message sent successfully!</p>
              )} */}
                {status && (
                  <div
                    className={`p-4 rounded-md ${
                      status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {status === 'success'
                      ? 'Thank you! Your message has been sent.'
                      : 'Sorry, there was an error sending your message. Please try again.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleContactForm
