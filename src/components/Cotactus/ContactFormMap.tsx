'use client'
import { FormProvider, useForm } from 'react-hook-form'

import RichText from '@/components/RichText'
import { Form } from '@/payload-types'
import { useState } from 'react'

const ContactFormMap = ({ contact, title }: { contact: Form; title: string }) => {
  interface FormField {
    blockType: string
    [key: string]: unknown
  }

  const [error] = useState<{ status?: string | number; message?: string } | null>(null)
  const [confirmationType] = useState('message')
  ;('Thank you for your message!')
  const [isLoading] = useState(false)
  const formMethods = useForm()
  const onSubmit = () => {
    setHasSubmitted(true)
  }
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const submitButtonLabel = 'Send Message'
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = formMethods
  const formID = contact?.id ? String(contact.id) : undefined
  return (
    <section className="zirox-contact zirox-contact--single">
      <div className="zirox-contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3644.643953583783!2d89.25012277534395!3d24.00834687849534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe87da4863b7ad%3A0xf6f6a05d263bea24!2sultraDevs!5e0!3m2!1sen!2sbd!4v1694939218212!5m2!1sen!2sbd"
          height={450} // Corrected: Removed quotes to make it a number
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="row g-4">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="zirox-contact__left">
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-place"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Address</h3>
                  <address>16 vastu arcade, 5rd Floor palace road, London.</address>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-call"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Phone</h3>
                  <a href="tel:882562562584">88 256 256 2584</a>
                  <a href="tel:882562562584">88 256 256 2584</a>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-open-mail-1"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Email </h3>
                  <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a>
                  <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-8">
            <div className="zirox-contact__right">
              <div className="zirox-contact__right-form">
                {/* <FormProvider {...formMethods}>
                  {!isLoading &&
                    hasSubmitted &&
                    confirmationType === 'message' &&
                    (typeof confirmationMessage === 'object' ? (
                      <RichText data={confirmationMessage} className={'form-message'} />
                    ) : (
                      <div className={'form-message'}>{confirmationMessage}</div>
                    ))}
                  {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
                  {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
                  {!hasSubmitted && (
                    <form id={formID} onSubmit={handleSubmit(onSubmit)}>
                      {formFromProps &&
                        formFromProps.fields &&
                        formFromProps?.fields?.map((field, index) => {
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          const Field: React.FC<any> =
                            fields?.[field.blockType as keyof typeof fields]
                          if (Field) {
                            return (
                              <Field
                                form={formFromProps}
                                {...field}
                                {...formMethods}
                                control={control}
                                errors={errors}
                                register={register}
                                key={index}
                              />
                            )
                          }
                          return null
                        })}
                      <button form={formID} type="submit" className="zirox-button">
                        {submitButtonLabel}
                      </button>
                    </form>
                  )}
                </FormProvider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormMap
