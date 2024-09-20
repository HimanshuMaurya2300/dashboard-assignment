import React from 'react'

const DashboardDesktopTalentRequest = () => {
    return (
        <div
            className={`flex items-center w-[50%] md:w-full gap-1.5 p-5 border-gray-300 border border-solid bg-white-a700 rounded-[10px]`}
        >
            <div className='flex flex-1 flex-col gap-1.5'>
                <div className='flex flex-col items-start'>
                    <p className='text-[18px] font-medium text-blue_gray-900_01'>
                        Total Employees
                    </p>
                    <p className='text-[48px] font-medium text-blue_gray-900_01'>
                        216
                    </p>
                </div>

                <div className='flex flex-col items-start gap-1'>
                    <p className='font-roboto text-[12px] font-normal text-gray-700'>
                        120 Men
                    </p>
                    <p className='font-roboto text-[12px] font-normal text-gray-700'>
                        96 Women
                    </p>
                </div>
            </div>

            <div className='flex w-[44%] flex-col gap-5'>
                <div>
                    <div className='flex flex-col items-start'>
                        <p className='relative z-[1] ml-[42px] font-rubik text-[10px] font-medium text-red-a200'>
                            +2%
                        </p>
                        <div className='relative mt-[-2px] h-[68px] content-center self-stretch'>
                            <img
                                src='images/curve.svg'
                                alt='Employee Vector Image'
                                className='absolute left-0 right-0 top-[0.15px] m-auto h-[40px] w-full flex-1'
                            />
                            {/* <img
                            src='images/upperArrowIcon.svg'
                            alt='Growth Vector Image'
                            className='mx-auto h-[68px] w-full flex-1 object-cover'
                        /> */}
                            <img
                                src='images/curveBackground.svg'
                                alt='Frame Image'
                                className='absolute left-[40%] top-px m-auto h-[16px] w-[16px]'
                            />
                        </div>
                    </div>
                </div>
                <button className='ml-2 flex h-[24px] flex-row items-center justify-center self-stretch rounded bg-deep_orange-50 px-1.5 text-center font-roboto text-[12px] text-blue_gray-900_02'>
                    +2% Past month
                </button>
            </div>
        </div>
    )
}

export default DashboardDesktopTalentRequest