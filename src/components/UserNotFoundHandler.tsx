'use client'

import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const UserNotFoundHandler = ({ username }: { username: string }) => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <div className='h-[calc(100vh-96px)]'>
      <div className="container mx-auto p-4">
        <Alert variant="destructive">
          <AlertTitle>User Not Found</AlertTitle>
          <AlertDescription>
            We couldn&apos;t find a user with the username: {username}
          </AlertDescription>
        </Alert>
        <div className="mt-4 flex space-x-4">
          <Button className='bg-blue-500 hover:bg-blue-600' onClick={handleGoBack}>Go Back</Button>
          <Button variant="outline" onClick={handleGoHome}>
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserNotFoundHandler
