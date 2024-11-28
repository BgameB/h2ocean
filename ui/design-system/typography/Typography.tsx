import { clsx } from "clsx";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  color?: "white" | "black" | "gray" | "lightgray" | "gold";
  font?: "outfit" | "quicksand" | "quattrocento";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "p",
  color = "black",
  font = "quicksand",
  className,
  children,
}: Props) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `font-${font} font-light text-[80px] tracking-widest`,
            className,
            `text-${color}`
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={clsx(
            `font-${font} font-light text-[40px] tracking-widest`,
            className,
            `text-${color}`
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={clsx(
            `font-${font} font-normal text-[30px] tracking-widest`,
            className,
            `text-${color}`
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={clsx(
            `font-${font} text-[20px] font-normal tracking-widest`,
            className,
            `text-${color}`
          )}
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p
          className={clsx(
            `text-[16px]`,
            className,
            `text-${color} font-${font}`
          )}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span className={clsx(className, `text-${color}`)}>{children}</span>
      );
    default:
      return null;
  }
};
