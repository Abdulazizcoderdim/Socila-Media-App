import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { ObjectId } from 'mongodb'

const id = new ObjectId().toString()

const AddPost = () => {
  const { userId } = auth()
  
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatart */}
      <Image
        width={48}
        height={48}
        src="https://images.pexels.com/photos/20485643/pexels-photo-20485643.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className="flex-1">
        {/* Text input */}
        <form action="" className="flex gap-4">
          <textarea
            className="flex-1 bg-slate-100 rounded-t rounded-l-lg p-2"
            placeholder="What's on your mind?"
            name="desc"
          ></textarea>
          <Image
            width={20}
            height={20}
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src="/addimage.png" alt="" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src="/addVideo.png" alt="" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src="/poll.png" alt="" />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image width={20} height={20} src="/addevent.png" alt="" />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
//2:32:00