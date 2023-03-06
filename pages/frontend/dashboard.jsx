import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/Utils/UserSlice';
import NavBar from '@/components/NavBar';

export default function Dashboard() {
    const { data: session } = useSession()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!session) {
            Router.push('/')
        }
        else {
            dispatch(setUserData(session.user))
        }
    }, [session])


    return (
        <div>
            <NavBar />
            welcome {session?.user?.name}
        </div>
    )
}
