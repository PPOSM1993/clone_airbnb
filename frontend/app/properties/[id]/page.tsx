import React from 'react'
import Image from 'next/image'
import ReservationSideBar from '../../components/properties/ReservationSideBar'
const PropertyDetailPage = () => {
    return (
        <>
            <main className='mx-w-[1500px] mx-auto px-6'>
                <div className='w-full h-[64vh] overflow-hidden rounded-xl relative'>

                    <Image
                        fill
                        src="/assets/beach_1.jpg"
                        className="object-cover w-full h-full"
                        alt="Beach house"
                    />
                </div>

                <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
                    <div className="py-6 pr-6 col-span-3">
                        <h1 className="mb-4 text-4xl">Example Title</h1>

                        <span className="mb-6 block text-lg text-gray-600">
                            4 guests - 4 bedrooms - 4 bathrooms
                        </span>
                        <hr />
                        <div className="py-6 flex items-center space-x-4">
                            <Image
                                src="/assets/profile_pic_1.jpg"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                            <p><strong>Loco Pepe</strong> is your host</p>
                        </div>
                        <hr />

                        <p className="mt-6 text-lg">
                            zgxregdrgzsrgszvrtgszdrghtfhdfytjfgyjdfdshnghrghdfthxcrgdfthvfdxthdthcfthxfc
                            zxrhxzfrhtfhxcftghj
                            xcrhxfrth
                            xdfrhxcthxfthxfthjxcfth
                            xdhxfthxdfrthdxrhzdrxfcd
                            zxhsfthdf
                        </p>
                    </div>

                    <ReservationSideBar />
                </div>
                <br />
            </main>
        </>
    )
}

export default PropertyDetailPage
