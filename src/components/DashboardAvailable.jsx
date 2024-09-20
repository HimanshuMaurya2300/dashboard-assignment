import React from 'react'

const DashboardAvailable = (props) => {

    const item = props.item

    return (
        <div
            key={item.id}
            className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-4 p-3 rounded-[10px]`}
        >
            <p className='ml-2 text-[18px] font-medium text-blue_gray-900_01'>
                {item.heading}
            </p>
            <p className='w-[96%] self-end text-[36px] font-medium leading-7 text-blue_gray-900_01 text-4xl'>
                {item.position}
            </p>
            <p className={`${item.requireClass} ml-2 font-roboto text-[16px] font-normal text-red-a200`}>
                {item.require}
            </p>
        </div>
    )
}

export default DashboardAvailable