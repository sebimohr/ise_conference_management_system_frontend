'use client'

import React from "react";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import ApiService from "@/app/api/ApiService";
import {UserDto} from "@/app/api/dataStructure/UserDto";
import LoginMessage from "@/app/components/login/loginMessage";
import {PressEvent} from "@react-types/shared";
import {setSessionData} from "@/app/api/SessionManagement";

export default function Page() {
  const apiService = ApiService.getInstance();

  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  // const [emailHasCorrectFormat, setEmailHasCorrectFormat] = React.useState(true); // TODO: check if email is valid
  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loginMessage, setLoginMessage] = React.useState<string>();

  const togglePasswordVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  const submitLoginForm = async (e: PressEvent) => {
    setIsLoading(true);
    if (password.length < 1 || email.length < 1) {
      setLoginMessage("Please enter valid inputs");
    } else {
      await apiService.authenticateUserEndpoint(new UserDto(email, password))
                      .then(async res => {
                        if (res.status == 200) {
                          let token = await res.json() as AuthorizationDto
                          setLoginMessage("Successfully logged in.")
                          await setSessionData(token.auth_token)
                        } else if (res.status in [401, 404]) {
                          setLoginMessage("Email or Password is wrong.");
                        } else {
                          setLoginMessage("Error: " + res.statusText);
                        }
                      });
    }
    setIsLoading(false);
  }


  return (
    <div className="w-full h-full flex flex-col items-center justify-stretch space-y-8 pt-16">
      <p className="text-2xl">Please Log In</p>
      <div className={"w-1/3 min-w-80"}>
        <form className="flex flex-col w-full gap-4 pb-4 items-center justify-center">
          <Input
            isClearable
            label="Email"
            variant="flat"
            placeholder="Enter your email"
            value={email}
            onValueChange={setEmail}
            startContent={
              <EnvelopeIcon className="h-5"/>
            }
            type="email"
            className="w-full"
          />
          <Input
            label="Password"
            variant="flat"
            placeholder="Enter your password"
            value={password}
            onValueChange={setPassword}
            startContent={
              <LockClosedIcon className="h-5"/>
            }
            endContent={
              <button className="focus:outline-none" type="button" onClick={togglePasswordVisibility}>
                {passwordIsVisible ? (<EyeSlashFilledIcon/>) : (<EyeFilledIcon/>)}
              </button>
            }
            type={passwordIsVisible ? "text" : "password"}
            className="w-full"
          />
          <Button
            isLoading={isLoading}
            className="w-1/2 w-min-80"
            color="default"
            onPress={_ => submitLoginForm(_)}
            variant="flat">
            Login
          </Button>
        </form>
        <div>
          {loginMessage != undefined && <LoginMessage message={loginMessage}/>}
        </div>
      </div>
    </div>
  );
}
