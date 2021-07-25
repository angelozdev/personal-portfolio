import { SVGAttributes } from "react";

function Logo(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width="31"
      height="21"
      viewBox="0 0 31 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0h7.921l-1 1H1v6.921l-1 1V0h1zm29 20h-6.881l-1 1H31v-8.881l-1 1V20zM8.396 13.678L7.64 16H5.333L8.848 5.818h2.774L15.132 16h-2.307l-.755-2.322H8.396zm1.8-5.533l-1.254 3.853h2.586l-1.253-3.853h-.08zM24.043 16h-7.796v-1.278l5.081-7.129h-5.09V5.818h7.795v1.278l-5.086 7.13h5.096V16z"
        fill="#1A1A1A"
        {...props}
      ></path>
    </svg>
  );
}

export default Logo;
