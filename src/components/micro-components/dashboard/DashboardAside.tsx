import { useEffect, useState } from "react";
import { callGetLatestTrasnsactions } from "../../../services/transactionService";
import { isSuccessful } from "../../../utils/helpers";
import ShortListing from "./ShortListing";

export default function DashboardAside() {
    const [transactions, setTransactions] = useState([]);

    const fetchLatestTransactions = () => {
        callGetLatestTrasnsactions().then((response) => {
            console.log("responsecode::", response)
            if (isSuccessful(response?.responseCode)) {
                if (response.data?.length > 0) {
                    setTransactions(response.data)
                }
            }
        })
    }

    useEffect(() => {
        fetchLatestTransactions();
    }, [])

    return (
        <div className="col-span-12 md:col-span-3 bg-red-900/10 rounded-md p-2">
            <div className="h-1/2 overflow-y-auto">
                <ShortListing
                    listItems={transactions}
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