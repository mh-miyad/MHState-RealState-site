"use client";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CardComp = () => {
  return (
    <>
      <div className="max-w-md sm:max-w-xl drop-shadow-xl">
        <Card>
          <div className="flex gap-4 sm:gap-5 items-center">
            <Image
              src={`/images/card-image.png`}
              alt="Card Image "
              width={128}
              height={128}
              quality={100}
              className=" sm:w-32"
            />
            <div>
              <p className="font-bold text-xs sm:text-lg/tight text-slate-700">
                209B Allen Jaja Street, Lagos Junction.
              </p>
              <div className="flex  justify-between my-3 text-gray-500">
                <p className="text-xs sm:text-base">10 Bedroom </p>
                <p className="text-xs sm:text-base">150M </p>
                <p className="text-xs sm:text-base">3 Garage</p>
              </div>
              <div className="flex  justify-between items-center  ">
                <p className="text-sm ">Posted by Simeon</p>
                <Button
                  size={"xs"}
                  color="failure"
                  className=" text-white rounded-lg drop-shadow-2xl  shadow-red-500/20 shadow-xl font-bold"
                >
                  $ 4550.5
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardComp;
