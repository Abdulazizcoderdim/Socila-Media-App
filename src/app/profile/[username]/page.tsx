import ProfileUnavailable from '@/components/ProfileUnavailable'
import UserNotFoundHandler from '@/components/UserNotFoundHandler'
import Feed from '@/components/feed/Feed'
import LeftMenu from '@/components/leftMenu/LeftMenu'
import RightMenu from '@/components/rightMenu/RightMenu'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  })

  if (!user) {
    console.error(`User not found for username: ${username}`);
    return <UserNotFoundHandler username={username} />;
  }

  const { userId: currentUserId } = auth()

  // Check if user is blocked
  let isBlocked = false

  if (currentUserId && currentUserId !== user.id) {
    const blockRecord = await prisma.block.findFirst({
      where: {
        OR: [{ blockerId: user.id, blockedId: currentUserId }],
      },
    })

    isBlocked = !!blockRecord
  }

  console.log(`Is user blocked: ${isBlocked}`)
  // end

  if (isBlocked) {
    console.log('User is blocked...')
    return <ProfileUnavailable />
  }

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || '/noCover.png'}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user.avatar || '/noAvatar.png'}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + ' ' + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed username={user.username} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  )
}

export default ProfilePage
