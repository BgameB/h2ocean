import clsx from "clsx";

interface Props {
  variant?: "primary" | "secondary" | "tertiary" | "icon";
  children?: React.ReactNode;
  className?: string;
  skornenn?: boolean;
  icon?: any;
}

export const Button = ({
  variant = "primary",
  skornenn = false,
  children,
  className,
  icon,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "primary": // DEFAULT
      variantStyles = !skornenn
        ? "border border-2 border-white text-white hover:text-gold hover:border-gold rounded backdrop-blur-sm "
        : "border border-2 border-white text-white hover:text-cyan hover:border-cyan rounded backdrop-blur-sm ";
      break;
    case "secondary":
      variantStyles = !skornenn
        ? "border border-2 border-gold text-gold hover:text-white hover:bg-gold rounded backdrop-blur-sm "
        : "border border-2 border-cyan text-cyan hover:text-white hover:bg-cyan rounded backdrop-blur-sm ";
      break;
    case "tertiary":
      variantStyles = !skornenn
        ? "text-white bg-gold hover:bg-lightgold rounded"
        : "text-white bg-blue hover:bg-cyan rounded";
      break;
    case "icon":
      variantStyles = "text-white rounded-full bg-white";
  }

  return (
    <>
      <button
        type="button"
        className={clsx(className, variantStyles, "animate font-bold")}
      >
        {children}
      </button>
    </>
  );
};
