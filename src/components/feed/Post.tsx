import Image from 'next/image'
import Comments from './Comments'

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19915666/pexels-photo-19915666.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            fill
            className="object-cover rounded-md"
            src="https://images.pexels.com/photos/26052406/pexels-photo-26052406.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quia,
          hic minus quis porro at aut magni veniam iste laudantium incidunt. Ea
          sint animi possimus voluptatem, illum accusamus architecto
          consectetur?
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
              123 <span className="hidden md:inline"> Shares</span>
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
