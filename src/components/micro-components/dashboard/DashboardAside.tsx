import ShortListing from "./ShortListing";

export default function DashboardAside() {
    return (
        <div className="col-span-12 md:col-span-3 bg-red-900/10 rounded-md p-2">
            <div className="h-1/2">
                <ShortListing
                    listItems={[]}
                    listTitle="Latest Transactions"
                />
            </div>
            <div>
                <ShortListing
                    listItems={[]}
                    listTitle="Saved Accounts"
                />
            </div>
        </div>
    )
}