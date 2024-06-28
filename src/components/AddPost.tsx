'use client'

import { useUser } from '@clerk/nextjs'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import AddPostButton from './AddPostButton'
import { addPost } from '@/lib/actions'

const AddPost = () => {
  const { user, isLoaded } = useUser()
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState<any>()

  if (!isLoaded) {
    return 'Loading...'
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatart */}
      <Image
        src={user?.imageUrl || '/noAvatar.png'}
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className="flex-1">
        {/* Text input */}
        <form action={(formData)=>addPost(formData,img?.secure_url || "")} className="flex gap-4">
          <textarea
            className="flex-1 bg-slate-100 rounded-t rounded-l-lg p-2"
            placeholder="What's on your mind?"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              width={20}
              height={20}
              src="/emoji.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>
        {/* Post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info)
              widget.close()
            }}
          >
            {({ open }) => {
              return (
                <div
                  onClick={() => open()}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Image width={20} height={20} src="/addimage.png" alt="" />
                  Photo
                </div>
              )
            }}
          </CldUploadWidget>

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
