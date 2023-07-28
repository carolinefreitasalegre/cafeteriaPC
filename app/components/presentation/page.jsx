"use client";
import React from "react";
import Image from "next/image";
import LogoImagem from "../../../public/assets/logo.png";
import {
  Container,
  Content,
  TextPresentation,
  Paragrapho,
  List,
  ListText,
  TextImage,
} from "./style";
import {
  BsFillCartCheckFill,
  BsFillClockFill,
  BsBoxSeam,
  BsFillCupHotFill,
} from "react-icons/bs";

export default function Presentation() {
  return (
    <Container>
      <Content>
        <TextPresentation>
          Encontre o café perfeito para o momento perfeito
        </TextPresentation>
        <Paragrapho>
          Com o Plus Coffee você receve seu café onde estiver, a qualquer
          momento
        </Paragrapho>
        <List>
          <ListText>
            <TextImage>
              <BsFillCartCheckFill className="icon"/> Compra simples e segura
            </TextImage>
            <TextImage>
              <BsFillClockFill  className="icon"/>
              Entrega rápida e rastreada
            </TextImage>
          </ListText>
          <ListText>
            <TextImage>
              <BsBoxSeam  className="icon"/>
              Embalagem mantém o café quentinho
            </TextImage>
            <TextImage>
              <BsFillCupHotFill  className="icon"/>O café chega fresquinho até você
            </TextImage>
          </ListText>
        </List>
      </Content>
      <Image src={LogoImagem} alt="logomarca" />
    </Container>
  );
}
