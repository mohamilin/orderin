import Header from "parts/Header";
import React from "react";

export default function LandingPage(props) {
  console.log("props landing", props);
  return (
    <>
      <Header>{props}</Header>
    </>
  );
}
