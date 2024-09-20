import { Suspense } from "react"
import SelectBox from "./SelectBox"
import DashboardOutingSchedule from "./DashboardOutingSchedule"

const dropDownOptions = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' }
]

const announcement = [
    {
        id: 1,
        text: 'Outing Schedule for every department',
        time: '5 Minutes ago'
    },
    {
        id: 2,
        text: 'Meeting HR Department',
        time: 'Yesterday, 12:30 PM'
    },
    {
        id: 3,
        text: 'IT Department need two more talents for UX/UI Designer Position',
        time: 'Yesterday, 9:15 AM'
    }
]

const OutingScheduleSection = () => {
    return (
        <>
            <div className="mt-5 self-stretch">
                <div className="rounded-[12px] border border-solid border-gray-300 bg-white-a700">
                    <div className="mt-4 sm:mt-1">
                        <div className="mx-5 flex flex-col gap-4 md:mx-0 p-4">
                            <div className="flex items-center justify-between gap-5">
                                <p className="text-[18px] font-medium text-blue_gray-900_01">
                                    Announcement
                                </p>

                                <SelectBox
                                    indicator={
                                        <img
                                            src="images/downArrow.svg"
                                            alt='downArrow'
                                            className="h-[20px] w-[18px]"
                                        />
                                    }
                                    name="Duration Dropdown"
                                    placeholder={`Today, 13 Sep 2021`}
                                    options={dropDownOptions}
                                    className="flex w-[30%] gap-2 rounded border border-solid border-geay-200 bg-white-a700 px-1.5 py-0.5 font-roboto text-[12px] text-gray-700 sm:w-[40%]"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Suspense fallback={<div> Loading feed...</div>}>
                                    {announcement.map((item) => (
                                        <DashboardOutingSchedule
                                            key={item.id}
                                            item={item}
                                            className="bg-deep_orange-50"
                                        />
                                    ))}
                                </Suspense>
                            </div>
                        </div>

                        <div className="relative mt-[-8px] flex justify-center rounded-bl-[10px] rounded-br-[10px] border border-solid border-gray-300 bg-white-a700 p-1.5">
                            <p className="text-[14px] font-medium text-red-a200">
                                See All Anouncement
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutingScheduleSection