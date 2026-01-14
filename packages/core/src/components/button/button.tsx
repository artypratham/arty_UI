import * as React from "react";
import { cn } from "@arty-ui/utils";
import type { BUttonProps } from "./button.types";
import "./button.css";

export const Button = React.forwardRef<
  HTMLButtonElement,
  BUttonProps
>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    className,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      className={cn(
        "arty-btn",
        `arty-btn--${variant}`,
        `arty-btn--${size}`,
        className
      )}
      {...rest}
    />
  );
});

Button.displayName = "Button";
