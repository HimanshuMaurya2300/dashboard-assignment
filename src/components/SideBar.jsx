import { useEffect, useState } from "react"
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar"

const SideBar = () => {

    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setCollapsed(true)
        }
    }, [])

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Sidebar
            width="240px"
            collapsedWidth="0px !important"
            collapsed={collapsed}
            className={`flex flex-col h-screen pt-5 top-0 !sticky overflow-auto`}
            onCollapse={toggleSidebar}
        >
            <img src="/images/bigLogo.svg" alt="logo" className="flex justify-center items-center h-[62px] w-full" />
            <div className="px-[30px] mt-[38px] flex self-stretch py-2.5 sm:px-5 md:justify-center md:px-[15px]">
                <p className="text-[12px] font-roboto2 font-medium text-gray-700_7f md:text-[10px]">
                    MAIN MENU
                </p>
            </div>
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "16px 16px 16px 30px",
                        gap: "24px",
                        color: "#686868",
                        fontWeight: 400,
                        fontSize: "16px",
                        [`&hover, &.ps-active`]: {
                            color: '#ff5151', fontWeight: "500 !important"
                        }
                    }
                }}
                className="mt-4 w0full self-stretch"
            >

                <div>
                    <MenuItem
                        icon={<img src="/images/dashboardIcon.svg" alt="dashboard"
                            className="w-[24px] h-[24px]" />}
                    >
                        <p className="md:hidden">Dashboard</p>
                    </MenuItem>

                    <MenuItem
                        icon={<img src="/images/recruitmentIcon.svg" alt="recruitment"
                            className="w-[24px] h-[24px]" />}
                    >
                        Recruitment
                    </MenuItem>

                    <MenuItem
                        icon={<img src="/images/scheduleIcon.svg" alt="schedule"
                            className="w-[24px] h-[24px]" />}
                    >
                        Schedule
                    </MenuItem>

                    <MenuItem
                        icon={<img src="/images/employeeIcon.svg" alt="employee"
                            className="w-[24px] h-[24px]" />}
                    >
                        Employee
                    </MenuItem>


                    <MenuItem
                        icon={<img src="/images/departmentIcon.svg" alt="department"
                            className="w-[24px] h-[24px]" />}
                    >
                        Department
                    </MenuItem>
                </div>

                <div className="px-[30px] mt-[22px] flex py-2.5 sm:px-5">
                    <p className="text-[12px] font-roboto2 font-medium text-gray-700_7f">
                        OTHER
                    </p>
                </div>

                <div>
                    <MenuItem
                        icon={<img src="/images/supportIcon.svg" alt="support"
                            className="w-[24px] h-[24px]" />}
                    >
                        Support
                    </MenuItem>

                    <MenuItem
                        icon={<img src="/images/settingIcon.svg" alt="setting"
                            className="w-[24px] h-[24px]" />}
                    >
                        Settings
                    </MenuItem>
                </div>
            </Menu>
        </Sidebar>
    )
}

export default SideBar