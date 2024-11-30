import clsx from "clsx";

interface Props {
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = "primary", children, className }: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "primary": // DEFAULT
      variantStyles = "bg-green";
      break;
    case "secondary":
      variantStyles = "bg-red";
      break;
    case "tertiary":
      variantStyles = "bg-tertiary";
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          className,
          variantStyles,
          "animate font-bold text-[#0A0C14]"
        )}
      >
        {children}
      </button>
    </>
  );
};
