/**
 * This class is used when authorizing a user through a POSt-request on the backend after a user put in their data.
 */
export class UserDto {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
