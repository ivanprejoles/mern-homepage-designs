"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

interface UsablePinInterface {
  title?: string,
  description?: string,
  image?: string,
  background?: string,
}

const UsablePin = ({
  title,
  description,
  image,
  background
}: UsablePinInterface) => {
  return (
    <div className="h-[20rem] flex items-center justify-center gap-2">
      <PinContainer
        href={image}
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] gap-2">
          <h3 className="max-w-xs !m-0 font-bold text-xl  text-transparent bg-clip-text text-neutral-800 bg-gradient-to-b from-red-500 to-purple-600 bg-opacity-50">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0  font-normal">
            <p className="font-normal text-base text-transparent bg-clip-text text-neutral-800 bg-gradient-to-b from-red-300 to-purple-400 bg-opacity-50">
              {description}
            </p>
          </div>
          <div className="w-full flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-black via-violet-600 to-blue-black relative object-cover">
            <img className="w-full scale-150 opacity-95  h-full mx-auto left-0 top-0 absolute" src={background} alt="background" />
            <img className="h-full opacity-85 mx-auto" src={image}  alt='guide' />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default UsablePin
 