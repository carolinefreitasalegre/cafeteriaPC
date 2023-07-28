"use client";

import React from "react";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Details,
  Information,
} from "./styled";
import Header from "../../components/header/page";
import { BsPinMap, BsFillClockFill, BsCurrencyDollar } from "react-icons/bs";
import Image from "next/image";
import LogoImagem from "../../../public/assets/entrega.png";

export default function Delivery() {
  return (
    <>
      <Header />
      <Container>
        <Details>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
          <Content>
            <Information>
              <BsPinMap className="icon" /> Endereço de entrega:
              <strong>Rua Fulan de Tal</strong>
            </Information>
            <Information>
              <BsFillClockFill className="icon" />
              Previsao de entrega: <strong>20 min - 30 min</strong>
            </Information>
            <Information>
              <BsCurrencyDollar className="icon" />
              Forma de pagamento: <strong>Cartão de Crédito</strong>
            </Information>
          </Content>
        </Details>
        <Image src={LogoImagem} alt="logomarca" />
      </Container>
    </>
  );
}
