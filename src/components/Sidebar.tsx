
import React from "react";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { isNullOrUndefined } from "../utils/helpers";
import Brand from "./Brand";

export default function Sidebar({ sidebarItems }: any) {
    const [urlPath, setURLPath] = useState('/dashboard');

   

    const checkMatch = (items: any, urlPath: string) => {
        return isNullOrUndefined(items.urlPatterns)
            ? items.route?.includes(urlPath) : items.urlPatterns.test(urlPath)
    }
    return (
        <div className={`bg-primary-900 h-screen py-4 col-span-2`}>
            <div className="mx-1 md:mx-3">
                <Brand color="text-white" />
            </div>
            <nav>
                <div className='mt-24'>
                    <div className="flex flex-col">
                        {
                            sidebarItems.map((items: any, index: number) => {
                                let check = checkMatch(items, urlPath);
                                return <Link key={`sidebar_items_${index}`} to={items?.route}
                                    className={`mx-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg hover:bg-green-100 ${check ? "bg-green-100 sidebar-active font-bold" : ""}`}>
                                    <span className="inline-flex items-center my-3 mx-3">
                                        {items.icon}
                                        <span className="ml-2 hidden md:block text-white">{items.title}</span>
                                    </span>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}