'use client';
import * as Fa6 from "react-icons/fa6";
import * as Fa from "react-icons/fa";
import * as Hi from "react-icons/hi";
import * as Gi from "react-icons/gi";
import * as Hi2 from "react-icons/hi2";
import * as Bs from "react-icons/bs";
import * as Im from "react-icons/im";
import * as Md from "react-icons/md";
import * as Ci from "react-icons/ci";
import * as Si from "react-icons/si";

export const RI = {
  ...Fa6,
  ...Hi,
  ...Gi,
  ...Hi2,
  ...Bs,
  ...Fa,
  ...Im,
  ...Md,
  ...Ci,
  ...Si
};
const ReactIcons = ({ name, className }) => {
  const Icon = RI[name];
  return <Icon className={className} />;
};

export default ReactIcons;
