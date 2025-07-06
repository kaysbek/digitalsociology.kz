import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
        <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
          Digital Sociology
        </span>
      </div>
    </nav>
  )
}

export default Navbar