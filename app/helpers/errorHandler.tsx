import {permanentRedirect} from "next/navigation";

export enum severityEnum {
  warning,
  error,
  fatal
}

class ErrorHandler {
  public static handleError(severity: severityEnum,
                            errorMessage: string,
                            redirectString: string = "/") {
    switch (severity) {
      case severityEnum.warning:
        break;
      case severityEnum.error:
        break;
      case severityEnum.fatal:
        break;
    }

    // TODO: report errorMessage to frontend snackBar
    console.log(errorMessage);

    // return useRouter().push(redirectString);
    return permanentRedirect(redirectString);
  }
}

export default ErrorHandler.handleError;
