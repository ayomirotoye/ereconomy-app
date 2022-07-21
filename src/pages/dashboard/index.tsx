import React, { useEffect, useState } from "react";
import { AiFillEye } from 'react-icons/ai';
import { useNavigate } from "react-router";
import colors from "tailwindcss/colors";
import { AvatarIcon } from "../../assets/icons/AvatarIcon";
import BasketIcon from "../../assets/icons/BasketIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { PortfolioIcon } from "../../assets/icons/PortfolioIcon";
import { SavingsIcon } from "../../assets/icons/SavingsIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { UserSettingsIcon } from "../../assets/icons/UserSettings";
import TileCard from "../../components/cards/TileCard";
import MainPageContainer from "../../components/containers/MainPageContainer";
import MyPopover from "../../components/dropdowns/MyPopover";
import SearchInput from "../../components/inputs/SearchInput";
import DashboardAside from "../../components/micro-components/dashboard/DashboardAside";
import DashboardThirdSection from "../../components/micro-components/dashboard/DashboardThirdSection";
import TimelineGraph from "../../components/micro-components/dashboard/TimelineGraph";
import PageWrapper from "../../components/PageWrapper";
import Sidebar from "../../components/Sidebar";
import { callGetEarnings, callGetUserAccountBalance } from "../../services/accountService";
import { config } from /* preval */ '../../tailwind.config';
import { dashboardLinks } from "../../utils/appNavigationLinks";
import { mergeArr, sortArray, sumArrValues } from "../../utils/arrayUtils";
import { formatCurrency, isSuccessful } from "../../utils/helpers";
import AddSavingsModal from "./micro-components/AddSavingsModal";
import ViewEarningsModal from "./micro-components/ViewEarningsModal";


export default function Dashboard() {

    const navigate = useNavigate();

    const [showAddSavingsModal, setShowAddSavingsModal] = useState(false);
    const [showEarningsModal, setShowEarningsModal] = useState(false);


    const doLogout = () => {
        sessionStorage.clear();
        navigate("/");
    }

    const handleNewSavings = () => {
        setShowAddSavingsModal(true);
    }

    const handleNewInvestment = () => {
        setShowAddSavingsModal(true);
    }

    const handleViewEarnings = () => {
        setShowEarningsModal(true);
    }

    const fetchSavingsBalance = () => {
        callGetUserAccountBalance().then((response) => {
            console.log("responsecode::", response)
            if (isSuccessful(response?.responseCode)) {
                if (response.data?.length > 0) {
                    setTileItems(prev => ({
                        ...prev,
                        savings: {
                            ...tileItems.savings, value: formatCurrency(response.data[0]?.balance)
                        }
                    })
                    )
                }
            }
        })
    }
    const fetchEarnings = () => {
        callGetEarnings().then((response) => {
            console.log("earnings::", response)
            if (isSuccessful(response?.responseCode)) {
                if (response.data) {
                    let sum = sumArrValues(Object.values(response.data.summary));
                    const listOfEarnings = sortArray(mergeArr(Object.values(response.data.records)), "createdOn", -1);
                    console.log("list::", listOfEarnings);
                    setTileItems(prev => ({
                        ...prev,
                        earnings: {
                            ...tileItems.earnings,
                            list: listOfEarnings,
                            value: formatCurrency(sum)
                        }
                    })
                    )
                }
            }
        })
    }

    useEffect(() => {
        fetchSavingsBalance();
        fetchEarnings();
    }, [])

    const menuIconItems = [
        {
            name: 'Profile',
            href: "/profile",
            icon: <UserIcon className="h-5 w-5" fill={config.theme.extend.colors.primary[900]}
                stroke={config.theme.extend.colors.primary[900]} strokeWidth={3} />,
        },
        {
            name: 'Logout',
            href: "/logout",
            icon: <LogoutIcon className="h-7 w-7 mt-1"
                stroke={config.theme.extend.colors.primary[900]}
                fill={config.theme.extend.colors.primary[900]} strokeWidth={3} />,
            clickable: {
                onClick: () => doLogout()
            }
        },
        {
            name: 'Settings',
            href: "/settings",
            icon: <UserSettingsIcon className="h-5 w-5" fill={colors.white}
                stroke={config.theme.extend.colors.primary[900]} strokeWidth={3} />,
        },
    ]

    const [tileItems, setTileItems] = useState({
        savings: {
            icon: <SavingsIcon fill={config.theme.extend.colors.primary["900"]} />,
            value: "N0",
            title: "Savings",
            addable: {
                icon: <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />,
                onClick: handleNewSavings
            }
        },
        earnings: {
            icon: <BasketIcon fill={config.theme.extend.colors.primary["900"]} />,
            value: "N0",
            list: [] as any,
            title: "Earnings",
            viewable: {
                icon: <AiFillEye fill={colors.green[900]} fontSize={25} />,
                onClick: handleViewEarnings
            }
        },
        investments: {
            icon: <PortfolioIcon fill={config.theme.extend.colors.primary["900"]} />,
            value: "--",
            title: "Investments",
            addable: {
                icon: <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />,
                onClick: handleNewInvestment
            }
        }
    })

    return (
        <PageWrapper isHeaderVisible={false}>
            <div className="grid grid-cols-12">
                <Sidebar sidebarItems={dashboardLinks} />
                <MainPageContainer>
                    <div className="py-10 flex flex-col h-screen">
                        <div id="dashboard-title-bar-section" className="flex justify-between mx-2">
                            <SearchInput
                                border="border-2 border-secondary-900 rounded-lg"
                                width="w-full md:w-1/2"
                            />
                            <div className="hidden md:flex justify-end space-x-4 w-1/4">
                                <div className="mt-2">
                                    <><NotificationIcon className="h-5 w-8" /></>
                                </div>
                                <div>
                                    <MyPopover showAs={<AvatarIcon className="h-10 w-10" />} listItems={menuIconItems} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:space-x-4 mt-5">
                            <div className="col-span-12 md:col-span-9 mb-3 md:mb-0 rounded-md p-2">
                                <div className="md:flex justify-between space-y-3 md:space-y-0 md:space-x-3">
                                    {Object.entries(tileItems).map(([key, value]: any, index: number) => {
                                        return <React.Fragment key={`tilecard_${index}`}>
                                            <TileCard
                                                index={index}
                                                icon={value.icon}
                                                value={value.value}
                                                title={key}
                                                addable={value.addable}
                                                viewable={value.viewable}
                                            />
                                        </React.Fragment>
                                    })}
                                </div>
                                <div className="mt-5 bg-green-900/10 h-52 flex justify-end">
                                    <TimelineGraph />
                                </div>
                                <DashboardThirdSection />
                            </div>
                            <DashboardAside />
                        </div>
                    </div>
                </MainPageContainer>
            </div >

            {showAddSavingsModal &&
                <AddSavingsModal
                    onClose={() => setShowAddSavingsModal(false)}
                    showModal={showAddSavingsModal}
                />
            }

            {showEarningsModal &&
                <ViewEarningsModal
                    onClose={() => setShowEarningsModal(false)}
                    showModal={showEarningsModal}
                    earnings={tileItems.earnings.list}
                />
            }
        </PageWrapper >
    );
}