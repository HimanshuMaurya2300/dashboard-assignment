import React from 'react'

const upcomingSchedule = [
    {
        id: 1,
        text: ' Interview with candidates',
        time: 'Today - 10:30 AM'
    },
    {
        id: 2,
        text: 'Short meeting with product designer from IT department',
        time: 'Today - 09:15 AM'
    },
    {
        id: 3,
        text: 'HR department need UX/UI for Designer Position',
        time: 'Today - 02:30 PM'
    }
]


const DashboardDesktopRowthisistitle = () => {
    return (
        <>
            {upcomingSchedule.map((item) => (
                <div
                    key={item.id}
                    className={`flex justify-center items-center gap-7 p-2.5 border-gray-300 border-[0.5px] border-solid bg-gray-50 flex-1 rounded-md`}
                >
                    <div className='flex flex-1 flex-col items-start gap-1.5'>
                        <p className='text-[16px] font-normal text-blue_gray-900_02 sm:text-[14px]'>
                            {item.text}
                        </p>
                        <p className='font-roboto text-[10px] font-normal text-gray-700'>
                            {item.time}
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <img
                            src='/images/notificationIcon2.svg'
                            alt='notificationIcon'
                            className='h-[24px] w-[24px] cursor-pointer'
                        />
                        <img
                            src='/images/horizontalMenu.svg'
                            alt='horizontalMenu'
                            className='h-[24px] w-[24px] cursor-pointer'
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardDesktopRowthisistitle