import { PlusIcon } from "../../../assets/icons/PlusIcon"
import DynamicText from "../../texts/DynamicText";
import { formatDistance } from "date-fns";
import { splitString, toLowerCase } from "../../../utils/helpers";

export default function ShortListing({ listItems, listTitle }: any) {
    return (
        <div>
            <div className="flex justify-between">
                <DynamicText size="16px" className="font-bold text-primary-900">{listTitle}</DynamicText>
                <PlusIcon className="p-1 bg-green-900 rounded-lg h-5 w-5" height="60" width="60" />
            </div>
            <div id="list-items" className="my-5">
                {
                    listItems?.length > 0 ? listItems?.map((_items: any, index: number) => {
                        return <div className="grid grid-cols-6 space-x-2 my-2" key={`${`listitems_` + index}`}>
                            <div className="col-span-1 bg-white p-2 text-center align-middle rounded-md">
                                <div className="font-[900] text-green-900 text-[12px]">
                                    {_items.tnxDirection}
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-center content-center">
                                <div className="mx-auto my-auto">
                                    <div className="flex flex-col">
                                        <div className="text-xs font-[900]">{toLowerCase(splitString(_items.productTypeEnum, "_"))}</div>
                                        <div className="text-gray-600 text-xs">{`${formatDistance(new Date(), new Date(_items.createdOn))} ago`}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex justify-center content-center">
                                <div className="mx-auto my-auto font-[900] text-[12px]">
                                    {_items.amount > 0 ? " + " : " - "} {_items.amount}
                                </div>
                            </div>
                        </div>
                    })
                        : <DynamicText size="12px">No record yet</DynamicText>
                }
            </div>
        </div>
    )
}