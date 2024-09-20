import { useEffect, useState } from "react"
import SelectBox from "./SelectBox"

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' }
]

const Navbar = () => {

    const [search, setSearch] = useState("")
    const [isDispalyUsername, setIsDispalyUsername] = useState(true)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsDispalyUsername(false)
        }
    }, [])

    return (
        <div className={`$item-center flex items-end`}>
            <div className="mt-[22px] flex w-full flex-col items-center gap-[22px]">
                <div className="mx-auto flex w-full max-w-[1090px] items-center justify-between gap-5 self-stretch sm:gap-2">

                    <div className="text-[16px] h-[44px] w-[30%] flex items-center justify-center gap-4 text-gray-400 md:border-none sm:px-0 sm:gap-0 sm:justify-start">
                        <div className="flex gap-4 items-center">
                            <div className="flex-start">
                                <img
                                    src="/images/hamburgerIcon.svg"
                                    alt="hamburgerIcon"
                                    className="h-[24px] w-[24px] cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center rounded border border-solid border-gray-300 bg-gray-50 px-1.5 py-0.5">
                                <input
                                    name="Search Field"
                                    placeholder="Search"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full bg-transparent border-none focus:border-none focus:ring-0 sm:hidden"
                                />
                                <img
                                    src="/images/search.svg"
                                    alt="search"
                                    className="h-[24px] w-[24px] cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[28%] flex items-center justify-between gap-5 sm:w-[40%]">
                        <a href="#">
                            <img
                                src="/images/notificationIcon.svg"
                                alt="notification"
                                className="h-[24px] w-[24px] cursor-pointer"
                            />
                        </a>

                        <a href="#">
                            <img src="/images/messageIcon.svg" alt="message"
                                className="h-[24px] w-[24px] cursor-pointer"
                            />
                        </a>

                        <div className="w-[64%] flex item-center justify-center gap-3 sm:gap-2 sm:justify-normal sm:w-[40%]">
                            <a href="#">
                                <img
                                    src="/user.png"
                                    alt="user"
                                    className="h-[42px] w-[42px] cursor-pointer rounded-[20px] object-cover sm:h-[36px] sm:w-[36px]"
                                />
                            </a>
                            {
                                isDispalyUsername && (
                                    <SelectBox
                                        indicator={
                                            <img
                                                src="images/downArrow.svg"
                                                alt="downArrow"
                                                className="h-[20px] w-[24px]" />
                                        }
                                        name="User Dropdown"
                                        placeholder={'Admirra John'}
                                        options={dropDownOptions}
                                        className='text-[16px] flex flex-grow gap-2 font-medium text-blue_gray-900_01'
                                    />
                                )
                            }
                            <img
                                src="/images/downArrow.svg"
                                alt="downArrow"
                                className="h-[20px] w-[24px] hidden sm:block items-center relative top-3"
                            />
                        </div>
                    </div>
                </div>
                <div className="rotate-[-90deg] h-[px] w-full self-stretch bg-blue_gray-50" />
            </div>
        </div>
    )
}

export default Navbar