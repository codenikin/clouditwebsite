// import { Link } from "react-router-dom";

import Link from 'next/link'
import LetterGlitch from './Letterglitch'

const SectionTop = ({ title }: { title: string }) => {
  return (
    <section className="section-top hh">
      <div className="section-top-glitch">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={['#01194b', '#2bc8eb', '#df0009']}
          characters={'c,l,o,u,d,i,t,s,u,l,a,t,i,o,n'}
        />
      </div>
      <div className="section-top-overlay">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-top-content">
                <h1 className="section-top-title">{title}</h1>
                <ul className="section-top-breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span>{title}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTop
