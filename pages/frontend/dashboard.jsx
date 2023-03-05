import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function dashboard() {
    const router = useRouter();
    const { data: session } = useSession()
    
    if(!session){
        router.push('/');
    }


  return (
    <div>dashboard</div>
  )
}
