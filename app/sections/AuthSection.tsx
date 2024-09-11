import { Card, CardBody } from "@nextui-org/react";

import React from "react";
import AuthComponent from "../components/AuthComponent";

type ComponentProps = {
  isVisible: boolean;
};

export default function AuthSection({ isVisible }: ComponentProps) {
  return (
    <section
      className={` bg-black/50 w-full h-full top-0 left-0 absolute z-[10] ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="w-full h-full flex flex-col pt-24 items-center">
        <Card className="w-[80%] h-[80vh] bg-black/20 backdrop-filter max-h-[1000px] backdrop-blur-xl rounded-xl border-white/20 border-1 p-3 lg:p-1">
          <CardBody className="flex flex-col items-center">
            {isVisible && <AuthComponent />}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
