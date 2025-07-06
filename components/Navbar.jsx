import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-bold text-gray-900 dark:text-white">Digital Sociology</span>
      </div>
      <div className="space-x-4">
        <Link href="/"><span className="text-gray-800 dark:text-white hover:underline">Home</span></Link>
        <Link href="/about"><span className="text-gray-800 dark:text-white hover:underline">About</span></Link>
        <Link href="/research"><span className="text-gray-800 dark:text-white hover:underline">Research</span></Link>
        <Link href="/dashboards"><span className="text-gray-800 dark:text-white hover:underline">Dashboards</span></Link>
        <Link href="/contact"><span className="text-gray-800 dark:text-white hover:underline">Contact</span></Link>
      </div>
    </nav>
  )
}

export default Navbar
