import React, { useState } from "react";
import toast from "react-hot-toast";
import colors from "tailwindcss/colors";
import {config} from /* preval */ '../../tailwind.config'
import { AvatarIcon } from "../../assets/icons/AvatarIcon";
import BasketIcon from "../../assets/icons/BasketIcon";
import { EyeIcon } from "../../assets/icons/EyeIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { PortfolioIcon } from "../../assets/icons/PortfolioIcon";
import { SavingsIcon } from "../../assets/icons/SavingsIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { UserSettingsIcon } from "../../assets/icons/UserSettings";
import Alert from "../../components/alerts";
import Button from "../../components/buttons/Button";
import TileCard from "../../components/cards/TileCard";
import MainPageContainer from "../../components/containers/MainPageContainer";
import MyPopover from "../../components/dropdowns/MyPopover";
import AmountInput from "../../components/inputs/AmountInput";
import SearchInput from "../../components/inputs/SearchInput";
import DashboardAside from "../../components/micro-components/dashboard/DashboardAside";
import DashboardThirdSection from "../../components/micro-components/dashboard/DashboardThirdSection";
import TimelineGraph from "../../components/micro-components/dashboard/TimelineGraph";
import DialogModal from "../../components/modals/DialogModal";
import PageWrapper from "../../components/PageWrapper";
import Sidebar from "../../components/Sidebar";
import { useUrlInfo } from "../../hooks/components";
import { callInitiateCardPayment } from "../../services/paymentService";
import { responseMessages } from "../../static/constants";
import { dashboardLinks } from "../../utils/appNavigationLinks";
import { isSuccessful } from "../../utils/helpers";

export default function Dashboard() {

    const urlInfo = useUrlInfo();
    const [formErrors] = useState<any>({

    });
    const [showAddSavingsModal, setShowAddSavingsModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState({
        "amount": "",
    });

    const initiatePayment = async () => {

        const requestData = {
            ...values,
            amount: parseFloat(String(values.amount).replaceAll(',', '')),
            email: "ayomirotoye@gmail.com",
            redirectUrl: urlInfo?.href
        }
        console.log("requestData::", requestData)
        setIsSubmitting(true);
        const apiCall = await callInitiateCardPayment(requestData);
        setIsSubmitting(false);
        console.log("respomse::", apiCall);

        if (isSuccessful(apiCall.responseCode)) {
            if (apiCall.responseCode === 200) {
                window.location.href = apiCall.data.authorizationUrl;
            }
        } else {
            toast.custom((t) => <Alert type="failed" t={t} message={apiCall?.message ?? responseMessages.BAD_REQUEST} />, {
                position: 'top-center',
            });
        }
    }


    const handleNewSavings = () => {
        setShowAddSavingsModal(true);
    }

    const handleNewInvestment = () => {
        setShowAddSavingsModal(true);
    }
    const handleCloseNewSavigsModal = () => {
        setShowAddSavingsModal(false);
    }


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
            value: "",
            title: "Savings",
            addable: {
                icon: <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />,
                onClick: handleNewSavings
            }
        },
        earnings: {
            icon: <BasketIcon fill={config.theme.extend.colors.primary["900"]} />,
            value: "N5, 000",
            title: "Earnings",
            viewable: {
                icon: <EyeIcon fill={colors.white}
                    className="p-1 bg-green-900 rounded-lg h-5 w-5"
                    height="60"
                    width="60" />,
                onClick: ""
            }
        },
        investments: {
            icon: <PortfolioIcon fill={config.theme.extend.colors.primary["900"]} />,
            value: "N5, 000",
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

            {showAddSavingsModal && <DialogModal
                isModalVisible={showAddSavingsModal}
                modalTitle="Add saving"
                showFooter={false}
                onClosed={handleCloseNewSavigsModal}
                size="md:w-1/4"

            >
                <div className="py-4">
                    <div className="mb-4">
                        <AmountInput
                            value={values.amount}
                            hideableLabelText=""
                            fixedLabelText="Amount to Save"
                            onChange={(e: any) => {
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }}
                            type="amount"
                            inputFontSize="md:text-md"
                            name="amount"
                            error={{
                                hasError: formErrors.amount,
                                message: formErrors.amount
                            }}
                        />
                    </div>
                    <Button
                        isLoading={isSubmitting}
                        onClicked={initiatePayment}
                    >
                        <span className="flex justify-center items-center">
                            <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5 mr-2" />
                            <span>Add</span>
                        </span>
                    </Button>
                </div>

            </DialogModal>}
        </PageWrapper >
    );
}