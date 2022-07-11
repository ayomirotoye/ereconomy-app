import { hasKeys, isNullOrUndefined } from "../../utils/helpers";

export default function TileCard(
    {
        icon,
        value = "",
        title = "",
        addable = {},
    }: any) {

    return (
        <div className="w-full md:w-1/3 border-2 border-green-900 rounded-md overflow-hidden shadow-lg h-16">
            <div className="px-4 py-6">
                <div className="hidden font-bold text-sm mb-2 -mt-9 bg-white md:block absolute">{title}</div>
                <div className={`flex flex-row ${(!isNullOrUndefined(addable) && hasKeys(addable)) ? "justify-between" : "justify-start"}  items-center -mt-2`}>
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
                            className={`font-semibold ${value.length > 5 ? "text-lg" : "text-lg"} inline-block align-middle`}>
                            {addable.icon}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}