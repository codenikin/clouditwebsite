'use client'
import { menu } from '../data/menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const pathName = usePathname()
  const [mobileMenu, setMobileMenu] = useState(false)
  const [submenu, setSubmenu] = useState<number>()
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    setMobileMenu(false)
  }, [pathName])

  const handleSubmenu = (id: number) => {
    if (submenu == id) {
      setSubmenu(0)
    } else {
      setSubmenu(id)
    }
  }
  return (
    <>
      {/* <!-- Overlay --> */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`overlay ${mobileMenu && 'overlay--active'}`}
      ></div>
      {/* <!-- Header --> */}
      <header className="zirox-header">
        {/* <!-- Top Bar --> */}
        <div className="zirox-header__top-bar">
          <div className="container-fluid p-32">
            <div className="d-flex align-items-center justify-content-between py-3 py-lg-2">
              <Link href="/home-3" className="zirox-header__top-bar__logo">
                <Image width={128} height={28} src="/images/cloudlogo.jpg" alt="Logo" />
              </Link>
              <div className="zirox-header__top-bar__info d-none d-xl-flex py-3">
                <div className="zirox-header-info-box d-flex align-items-center gap-4 px-4 py-0 m-0">
                  <i className="flaticon-phone"></i>
                  <div className="zirox-header-info-box__details">
                    <span>Call anytime</span>
                    <h4>
                      <a href="tel:+926668880000">+917012749946</a>
                    </h4>
                  </div>
                </div>
                <div className="zirox-header-info-box d-flex align-items-center gap-4 px-4 py-0 m-0">
                  <i className="flaticon-open"></i>
                  <div className="zirox-header-info-box__details">
                    <span>Send email</span>
                    <h4>
                      <a href="mailto:hello@ultradevs.com">sales@clouditsolutions.com</a>
                    </h4>
                  </div>
                </div>
                <div className="zirox-header-info-box d-flex align-items-center gap-4 px-4 py-0 m-0">
                  <i className="flaticon-location"></i>
                  <div className="zirox-header-info-box__details">
                    <span>380 block</span>
                    <h4>Hosur,Bangalore</h4>
                  </div>
                </div>
              </div>
              <div className="zirox-header__top-bar__right">
                <ul className="zirox-header__top-bar__right__socials d-none d-md-flex">
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-logo-in-circular-shape"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
                <div onClick={() => setMobileMenu(!mobileMenu)} className="zirox-hamburger-menu">
                  <i className="flaticon-keypad"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Nav Bar --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="zirox-header__navbar d-flex mx-auto p-0 position-relative">
                <div className="container-fluid p-32">
                  <div className="w-100 d-flex align-items-center justify-content-between flex-column flex-lg-row d-none d-lg-flex">
                    <nav className="ud-main-menu ud-main-menu--home-1" aria-label="Main Navigation">
                      <ul>
                        {menu.map(({ id, title, submenus, url }) => (
                          <React.Fragment key={id}>
                            {submenus ? (
                              <li>
                                <a href="#">
                                  {title} <i className="flaticon-plus-2"></i>
                                </a>
                                <ul className="ud-main-menu__sub-menu">
                                  {submenus.map(({ id, title, url }) => (
                                    <li key={id}>
                                      <Link href={url}>{title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ) : (
                              url && (
                                <li>
                                  <Link href={url}>{title}</Link>
                                </li>
                              )
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                    </nav>

                    <div className="zirox-header__navbar__btns">
                      <OutsideClickHandler onOutsideClick={() => setSearchOpen(false)}>
                        <button
                          onClick={() => setSearchOpen(!searchOpen)}
                          className="zirox-header__navbar__btns-search"
                        >
                          <i className="flaticon-search-2"></i>
                        </button>
                        <div
                          className={`zirox-search-popup ${searchOpen && 'zirox-search-popup--open'}`}
                        >
                          <form action="/" method="GET">
                            <input type="text" name="search" id="search" placeholder="Search" />
                            <button type="submit">
                              <i className="flaticon-search-2"></i>
                            </button>
                          </form>
                        </div>
                      </OutsideClickHandler>
                      <Link href="/contact" className="zirox-button">
                        Get Solution
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar End --> */}

        {/* <!-- Side Popup --> */}
        <div className={`zirox-side-popup ${mobileMenu && 'zirox-side-popup--open'}`}>
          <div className="zirox-side-popup__header">
            <div className="zirox-side-popup__header-logo">
              <Image width={128} height={30} src="/images/cloudlogo.jpg" alt="Logo" />
            </div>
            <button onClick={() => setMobileMenu(false)} className="side-popup-close">
              <i className="flaticon-close-button"></i>
            </button>
          </div>
          <div className="zirox-side-popup__body">
            <ul className="metismenu" id="side-menu">
              {menu.map(({ id, title, submenus, url }) => (
                <React.Fragment key={id}>
                  {url ? (
                    <li>
                      <Link href={url}>{title}</Link>
                    </li>
                  ) : (
                    <li>
                      <a href="#" onClick={() => handleSubmenu(id)}>
                        {title} <i className="flaticon-plus-2"></i>
                      </a>
                      <AnimateHeight height={submenu == id ? 'auto' : 0}>
                        <ul className="sub-menu" aria-expanded="false">
                          {submenus?.length &&
                            submenus.map(({ id, title, url }) => (
                              <li key={id}>
                                <Link href={url}>{title}</Link>
                              </li>
                            ))}
                        </ul>
                      </AnimateHeight>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="zirox-side-popup__bottom">
            <div className="zirox-side-popup__bottom-info">
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-phone"></i>
                <div className="zirox-header-info-box__details">
                  <span>Call anytime</span>
                  <h4>
                    <a href="tel:+926668880000">92 666 888 0000</a>
                  </h4>
                </div>
              </div>
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-open"></i>
                <div className="zirox-header-info-box__details">
                  <span>Send email</span>
                  <h4>
                    <a href="mailto:hello@ultradevs.com">sales@clouditsolutions.com</a>
                  </h4>
                </div>
              </div>
              <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="flaticon-location"></i>
                <div className="zirox-header-info-box__details">
                  <span>380 St Hosur</span>
                  <h4>Bangalore,Karnataka</h4>
                </div>
              </div>
            </div>
            <ul className="zirox-side-popup__bottom-socials">
              <li>
                <a href="#">
                  <i className="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-facebook-logo-in-circular-shape"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
