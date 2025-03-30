import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className='h-28 lg:h-20 lg:shadow-md sticky top-0 bg-red-500 flex items-center flex-col justify-center gap-1'>
            <div className='container mx-auto flex items-center PX-2 justify-between'>
                {/**logo */}
                <div className='h-full'>
                    <Link to={"/"} className='h-full flex justify-center items-center'>
                        <img src={logo}
                            width={170}
                            height={60}
                            alt="logo"
                            className='hidden lg:block'
                        />
                        <img src={logo}
                            width={120}
                            height={60}
                            alt="logo"
                            className='lg:hidden'

                        />
                    </Link>
                </div>

                {/**Search */}
                <div className='hidden lg:block'>
                    <Search />
                </div>

                {/**login and my cart */}
                <div className=''>
                    <button className='text-neutral-600'>
                        <FaRegUserCircle size={26}/>
                    </button>
                    <div className='hidden lg:block'>
                        Login and my cart
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2'>
                <Search />
            </div>
        </header>

    )
}

export default Header