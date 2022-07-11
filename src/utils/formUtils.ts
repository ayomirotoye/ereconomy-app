import {
  camelCaseToSentenceCase, isEmptyString,
  isNullOrUndefined
} from "../utils/helpers";


export const fieldHasError = (error: any, type = "", value = 0) => {
  return (!isNullOrUndefined(error) && error?.hasError) || (type === "number" && value < 0);
}


let errors = {};
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validationBasis = ({ key, value }: any, validationParam: string) => {
  switch (validationParam) {
    case "required":
      return isNotEmptyValue(value)
        ? camelCaseToSentenceCase(key).concat(" can not be empty") : "";
    case "email":
      return isNotEmptyValue(value) || !emailPattern.test(String(value))
        ? camelCaseToSentenceCase(key).concat(" must be a valid email") : "";
        case "passwordPolicy":
          return isNotEmptyValue(value) 
  }
  return "";
}

const isNotEmptyValue = (value: any)=>{
  return isNullOrUndefined(value) || isEmptyString(value);
}

export const isValid = (validationSchema: any, validationContext: any) => {
  errors = {};
  try {
    let validationContextObj = Object.entries(validationContext);
    for (const [key, value] of validationContextObj) {
      let vaal: any = validationSchema[key];
      const validationRes = validationBasis({ key: key, value: value }, vaal);
      if(!isEmptyString(validationRes)){
        errors = Object.assign(errors, {
          [key]: validationBasis({ key: key, value: value }, vaal)
        });
      }
    }
  } catch (err: any) {
    console.log("ERR::", err);
  }
  return errors;
}
