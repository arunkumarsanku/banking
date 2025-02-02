'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
    phoneNumber: z.string().min(6).max(15),
    dob: z.string().min(6).max(15),
    address: z.string().min(6).max(100),
    city: z.string().min(6).max(100),
    state: z.string().min(6).max(100),
    country: z.string().min(6).max(100),
    postalCode: z.string().min(6).max(100),
    accountNumber: z.string().min(6).max(100),
    accountType: z.string().min(6).max(100),
    accountBalance: z.string().min(6).max(100),
    accountCurrency: z.string().min(6).max(100),
    accountStatus: z.string().min(6).max(100)
})

const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null)
    return (
        <section className="auth-form ">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="cursor-pointer flex items-center gap-1 ">
                    <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1 ">Horizon</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">{
                        user ? 'Link  Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                    }
                        <p className="text-16 font-normal text-gray-600">{
                            user ? 'Link your account to get started' : 'Enter your details to get started'
                        }</p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/** Plaid Link */}
                </div>
            ) : (<>
                FORM
            </>)}


        </section>
    )
}

export default AuthForm