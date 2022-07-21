
import { useEffect } from "react";
import BasketIcon from "../../../assets/icons/BasketIcon";
import TileCard from "../../../components/cards/TileCard";
import DialogModal from "../../../components/modals/DialogModal";
import { config } from /* preval */ '../../../tailwind.config';
import { toLowerCase } from "../../../utils/helpers";
import { format, formatDistance } from "date-fns"

export default function ViewEarningsModal({
    showModal = false,
    onClose,
    earnings = []
}: any) {

    useEffect(() => {
        console.log("earnigs::", earnings)

        return () => {

        }
    }, [earnings])


    return (
        <DialogModal
            isModalVisible={showModal}
            modalTitle="My Earnings"
            showFooter={false}
            onClosed={onClose}
            size="md:w-1/4"

        >
            <div className="py-4">
                {earnings.map((item: {
                    createdOn: any;
                    fundingStatusEnum: any; value: any; title: any;
                }, index: any) => {
                    return <div className="w-full">
                        <TileCard
                            index={index}
                            icon={<BasketIcon fill={config.theme.extend.colors.primary["900"]} />}
                            value={item.value}
                            title={toLowerCase(item?.fundingStatusEnum)}
                            extraClassName="my-3"
                            footer={
                                {
                                    hasFooter: true,
                                    footerElement: <span className="text-xs font-semibold mb-[10px]">{toLowerCase(item?.fundingStatusEnum)} {formatDistance(new Date(), new Date(item.createdOn))} {"ago"}</span>
                                }
                            }
                        />
                    </div>
                })}
            </div>

        </DialogModal>
    )
}
