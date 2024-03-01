import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <Link href='/' className="mx-5">
        <Image 
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
        />
      </Link>

      <p className="mx-5">2024 BookMyEvent. All Rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer