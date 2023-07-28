"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/car.png";
import { Container } from "./styled";
import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <Image src={Logo} alt="Logomarca" />
      </Link>
      <Link href={"car"}>
        <BsFillCartFill size={25} style={{ cursor: "pointer" }} />
        <span className="addCar">5</span>
      </Link>
    </Container>
  );
}
