import React from "react";
import Load from "react-loader-spinner";

export default function Loader() {
  return (
    <Load
      className="Loader"
      type="Audio"
      color="#ff8c00"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
