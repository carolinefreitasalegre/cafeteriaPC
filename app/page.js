import React from "react";
import Header from "./components/header/page";
import Presentation from "./components/presentation/page";
import Menu from "./components/listmenu/page";

export default function page() {
  return (
    <>
      <Header />
      <Presentation />
      <Menu />
    </>
  );
}
