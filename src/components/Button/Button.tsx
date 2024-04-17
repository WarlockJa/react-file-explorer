import React from "react";

interface IButtonProps {
  label: string;
}

export default function Button(props: IButtonProps) {
  return <button>{props.label}</button>;
}
