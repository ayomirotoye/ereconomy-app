import { endpoints } from "../utils/apiCallEndpoints";
import { handleMyErrors } from "../utils/errorHandlingUtil";
import httpService from "./httpService";

export const callGetLatestTrasnsactions = async () => {
    const url = endpoints.transactionsEndpoint;
    const { data } = await httpService.get(url.concat("?page=1&size=5")).catch((err: any) => {
        return { data: handleMyErrors(err) };
    });
    return data;
}