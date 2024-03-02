import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
    const Navlinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Lessons",
            path: "/lessons"
        },
        {
            title: "About",
            path: "/about"
        },
    ]
  return (
    <div className="h-full flex items-center font-semibold">
      {Navlinks.map((link) => (
        <Link href={link.path} key={link.title} className='h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300'>{link.title}</Link>
      ))}
    </div>
  )
}

export default NavLinks
