import React from 'react'
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';

const Search = () => {
    return (
        <div className='w-full min-w-[300px] lg:min-w-[420px] h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-200'>
            <button className='flex justify-center items-center h-full p-3'>
                <IoSearch size={22} />
            </button>
            <div>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Search "Milk"',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Search "bread"',
                        1000,
                        'Search "Sugar"',
                        1000,
                        'Search "Soap"',
                        1000,
                        'Search "chocolate"',
                        1000,
                        'Search "eggs"',
                        1000,
                        'Search "Chips"',
                        1000,
                        'Search "rice"',
                        1000,
                        'Search "yoghurt"',
                        1000,
                        'Search "flour"',
                        1000,
                        'Search "butter"',
                        1000,
                        'Search "cheese"',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

export default Search