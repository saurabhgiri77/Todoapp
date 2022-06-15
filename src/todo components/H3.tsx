import { FC, HTMLAttributes, memo } from "react";
import cn from "classnames";

type Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={cn("font-semibold text-xl sm:py-4 py-4 text-white", className)}
    >
      {children}
    </h3>
  );
};

H3.defaultProps = {};

export default memo(H3);
