import React, { Component } from "react";

const DownIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItmes: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-45px)",
      }}
    >
      <div
        style={{
          maxWidth: "30px",
        }}
      >
        <img src={props.icon} alt="down" />
      </div>
    </div>
  );
};

export default DownIcon;
