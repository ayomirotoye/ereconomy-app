import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { hasKeys } from "../../utils/helpers";

export default function MyPopover({ showAs, listItems }: any) {

    return (
        <Popover className="relative mr-5">
            {({ open }: any) => (
                <>
                    <Popover.Button
                        className={`${open ? '' : 'text-opacity-90'} rounded-md focus:outline-none active:outline-none`}
                    >
                        {showAs}
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="p-5 bg-white">
                                    {listItems.map((item: any, index: number) => (
                                        <React.Fragment key={`popoverlist_${index}`}>
                                            {!hasKeys(item.clickable) ?
                                                <Link to={item.href} >
                                                    <span className="grid grid-cols-6 gap-4 cursor-pointer my-2">
                                                        <div className="col-span-2 text-left">{item.icon}</div>
                                                        <div className="col-span-4">{item.name}</div>
                                                    </span>
                                                </Link> :
                                                <span onClick={item.clickable.onClick} className="grid grid-cols-6 gap-4 cursor-pointer my-2">
                                                    <div className="col-span-2 text-left">{item.icon}</div>
                                                    <div className="col-span-4">{item.name}</div>
                                                </span>
                                            }
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}