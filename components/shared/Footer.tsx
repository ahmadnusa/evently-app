import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className=" wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128.28}
            height={38}
            priority
          />
        </Link>
        <p>{currentYear} Evently, All Rights Reserved.</p>
      </div>
    </footer>
  )
}
