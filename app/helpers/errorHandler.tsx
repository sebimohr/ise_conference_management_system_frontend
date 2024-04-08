export enum severityEnum {
  warning,
  error,
  fatal
}

export default class ErrorHandler {
  constructor(severity: severityEnum,
              errorMessage: string,
              shouldRedirect: boolean = false,
              redirectString: string = "") {
    this.severity = severity;
    this.errorMessage = errorMessage;
    this.shouldRedirect = shouldRedirect;
    this.redirectString = redirectString;
  }

  private readonly severity: severityEnum
  private readonly errorMessage: string
  private readonly shouldRedirect: boolean
  private readonly redirectString: string

  public execute() {
    switch (this.severity) {
      case severityEnum.warning:
        break;
      case severityEnum.error:
        break;
      case severityEnum.fatal:
        break;
    }

    return this.redirectIfRequested();
  }

  private redirectIfRequested() {
    if (this.shouldRedirect) {
      return {
        redirect: {
          destination: this.redirectString ?? "/",
          permanent: false
        }
      }
    }
  }
}

