import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  
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
      {Navlinks.map((link) => {
        const isActive = (path:string) => path === pathname
        return(
          <Link href={link.path} key={link.title} className={isActive(link.path) ? "h-full flex items-center px-4 text-primary bg-navHover font-semibold" : "h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300 font-semibold"}>{link.title}</Link>
        )
        
      }
        
      )}
    </div>
  )
}

export default NavLinks
