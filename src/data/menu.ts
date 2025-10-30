export type MenuType = {
  id: number
  title: string
  url?: string
  submenus?: {
    id: number
    title: string
    url: string
  }[]
}[]
export const menu: MenuType = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about-us',
  },
  {
    id: 3,
    title: 'Services',
    url: '/Our-services',
  },
  // {
  //   id: 4,
  //   title: 'Portfolio',
  //   submenus: [
  //     { id: 4.1, title: 'Portfolio', url: '/portfolio' },
  //     { id: 4.2, title: 'Portfolio Details', url: '/portfolio-details' },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: 'Blog',
  //   submenus: [
  //     { id: 5.1, title: 'Blog', url: '/blog' },
  //     { id: 5.2, title: 'Blog Standard', url: '/blog-standard' },
  //     { id: 5.3, title: 'Blog Details', url: '/blog/1' },
  //   ],
  // },
  {
    id: 6,
    title: 'Contact',
    url: '/contact-us',
    // submenus: [],
  },
]
