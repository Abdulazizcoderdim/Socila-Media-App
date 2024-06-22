import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          NORASOCIAL
        </Link>
      </div>
      {/* cenet */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="Home" width={16} className='w-4 h-4' height={16} />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="Friends" width={16} className='w-4 h-4' height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Stories" width={16} className='w-4 h-4' height={16} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">

        <MobileMenu />
      </div>
    </div>
  )
}
//33:00

export default Navbar
