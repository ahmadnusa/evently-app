'use client'

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, auth, useUser } from '@clerk/nextjs'
import { Button } from '../ui/button'
import Link from 'next/link'
import Checkout from './Checkout'

export default function CheckoutButton({ event }: { event: IEvent }) {
  const { user } = useUser()
  const userId = user?.publicMetadata.userId as string

  const hasEventFinished = new Date(event.endDateTime) < new Date()
  return (
    <div className="flex items-center gap-3">
      {/* cannot buy past event */}
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Event has ended</p>
      ) : (
        <>
          <SignedOut>
            <Button asChild size="lg" className="button rounded-full">
              <Link href="">Get Tickets</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  )
}
