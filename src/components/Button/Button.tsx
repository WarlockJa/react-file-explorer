import React from "react";
import "./Button.css";

interface IButtonProps {
  label: string;
}

export default function Button(props: IButtonProps) {
  return <button>{props.label}</button>;
}
