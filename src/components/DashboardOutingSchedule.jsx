import React from 'react'



const DashboardOutingSchedule = (props) => {

    const item = props.item

    return (
        <div
            {...props}
            className={`${props.className} flex justify-between items-center gap-5 p-3 border-gray-300 border-[0.5px] border-solid bg-gray-50 flex-1 rounded-md`}
        >
            <div className='flex flex-1 flex-col items-start gap-1.5 sm:gap-1.5'>
                <p className='text-[16px] font-normal text-blue_gray-900_02 sm:text-[12px]'>
                    {item.text}
                </p>
                <p className='font-roboto text-[10px] font-normal text-gray-700'>
                    {item.time}
                </p>
            </div>
            <div className='flex gap-5'>
                <img
                    src='images/pinIcon.svg'
                    alt='pin'
                    className='h-[24px] w-[24px] cursor-pointer'
                />
                <img
                    src='images/horizontalMenu.svg'
                    alt='horizontalMenu'
                    className='h-[24px] w-[24px] cursor-pointer'
                />
            </div>
        </div>
    )
}

export default DashboardOutingSchedule