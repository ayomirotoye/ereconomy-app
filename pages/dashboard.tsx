import { NextPage } from "next";
import { AvatarIcon } from "../assets/icons/AvatarIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import MainPageContainer from "../components/containers/MainPageContainer";
import SearchInput from "../components/inputs/SearchInput";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import DynamicText from "../components/texts/DynamicText";
import { dashboardLinks } from "../utils/appNavigationLinks";

const Dashboard: NextPage = () => {

    return (
        <PageWrapper isHeaderVisible={false}>
            <div className="grid grid-cols-12">
                <Sidebar sidebarItems={dashboardLinks} />
                <MainPageContainer>
                    <div className="py-10">
                        <div id="dashboard-title-bar-section" className="flex justify-between">
                            <SearchInput
                                border="border-2 border-secondary-900 rounded-lg"
                                width="w-1/2"
                            />
                            <div className="flex justify-end space-x-4 w-1/4">
                                <div className="mt-2">
                                    <><NotificationIcon className="h-5 w-8" /></>
                                </div>
                                <><AvatarIcon className="h-10 w-10" /></>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 space-x-4 mt-5">
                            <div className="col-span-9 bg-green-900/10 rounded-md p-2">
                                <div className="z-1000 text-black">Hellow</div>
                            </div>
                            <div className="col-span-3 bg-red-900/10 rounded-md p-2">
                                <div className="flex justify-between">
                                    <DynamicText size="16px" className="font-bold text-primary-900">Latest Transactions</DynamicText>
                                    <PlusIcon className="h-10 w-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </MainPageContainer>
            </div>
        </PageWrapper>
    );
}

export default Dashboard;