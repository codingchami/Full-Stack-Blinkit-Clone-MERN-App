import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search'

const Header = () => {
    return (
        <header className='h-20 shadow-md sticky top-0'>
            <div className='container mx-auto flex items-center h-full PX-2 justify-between'>
                {/**logo */}
                <div className='h-full'>
                    <div className='h-full flex justify-center items-center'>
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
                    </div>
                </div>

                {/**Search */}
                <div>
                    <Search />
                </div>

                {/**login and my cart */}
                <div>
                    Login and my cart
                </div>
            </div>
        </header>

    )
}

export default Header