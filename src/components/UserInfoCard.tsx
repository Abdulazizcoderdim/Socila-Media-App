import { User } from '@prisma/client'
import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Link2,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserInfoCard = ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt)
  
  const formatedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

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
          <span className="text-xl text-black">
            {user.name && user.surname
              ? user.name + ' ' + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {user.city && (
          <div className="flex items-center gap-2">
            <MapPin width={16} height={16} />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <GraduationCap width={16} height={16} />
            <span>
              Went to Edgar <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <BriefcaseBusiness width={16} height={16} />
            <span>
              Work at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Link2 width={16} height={16} />
              <Link
                href={user.website}
                className="text-blue-500 font-medium"
              >
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <CalendarDays width={16} height={16} />
            <span>Joined {formatedDate}</span>
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
