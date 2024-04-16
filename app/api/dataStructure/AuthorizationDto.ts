/**
 * This class will get filled with the authorization token that the backend returns when getting authorized.
 */
class AuthorizationDto {
  public auth_token: string;

  constructor(auth_token: string) {
    this.auth_token = auth_token;
  }
}
