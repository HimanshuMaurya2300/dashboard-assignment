import { Suspense } from "react"
import SideBar from "./components/SideBar"
import Navbar from "./components/Navbar"
import SelectBox from "./components/SelectBox"
import OutingScheduleSection from "./components/OutingScheduleSection"
import './index.css'
import DashboardAvailable from "./components/DashboardAvailable"
import DashboardTalentRequest from "./components/DashboardTalentRequest"
import DashboardRowthisistitle from "./components/DashboardRowthisistitle"

const dropDownOptions = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' }
]

const dashboard = [
  {
    id: 1,
    heading: 'Available Position',
    position: '24',
    require: '4 Urgently needed',
    class: 'bg-[#FFEFE7]',
    requireClass: 'text-[#FF5151]'
  },
  {
    id: 2,
    heading: 'Job Open',
    position: '10',
    require: '4 Active hiring',
    class: 'bg-[#E8F0FB]',
    requireClass: 'text-[#3786F1]'
  },
  {
    id: 3,
    heading: 'New Employees',
    position: '24',
    require: '4 Department',
    class: 'bg-[#FDEBF9]',
    requireClass: 'text-[#EE61CF]'
  }
]

const App = () => {
  return (
    <>
      <div className="flex w-full bg-gray-50">
        <SideBar />
        <div className="flex flex-1 justify-center border-1 border-solid border-blue_gray-50 bg-white-a700">
          <div className="gap-[22px] mb-[34px] w-[96%] flex flex-col md:w-full md:px-5">
            <Navbar />
            <div className="gap-[30px] flex items-center md:mr-0 md:flex-col max-w-[1090px] mx-auto md:mx-0">
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <p className="md:text-[22px] text-[24px] font-medium text-blue_gray-900_01">
                  Dashboard
                </p>
                <div className="mt-3 flex gap-3.5 self-stretch md:flex-col">
                  <Suspense fallback={<div> Loading feed...</div>}>
                    {dashboard.map((item, index) => (
                      <DashboardAvailable
                        key={index}
                        item={item}
                        className={`${item.class}`}
                      />
                    ))}
                  </Suspense>
                </div>
                <div className="mt-3 flex gap-4 self-stretch md:flex-col">
                  <DashboardTalentRequest />
                  <DashboardTalentRequest />
                </div>

                <OutingScheduleSection />
              </div>

              <div className="w-[40%] flex flex-col gap-5 self-end md:w-full md:self-auto">
                <div className="rounded-[10px] gap-[26px] flex flex-col bg-blue_gray-900_01 sm:p-4">
                  <div className="rounded-tr-[10px] rounded-tl-[10px] flex bg-blue_gray-900 px-6 py-2.5 sm:px-0">
                    <p className="text-[18px] font-medium text-white-a700">
                      Recent Activity
                    </p>
                  </div>
                  <div className="mr-[34px] mb-[26px] ml-6 flex flex-col gap-7 md:mx-0">
                    <div className="flex flex-col items-start gap-1.5">
                      <p className="text-[10px] font-roboto2 font-medium text-white-a700_99">
                        10.40 AM, Fri 10 Sept 2021
                      </p>
                      <p className="text-[18px] font-medium text-white-a700">
                        You Posted a New Job
                      </p>
                      <p className="text-[14px] w-[92%] font-roboto2 font-normal leading-5 text-white-a700_cc md:w-full">
                        Kindly check the requirements and terms of work and make sure everything is right.
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                      <p className="text-[14px] font-normal text-white-a700">
                        Today you make 12 Activity
                      </p>
                      <button className="min-w-[138px] text-[14px] h-[38px] flex flex-row items-center justify-center rounded bg-red-a200 px-4 text-center font-medium text-white-a700 bg-[#FF5151]">
                        See All Activity
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] border border-solid border-gray-300 bg-white-a700 overflow-hidden">
                  <div className="mt-5">
                    <div className="mx-5 flex items-center justify-between gap-5 md:mx-0 sm:px-4">
                      <p className="text-[18px] font-medium text-blue_gray-900_01">
                        Upcoming Schedule
                      </p>
                      <SelectBox
                        indicator={
                          <img
                            src="images/downArrow.svg"
                            alt="downArrow"
                            className="h-[20px] w-[18px]"
                          />
                        }
                        name="Schedule Dropdown"
                        placeholder={`Today, 13sep 2021`}
                        options={dropDownOptions}
                        className='text-[12px] w-[38%] flex gap-2 rounded border border-solid border-gray-200 bg-white-a700 px-1.5 py-0.5 font-rooto2 text-gray-700'
                      />
                    </div>

                    <div className="mx-[18px] mt-[18px] flex flex-col items-start gap-2 md:mx-0 sm:p-4">
                      <p className="text-[12px] font-normal text-gray-700">
                        Priority
                      </p>
                      <div className="border-[0.5px] flex items-center justify-center gap-7 self-stretch rounded-md border-solid border-gray-300 bg-gray-550 p-2.5">
                        <div className="flex flex-1 flex-col items-start gap-1.5">
                          <p className="text-[16px] font-normal text-blue_gray-900_02 sm:text-[14px]">
                            Review candidate applications
                          </p>
                          <p className="text-[10px] font-roboto2 font-normal text-gray-700">
                            Today - 11:30 AM
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <img
                            src="images/notificationIcon2.svg"
                            alt="notification"
                            className="w-[24px] h-[24px]"
                          />
                          <img
                            src="images/horizontalMenu.svg"
                            alt="horizontalMenu"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                      </div>
                      <p className="text-[12px] font-normal text-gray-700">
                        Other
                      </p>

                      <div className="flex flex-col gap-2 self-stretch">
                        <DashboardRowthisistitle />
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="border-[0.5px] mx-5 flex item-end justify-between gap-5 rouned-md border-solid border-gray-300 bg-gray-50 px-4 sm:my-3">
                        <div className="mt-2.5 flex flex-1 flex-col items-start gap-2 sm:hidden">
                          <p className="text-[16px] w-full font-medium leading-6 text-blue_gray-900_02 hidden">
                            Sort Front-end developer candidates
                          </p>
                          <p className="text-[10px] font-roboto2 font-normal text-gray-700 hidden">
                            Today - 11:30 AM
                          </p>
                        </div>
                        <div className="flex gap-5">
                          <img
                            src="images/notificationIcon2.svg"
                            alt="notification"
                            className="w-[24px] h-[24px]"
                          />
                          <img
                            src="images/horizontalMenu.svg"
                            alt="horizontalMenu"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                      </div>

                      <div className="rounded-br-[10px] rounded-bl-[10px] mt-[-38px] relative flex justify-center border border-solid border-gray-300 bg-white-a700 p-1.5">
                        <p className="text-[14px] font-medium text-red-a200">
                          Create a New Schedule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App