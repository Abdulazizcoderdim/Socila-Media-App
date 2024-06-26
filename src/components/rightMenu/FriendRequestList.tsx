'use client'

import Image from 'next/image'
import { FollowRequest, User } from '@prisma/client'
import { useOptimistic, useState } from 'react'
import { acceptFollowRequest, declineFollowRequest } from '@/lib/actions'

type RequestsWithUser = FollowRequest & {
  sender: User
}

const FriendRequestList = ({ requests }: { requests: RequestsWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests)

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId)
    try {
      await acceptFollowRequest(userId)
      setRequestState((prev) =>
        prev.filter((req) => Number(req.id) !== requestId)
      )
    } catch (error) {
      console.log('accept folow', error)
    }
  }
  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId)
    try {
      await declineFollowRequest(userId)
      setRequestState((prev) =>
        prev.filter((req) => Number(req.id) !== requestId)
      )
    } catch (error) {
      console.log('accept folow', error)
    }
  }

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => Number(req.id) !== value)
  )
  return (
    <div className="flex flex-col gap-3">
      {optimisticRequests.map((request) => (
        <div key={request.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || '/noAvatar.png'}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + ' ' + request.sender.surname
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(Number(request.id), request.sender.id)}>
              <button title="accept">
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => decline(Number(request.id), request.sender.id)}>
              <button title="decline">
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FriendRequestList
