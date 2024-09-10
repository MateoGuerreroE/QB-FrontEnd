import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";

export default function AuthComponent() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div id="switch" className="w-[full]">
        <Tabs
          classNames={{
            base: "h-10",
            tabList: "p-0 h-10",
            tab: "w-full h-full",
          }}
          fullWidth
          aria-label="authOptions"
          color="primary"
          variant="light"
          className="bg-[#262626] rounded-xl"
        >
          <Tab key="signup" title="Sign up" className="font-titles text-white">
            <SignupComponent />
          </Tab>
          <Tab key="login" title="Log In" className="font-titles">
            <LoginComponent />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
