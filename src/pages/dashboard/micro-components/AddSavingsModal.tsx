import { useState } from "react";
import toast from "react-hot-toast";
import { PlusIcon } from "../../../assets/icons/PlusIcon";
import Alert from "../../../components/alerts";
import Button from "../../../components/buttons/Button";
import AmountInput from "../../../components/inputs/AmountInput";
import DialogModal from "../../../components/modals/DialogModal"
import { useLoggedInUserDetails, useUrlInfo } from "../../../hooks/components";
import { callInitiateCardPayment } from "../../../services/paymentService";
import { responseMessages } from "../../../static/constants";
import { isSuccessful } from "../../../utils/helpers";

export default function AddSavingsModal({
    showModal = false,
    onClose
}: any) {
    const urlInfo = useUrlInfo();
    const userDetails = useLoggedInUserDetails();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors] = useState<any>({

    });
    const [values, setValues] = useState({
        "amount": "",
    });
    const initiatePayment = async () => {

        const requestData = {
            ...values,
            amount: parseFloat(String(values.amount).replaceAll(',', '')),
            email: userDetails?.emailAddress,
            destinationAccount: userDetails?.accounts[0].accountNumber,
            redirectUrl: urlInfo?.baseUrl.concat("/payment-status?redirectTo=", urlInfo.href)
        }
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

    return (
        <DialogModal
            isModalVisible={showModal}
            modalTitle="Add saving"
            showFooter={false}
            onClosed={onClose}
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

        </DialogModal>
    )
}
