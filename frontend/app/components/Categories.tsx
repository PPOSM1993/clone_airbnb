import React from 'react'
import Image from 'next/image'


const Categories = () => {
    return (
        <>
            <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
                <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hevoer:border-gray-200 hover:opacity-100'>
                    <Image
                        src="/assets/icons/icn_category_beach.jpeg"
                        alt="Airbnb Logo"
                        width={20}
                        height={20}
                    />
                    <p className='text-xs font-semibold'>Beach</p>
                </div>


                <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hevoer:border-gray-200 hover:opacity-100'>
                    <Image
                        src="/assets/icons/icn_category_beach.jpeg"
                        alt="Airbnb Logo"
                        width={20}
                        height={20}
                    />
                    <p className='text-xs font-semibold'>Villas</p>
                </div>


                <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hevoer:border-gray-200 hover:opacity-100'>
                    <Image
                        src="/assets/icons/icn_category_beach.jpeg"
                        alt="Airbnb Logo"
                        width={20}
                        height={20}
                    />
                    <p className='text-xs font-semibold'>Cabins</p>
                </div>

                <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hevoer:border-gray-200 hover:opacity-100'>
                    <Image
                        src="/assets/icons/icn_category_beach.jpeg"
                        alt="Airbnb Logo"
                        width={20}
                        height={20}
                    />
                    <p className='text-xs font-semibold'>Try Homes</p>
                </div>

            </div>
        </>
    )
}

export default Categories
