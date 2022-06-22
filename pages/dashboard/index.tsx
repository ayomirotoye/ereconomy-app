import { NextPage } from "next";
import colors from 'tailwindcss/colors';
import { AvatarIcon } from "../../assets/icons/AvatarIcon";
import BasketIcon from "../../assets/icons/BasketIcon";
import { EyeIcon } from "../../assets/icons/EyeIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { PortfolioIcon } from "../../assets/icons/PortfolioIcon";
import { SavingsIcon } from "../../assets/icons/SavingsIcon";
import TileCard from "../../components/cards/TileCard";
import MainPageContainer from "../../components/containers/MainPageContainer";
import SearchInput from "../../components/inputs/SearchInput";
import PageWrapper from "../../components/PageWrapper";
import Sidebar from "../../components/Sidebar";
import tailwindConfig from /*preval*/ '../../tailwind.config';
import { dashboardLinks } from "../../utils/appNavigationLinks";
import DashboardAside from "./micro-components/DashboardAside";
import DashboardThirdSection from "./micro-components/DashboardThirdSection";
import TimelineGraph from "./micro-components/TimelineGraph";

const listItems = [
    {
        icon: "",
        title: "",
        value: ""
    }
]

const accountItems = [
    {
        bankName: "",
        accountNumber: "",
        dateAdded: "",
        isPrimary: false
    }
]

const tileItems = [
    {
        icon: <SavingsIcon fill={tailwindConfig.theme.extend.colors.primary["900"]} />,
        value: "N1, 000",
        title: "Savings",
        addable: {
            icon: <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />,
            onClick: ""
        }
    },
    {
        icon: <BasketIcon fill={tailwindConfig.theme.extend.colors.primary["900"]} />,
        value: "N5, 000",
        title: "Earnings",
        addable: {
            icon: <EyeIcon fill={colors.white}
                className="p-1 bg-green-900 rounded-lg h-5 w-5"
                height="60"
                width="60" />,
            onClick: ""
        }
    },
    {
        icon: <PortfolioIcon fill={tailwindConfig.theme.extend.colors.primary["900"]} />,
        value: "N5, 000",
        title: "Investments",
        addable: {
            icon: <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />,
            onClick: ""
        }
    }
]
const Dashboard: NextPage = () => {

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
                                <><AvatarIcon className="h-10 w-10" /></>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:space-x-4 mt-5">
                            <div className="col-span-12 md:col-span-9 mb-3 md:mb-0 rounded-md p-2">
                                <div className="md:flex justify-between space-y-3 md:space-y-0 md:space-x-3">
                                    {tileItems.map((items: any, index: number) => {
                                        return <TileCard
                                            index={index}
                                            icon={items.icon}
                                            value={items.value}
                                            title={items.title}
                                            addable={items.addable}
                                        />
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
        </PageWrapper >
    );
}

export default Dashboard;