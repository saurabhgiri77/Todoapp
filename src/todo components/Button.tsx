import { FC, memo } from "react";
import { buttonProps } from "../types/types";
import cn from "classnames";

const Button: FC<buttonProps> = (props) => {
  let theme = "bg-yellow-500 rounded-md text-white";

  if (props.theme === "secondary") {
    theme = "bg-white rounded-md text-black border border-gray-300";
  }

  if (props.theme === "tertiory") {
    theme = "bg-yellow-500 rounded-full text-white py-2 px-5";
  }

  return (
    <button
      onClick={props.onClick}
      className={cn("px-4 py-2 " + theme, props.className)}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {};

export default memo(Button);
