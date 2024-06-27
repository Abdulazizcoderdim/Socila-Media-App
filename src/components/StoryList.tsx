'use client'

import { User, Story } from '@prisma/client'
import Image from 'next/image'

type StoryWithUser = Story & {
  user: User
}

const StoryList = async ({
  stories,
  userId,
}: {
  stories: StoryWithUser[]
  userId: string
}) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/15045083/pexels-photo-15045083.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={80}
          height={80}
          className="w-20 h-20 rounded-full ring-2"
        />
        <span className="font-medium">Ricky</span>
      </div>
    </div>
  )
}

export default StoryList

//5:23:00