"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  backgroundFill = "black",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundFill?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center",
        containerClassName
      )}
      style={{
        backgroundColor: backgroundFill,
        backgroundImage: 'url("/background.png")',
      }}
    >
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
