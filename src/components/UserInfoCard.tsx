import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Link2,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">@jonathan</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          adipisci autem facere. Rem eligendi vero quod?
        </p>
        <div className="flex items-center gap-2">
          <MapPin width={16} height={16} />
          {/* <Image src="/map.png" alt='' width={16} height={16}/> */}
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap width={16} height={16} />
          {/* <Image src="/school.png" alt="" width={16} height={16} /> */}
          <span>
            Went to Edgar <b>High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness width={16} height={16} />
          {/* <Image src="/work.png" alt="" width={16} height={16} /> */}
          <span>
            Work at <b>Apple Int.</b>
          </span>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-1 items-center">
            <Link2 width={16} height={16} />
            <Link
              href="https://newabdulaziz19.vercel.app"
              className="text-blue-500 font-medium"
            >
              @newabdulaziz19
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <CalendarDays width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block Users
        </span>
      </div>
    </div>
  )
}

export default UserInfoCard
