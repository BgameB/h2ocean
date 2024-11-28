import clsx from "clsx";

interface Props {
  direction?: "right" | "left";
  className?: string;
  color?: "black" | "white" | "aqua";
}

export const ArrowIcon = ({
  direction = "right",
  className,
  color = "black",
}: Props) => {
  let colorStyle = "";

  switch (color) {
    case "black": // DEFAULT
      colorStyle = "#000000";
      break;
    case "white":
      colorStyle = "#FFFFFF";
      break;
    case "aqua":
      colorStyle = "#33CEF1";
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={clsx(direction === "right" && "rotate-180", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9194 20.0576L12.6302 20.7612L17.6302 25.7106L19.0372 24.2892L15.7653 21.0505H26.667V19.0505H15.7308L19.0443 15.7035L17.623 14.2964L12.623 19.3469L11.9194 20.0576Z"
        fill={colorStyle}
      />
    </svg>
  );
};
