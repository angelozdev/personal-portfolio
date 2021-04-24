import * as React from "react";

export type SVGProps = React.SVGAttributes<HTMLOrSVGElement>;

export type Technology = {
  title: string;
  Icon: (props: SVGProps) => JSX.Element;
  description: string;
  color: string;
  href: string;
};

export interface ComponentWithChildren {
  children: React.ReactNode;
}
