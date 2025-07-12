'use client'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React, { ReactNode } from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Editor } from './Editor'

const CollabRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            <div className='flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden'>
                <Header>
                    <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl text-white mr-10'>
                        Share
                    </p>
                    </div>

                    <SignedOut>
                        <SignInButton />
                        <SignUpButton>
                            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                            </button>
                        </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                        <UserButton />
                        </SignedIn>
                </Header>
                <Editor/>
            </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollabRoom
