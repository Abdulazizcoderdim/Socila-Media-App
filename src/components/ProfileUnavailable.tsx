import Image from 'next/image'
import Link from 'next/link'

const ProfileUnavailable = () => {
  return (
    <div className="h-[calc(100vh-96px)] flex justify-center">
      <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-50 rounded-lg shadow-md p-8 max-w-md mx-auto mt-10">
        <Image alt='' src="/Lock.png" className="w-16 h-16 text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Profile Unavailable
        </h1>
        <p className="text-gray-600 text-center mb-6">
          You cannot view this profile at the moment.
        </p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default ProfileUnavailable
