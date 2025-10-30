import SectionTop from '@/components/SectionTop'
import PopularServices from '@/components/Services'
import FaqHomeThree from '@/components/Faqcomponents'
import PageAbout from '@/components/AboutPage'

export default async function AboutPage() {
  return (
    <>
      <SectionTop title="About Us" />
      <PageAbout />
      <PopularServices />
      <FaqHomeThree />
    </>
  )
}
