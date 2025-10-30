import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import AboutHomeOne from '@/components/AboutHomeOne'
import ServiceAbout from '@/components/ServiceAbout'
import HeroHomeTwo from '@/components/HeroHome1'
import TeamHomeOne from '@/components/TeamHomeOne'
import WorkProcessHomeOne from '@/components/howwework'

import CounterHomeOne from '@/components/CounterHomeOne'
import CtaHomeOne from '@/components/CtaHomeOne'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <>
      {/* <HeroHomeOne /> */}
      <HeroHomeTwo />
      <AboutHomeOne />
      <ServiceAbout />
      <CounterHomeOne />
      <CtaHomeOne />
      <TeamHomeOne />
      <WorkProcessHomeOne />
    </>
  )
}
