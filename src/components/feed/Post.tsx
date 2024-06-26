import Image from 'next/image'
import Comments from './Comments'
import { Post as PostType, User } from '@prisma/client'

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }]
} & {
  _count: { comments: number }
}

const Post = ({ post }: { post: FeedPostType }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || 'noAvatar.png'}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + ' ' + post.user.surname
              : post.user.username}
          </span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {post.img && <div className="w-full min-h-96 relative">
          <Image
            src={post.img}
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>}
        <p>
          {post.desc}
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              className="cursor-pointer"
              src="/like.png"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              className="cursor-pointer"
              src="/comment.png"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              className="cursor-pointer"
              src="/share.png"
              width={16}
              height={16}
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      {/* COMMENT */}
      <Comments />
    </div>
  )
}

export default Post
