import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const handleLogout = async () => {
       const loggedOut =  await logoutAccount();
           
    }
    return (
        <footer className="footer">
            <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                <p className="text-xl font-bold text-gray-700">
                    {user?.name[0]}
                </p>
            </div>
            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email,'}>
                <h1 className="text-14 truncate font-normal font-semibold text-gray-700">
                    {user?.name}
                </h1>
                <p className="text-14 font-normal truncate text-gray-600">
                    {user?.email}
                </p>
            </div>
            <div className="footer_image" onClick={handleLogout}>
                <Image src="icons/logout.svg" fill alt='logout' />
            </div>


        </footer>
    )
}

export default Footer