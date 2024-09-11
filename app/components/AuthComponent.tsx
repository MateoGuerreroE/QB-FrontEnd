"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";
import CloseLoginButton from "./CloseLoginButton";

export default function AuthComponent() {
  const [selected, setSelected] = useState<string>("login");
  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-full h-full flex flex-col items-center pt-10 lg:justify-center lg:p-10 lg:w-[50%]">
        <CloseLoginButton />
        <div id="switch" className="w-full lg:h-full pt-8">
          <div className="w-full flex flex-col lg:items-center">
            <Tabs
              classNames={{
                base: "h-10",
                tabList: "p-0 h-10",
                tab: "w-full h-full",
              }}
              fullWidth
              aria-label="authOptions"
              color="primary"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(String(key))}
              variant="light"
              className="bg-[#262626] rounded-xl lg:w-[300px]"
            >
              <Tab
                key="login"
                title="Log In"
                className="font-titles w-full flex flex-col items-center max-w-[400px]"
              >
                <LoginComponent />
              </Tab>
              <Tab
                key="signup"
                title="Sign up"
                className="font-titles text-white w-full flex flex-col items-center max-w-[400px]"
              >
                <SignupComponent />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[50%] flex-col bg-[#1c1c1c] rounded-r-lg justify-end items-center">
        {selected === "login" ? (
          <>
            <div className="flex flex-col items-center gap-12 mb-10">
              <h2 className="font-titles text-4xl w-[60%] text-center">
                Welcome back to Quickbet Movies!
              </h2>
              <h4 className="font-aksara w-[70%] text-center text-xl">
                🍿Ready to dive into the world of unlimited entertainment? Enter
                your credentials and let the cinematic adventure begin!
              </h4>
            </div>
            <div className=" overflow-hidden flex flex-col items-center">
              <img
                src="/LOGIN.JPG"
                alt="login_logo"
                className="w-[80%] h-[full]"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-12 mb-10">
              <h2 className="font-titles text-4xl w-[60%] text-center">
                Welcome to Quickbet Movies!
              </h2>
              <h4 className="font-aksara w-[70%] text-center text-xl">
                🎬 Ready to unlock a universe of cinematic delights? Sign up now
                and start your journey with us!
              </h4>
            </div>
            <div className=" overflow-hidden flex flex-col items-center">
              <img
                src="/REGISTER.JPG"
                alt="login_logo"
                className="w-[80%] h-[full]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
