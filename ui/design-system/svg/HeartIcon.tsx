interface Props {
  filled?: boolean;
  className?: string;
}

export const HeartIcon = ({ filled = true, className }: Props) => {
  const handleFavorie = () => {
    filled = !filled;
  };

  return !filled ? (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame 2959">
        <g id="Union">
          <mask id="path-1-inside-1_432_5249" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.93068 2.15136C-0.643563 4.75421 -0.643559 8.97426 1.93068 11.5771L2.65566 12.3101L2.65558 12.3102L12.0403 21.7992L12.0403 21.7991L12.0404 21.7992L21.3626 12.3735L21.3625 12.3734L22.0563 11.6719C24.6478 9.0516 24.6478 4.80324 22.0563 2.18293C19.4648 -0.437374 15.2631 -0.437374 12.6716 2.18293L11.9778 2.88439L11.2528 2.15136C8.6786 -0.451493 4.50492 -0.451494 1.93068 2.15136Z"
            />
          </mask>
          <path
            d="M1.93068 11.5771L2.99719 10.5223H2.99719L1.93068 11.5771ZM1.93068 2.15136L2.99719 3.20614L1.93068 2.15136ZM2.65566 12.3101L3.72113 13.366L4.76639 12.3112L3.72217 11.2554L2.65566 12.3101ZM2.65558 12.3102L1.59012 11.2544L0.544859 12.3092L1.58908 13.365L2.65558 12.3102ZM12.0403 21.7992L10.9738 22.854L12.0472 23.9394L13.1136 22.847L12.0403 21.7992ZM12.0403 21.7991L13.1115 20.749L12.038 19.6541L10.967 20.7513L12.0403 21.7991ZM12.0404 21.7992L10.9693 22.8493L12.0358 23.9371L13.1069 22.854L12.0404 21.7992ZM21.3626 12.3735L22.4291 13.4282L23.4729 12.3729L22.4285 11.3181L21.3626 12.3735ZM21.3625 12.3734L20.296 11.3186L19.2522 12.3739L20.2966 13.4287L21.3625 12.3734ZM22.0563 11.6719L23.1228 12.7267H23.1228L22.0563 11.6719ZM22.0563 2.18293L23.1228 1.12815V1.12815L22.0563 2.18293ZM12.6716 2.18293L11.6051 1.12815V1.12815L12.6716 2.18293ZM11.9778 2.88439L10.9113 3.93918L11.9778 5.01753L13.0443 3.93918L11.9778 2.88439ZM11.2528 2.15136L12.3193 1.09657V1.09657L11.2528 2.15136ZM2.99719 10.5223C1.00094 8.50389 1.00094 5.22457 2.99719 3.20614L0.864176 1.09657C-2.28806 4.28384 -2.28806 9.44463 0.86418 12.6319L2.99719 10.5223ZM3.72217 11.2554L2.99719 10.5223L0.864179 12.6319L1.58916 13.3649L3.72217 11.2554ZM1.5902 11.2543L1.59012 11.2544L3.72105 13.3661L3.72113 13.366L1.5902 11.2543ZM1.58908 13.365L10.9738 22.854L13.1068 20.7444L3.72209 11.2554L1.58908 13.365ZM13.1136 22.847L13.1137 22.8469L10.967 20.7513L10.9669 20.7514L13.1136 22.847ZM13.1116 20.7491L13.1115 20.749L10.9692 22.8492L10.9693 22.8493L13.1116 20.7491ZM20.2961 11.3187L10.9739 20.7444L13.1069 22.854L22.4291 13.4282L20.2961 11.3187ZM20.2966 13.4287L20.2967 13.4288L22.4285 11.3181L22.4284 11.318L20.2966 13.4287ZM22.429 13.4282L23.1228 12.7267L20.9898 10.6171L20.296 11.3186L22.429 13.4282ZM23.1228 12.7267C26.2923 9.52196 26.2923 4.33287 23.1228 1.12815L20.9898 3.23772C23.0033 5.27361 23.0033 8.58123 20.9898 10.6171L23.1228 12.7267ZM23.1228 1.12815C19.9442 -2.08578 14.7837 -2.08578 11.6051 1.12815L13.7381 3.23772C15.7425 1.21103 18.9853 1.21103 20.9898 3.23772L23.1228 1.12815ZM11.6051 1.12815L10.9113 1.82961L13.0443 3.93918L13.7381 3.23772L11.6051 1.12815ZM10.1863 3.20614L10.9113 3.93918L13.0443 1.82961L12.3193 1.09657L10.1863 3.20614ZM2.99719 3.20614C4.98433 1.19691 8.19919 1.19691 10.1863 3.20614L12.3193 1.09657C9.15801 -2.0999 4.02552 -2.0999 0.864176 1.09657L2.99719 3.20614Z"
            fill="#505050"
            mask="url(#path-1-inside-1_432_5249)"
          />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.93068 3.15209C-0.643562 5.75494 -0.643559 9.97499 1.93068 12.5778L2.65566 13.3109L2.65558 13.311L12.0403 22.7999L12.0403 22.7999L12.0404 22.7999L21.3626 13.3742L21.3625 13.3741L22.0563 12.6726C24.6478 10.0523 24.6478 5.80397 22.0563 3.18367C19.4648 0.563359 15.2631 0.563358 12.6716 3.18367L11.9778 3.88513L11.2528 3.15209C8.6786 0.549239 4.50492 0.549238 1.93068 3.15209Z"
        fill="#D74B4B"
      />
    </svg>
  );
};
