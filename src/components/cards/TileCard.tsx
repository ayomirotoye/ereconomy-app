import { hasKeys, isNullOrUndefined } from "../../utils/helpers";

export default function TileCard(
    {
        icon,
        value = "",
        title = "",
        addable = {},
        viewable = {},
        extraClassName = "md:w-1/3",
        footer = {
            hasFooter: false
        }
    }: any) {

    return (
        <div className={`w-full ${extraClassName} border-2 border-green-900 rounded-md overflow-hidden shadow-lg h-18`}>
            <div className="px-4 py-6">
                <div className="hidden font-bold text-sm mb-2 -mt-9 bg-white md:block absolute">{title}</div>
                <div className={`flex flex-row ${(!isNullOrUndefined(addable) && hasKeys(addable)) || !isNullOrUndefined(viewable) && hasKeys(viewable) ? "justify-between" : "justify-start"}  items-center -mt-2`}>
                    <div className="">
                        {icon}
                    </div>
                    <div className={`font-semibold ${value.length > 5 ? "sm:text-lg" : "sm:text-lg"} inline-block align-middle`}>
                        {value}
                    </div>
                    {
                        !isNullOrUndefined(addable) && hasKeys(addable) &&
                        <div
                            onClick={addable.onClick}
                            className={`font-semibold ${value.length > 5 ? "text-lg" : "text-lg"} inline-block align-middle cursor-pointer`}>
                            {addable.icon}
                        </div>
                    }
                    {!isNullOrUndefined(viewable) && hasKeys(viewable) &&
                        <div
                            onClick={viewable.onClick}
                            className={`font-semibold ${value.length > 5 ? "text-lg" : "text-lg"} inline-block align-middle cursor-pointer`}>
                            {viewable.icon}
                        </div>
                    }
                </div>
                <div className="flex justify-center">
                    {footer.hasFooter && footer.footerElement}
                </div>
            </div>
        </div>
    )
}