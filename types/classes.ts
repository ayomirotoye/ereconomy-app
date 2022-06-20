import { MouseEventHandler } from "react";

export class LoginRequest {
    username: string;
    password: string;
    corporateCode: string;
    constructor(username: string, password: string, corporateCode: string) {
        this.username = username;
        this.password = password;
        this.corporateCode = corporateCode;
    }

    toString(): string {
        return `${this}`;
    }
}

export type ResponseBody = {
    responseCode: string;
    data?: any;
    description?: string;
    message?: string;
    hasError?: boolean;
};

export type ProgressBarProps = {
    id?: string;
    now?: number;
    children?: any;
    title?: string;
    className?: string
}

export type RegisterRequest = {
    "username": string;
    "lastName": string;
    "firstName": string;
    "password": string;
    "emailAddress": string;
    "phoneNumber": string;
    "gender": string;
    "emailValidationToken": string;
}

export type ErrorRes = {
    responseCode: string,
    status?: string,
    data?: string,
    message?: string,
    hasError?: boolean,
};

export type ButtonType = {
    onClicked?: MouseEventHandler<HTMLButtonElement>,
    buttonText?: any,
    className?: string,
    extraDivStyles?: string,
    buttonData?: any,
    extraButtonStyles?: string
    buttonVariation?: string,
    isLoading?: boolean,
    children?:any
}
export type AlertType = {
    alertMessage: string;
    typeOfAlert?: string;
    onClicked?: MouseEventHandler<HTMLDivElement>
    shouldShow: boolean;
    clearText?: any;
}