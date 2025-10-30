import SectionTop from '@/components/SectionTop'
import ContactusArea from '@/components/Cotactus/ContactusArea'
import GoogleMap from '@/components/GoogleMpa'
export default async function Contact() {
  return (
    <>
      <SectionTop title="Contact Us" />
      <ContactusArea />
      <GoogleMap />
    </>
  )
}
