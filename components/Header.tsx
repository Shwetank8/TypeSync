import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1 flex flex-row items-center justify-start ">
      <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={40}
          height={40}
          className=" md:block"
        />
        <Image 
          src="/assets/icons/logo-type.png"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        
      </Link>
      {children}
    </div>
  )
}

export default Header