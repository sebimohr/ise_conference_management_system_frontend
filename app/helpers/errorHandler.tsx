import {permanentRedirect} from "next/navigation";

export enum SeverityEnum {
  success,
  warning,
  error,
  fatal
}

class ErrorHandler {
  public static handleError(severity: SeverityEnum,
                            errorMessage: string,
                            redirectString: string = "/") {
    switch (severity) {
      case SeverityEnum.success:
        return;
      case SeverityEnum.warning:
        break;
      case SeverityEnum.error:
        break;
      case SeverityEnum.fatal:
        break;
    }

    // TODO: report errorMessage to frontend snackBar
    console.log(errorMessage);

    // return useRouter().push(redirectString);
    return permanentRedirect(redirectString);
  }
}

export default ErrorHandler.handleError;
