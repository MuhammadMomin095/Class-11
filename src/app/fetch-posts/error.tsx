'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error)
  }, [error])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            {error.message || 'Failed to load posts. Please try again later.'}
          </AlertDescription>
        </Alert>
        
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}