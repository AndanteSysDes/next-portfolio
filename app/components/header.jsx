import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/logo.png"

export default function Header () {
  return(
    <header>
      <div className="container">
        <div>
          <Link href="/">
            <Image src={LogoImg} alt="logo" /> 
          </Link>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}