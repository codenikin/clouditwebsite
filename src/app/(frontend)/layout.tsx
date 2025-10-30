import React from 'react'

import './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './flaticon/flaticon_zirox.css'

import InitAOS from '@/utils/InitAOS'
import Header from '@/global/Header'
import FooterHome from '@/global/Footer'
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <InitAOS />
      <body>
        <Header />
        <main>{children}</main>
        <FooterHome />
      </body>
    </html>
  )
}
