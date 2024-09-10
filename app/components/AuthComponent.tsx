"use client";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

export default function AuthComponent() {
  const [selected, setSelected] = useState<string>("signup");
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div id="switch" className="w-[full]">
        <Tabs
          classNames={{
            base: "h-10",
            tabList: "p-0 h-10",
            tab: "w-full h-full",
          }}
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
          fullWidth
          aria-label="authOptions"
          color="primary"
          variant="light"
          className="bg-[#262626] rounded-xl"
        >
          {/* TODO DECOMPOSE COMPONENTS LOGIN/SIGNUP TO SECTORIZE CONTROLLED FORM */}
          <Tab key="signup" title="Sign up" className="font-titles text-white">
            <div className="flex flex-col items-center mt-10">
              <h2 className="text-4xl text-center">
                Welcome to Quickbet Movies!
              </h2>
              <div className="flex flex-col w-full pt-10 gap-3">
                <p className="font-aksara text-center">
                  Ready to unlock a universe of cinematic delights? 🎬
                </p>
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  radius="sm"
                  variant="flat"
                  classNames={{
                    inputWrapper: "rounded-b-none",
                    input:
                      " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                  }}
                />
                <Input
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  radius="sm"
                  variant="flat"
                  classNames={{
                    inputWrapper: "rounded-b-none",
                    input:
                      " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                  }}
                />
                <Input
                  type="password"
                  label="Repeat Password"
                  labelPlacement="outside"
                  radius="sm"
                  variant="flat"
                  classNames={{
                    inputWrapper: "rounded-b-none",
                    input:
                      " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                  }}
                />
                <Button color="primary" className="text-black mt-5" radius="sm">
                  Register with your Email
                </Button>
              </div>
            </div>
          </Tab>
          <Tab key="login" title="Log In" className="font-titles">
            <div className="flex flex-col items-center mt-10">
              <h2 className="text-4xl text-center">
                Welcome back to Quickbet Movies!
              </h2>
              <div className="flex flex-col w-full pt-10 gap-3">
                <p className="font-aksara text-center">
                  We love having you back 🍿
                </p>
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  radius="sm"
                  variant="flat"
                  classNames={{
                    inputWrapper: "rounded-b-none",
                    input:
                      " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                  }}
                />
                <Input
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  radius="sm"
                  variant="flat"
                  classNames={{
                    inputWrapper: "rounded-b-none",
                    input:
                      " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
                  }}
                />
                <Button color="primary" className="text-black mt-5" radius="sm">
                  Continue
                </Button>
              </div>
            </div>
            <div className="mt-20 flex justify-center">
              <p className="font-aksara text-sm text-center w-[80%]">
                For any questions, please hesitate reaching out.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
