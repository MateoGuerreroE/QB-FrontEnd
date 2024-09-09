"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import React from "react";

export default function AuthSection() {
  return (
    <section className=" bg-black/50 w-full h-full absolute z-[10]">
      <div className="w-full h-full flex flex-col pt-6 items-center">
        <Card className="w-[80%] h-[80vh] bg-black/20 backdrop-filter backdrop-blur-xl rounded-xl border-white/20 border-1 p-3">
          <CardBody className="flex flex-col items-center">
            <div className="w-6 self-start pb-5">
              <img src="/icons/back.svg" alt="back_icon" />
            </div>
            <div className="w-[80%] h-full flex flex-col">
              <div id="switch flex items-center">
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
                  className="bg-black rounded-xl"
                >
                  <Tab
                    key="signup"
                    title="Sign up"
                    className="font-helveticabold text-white"
                  ></Tab>
                  <Tab
                    key="login"
                    title="Log In"
                    className="font-helveticabold"
                  ></Tab>
                </Tabs>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
