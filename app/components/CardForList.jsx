import Image from 'next/image'
import React from 'react'

const CardForList = ({image_path , title , description }) => {
    return (
        <div className='flex justify-start items-center gap-4'>
            <Image
                src={`${image_path}`}
                alt='card-image'
                width={200}
                height={200}
                className='rounded-sm h-[60px] w-[100px]'
            />
            <div>
                <h1 className='capitalize text-[14px] font-semibold'>{title}</h1>
                <h3 className='capitalize text-[12px]'>{description}</h3>
            </div>

        </div>
    )
}

export default CardForList
