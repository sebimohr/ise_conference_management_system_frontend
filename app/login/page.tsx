"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import ApiService from "@/app/api/ApiService";
import { UserDto } from "@/app/api/dataStructure/UserDto";
import { PressEvent } from "@react-types/shared";
import { setSessionData } from "@/app/api/SessionManagement";
import Snackbar from "@/app/components/home/snackbar";

import { SeverityEnum } from "@/app/api/dataStructure/severityEnum";

/**
 * The login page.
 */
export default function Page() {
  const apiService = ApiService.getInstance();

  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  // const [emailHasCorrectFormat, setEmailHasCorrectFormat] = React.useState(true); // TODO: check if email is valid
  const [isLoading, setIsLoading] = React.useState(false);

  const [isDisabled, setIsDisabled] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [messageIsVisible, setMessageIsVisible] = React.useState(false);
  const [loginMessage, setLoginMessage] = React.useState("");
  const [messageSeverity, setMessageSeverity] = React.useState(
    SeverityEnum.success
  );

  const togglePasswordVisibility = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const showLoginMessage = (message: string, severity: SeverityEnum) => {
    setMessageIsVisible(true);
    setLoginMessage(message);
    setMessageSeverity(severity);
    if (severity == SeverityEnum.success) {
      setIsDisabled(true);
    }
  };

  const submitLoginForm = async (e: PressEvent) => {
    setIsLoading(true);
    if (password.length < 1 || email.length < 1) {
      setLoginMessage("Please enter valid inputs");
    } else {
      await apiService
        .authenticateUserEndpoint(new UserDto(email, password))
        .then(async (res) => {
          if (res.status == 200) {
            let token = (await res.json()) as AuthorizationDto;
            showLoginMessage("Successfully logged in.", SeverityEnum.success);
            await setSessionData(token.auth_token);
          } else if (res.status == 401) {
            showLoginMessage("Email or Password is wrong.", SeverityEnum.error);
          } else {
            showLoginMessage("Error: " + res.statusText, SeverityEnum.fatal);
          }
        });
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-stretch space-y-8 pt-16">
      <p className="text-2xl">Please Log In</p>
      <div className={"w-1/3 min-w-80"}>
        <form className="flex flex-col w-full gap-4 pb-4 items-center justify-center">
          <Input
            isClearable
            isDisabled={isDisabled}
            label="Email"
            variant="flat"
            placeholder="Enter your email"
            value={email}
            onValueChange={setEmail}
            startContent={<EnvelopeIcon className="h-5" />}
            type="email"
            className="w-full"
          />
          <Input
            label="Password"
            isDisabled={isDisabled}
            variant="flat"
            placeholder="Enter your password"
            value={password}
            onValueChange={setPassword}
            startContent={<LockClosedIcon className="h-5" />}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordIsVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
              </button>
            }
            type={passwordIsVisible ? "text" : "password"}
            className="w-full"
          />
          <Button
            isLoading={isLoading}
            isDisabled={isDisabled}
            className="w-1/2 w-min-80"
            color="default"
            onPress={(_) => submitLoginForm(_)}
            variant="flat"
          >
            Login
          </Button>
        </form>
        <Snackbar
          message={loginMessage}
          isVisible={messageIsVisible}
          severity={messageSeverity}
        />
      </div>
    </div>
  );
}
