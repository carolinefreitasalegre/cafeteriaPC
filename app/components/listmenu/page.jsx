"use client";
import React from "react";
import {
  Container,
  Card,
  CardMedia,
  Title,
  Subtitle,
  Description,
  Price,
  Button,
} from "./styled";
import list from "../../../public/json/list.json";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Menu() {
  {
    list.map((item) => <p>{item.price}</p>);
  }

  return (
    <Container>
      <Card key={Math.random()}>
        {list.map((item) => (
          <CardMedia key={Math.random()}>
            <Image
              src={item.imagem}
              alt="Imagem Card"
              width={286}
              height={200}
            />
            <Title>{item.subtitle}</Title>

            <Subtitle>{item.title}</Subtitle>
            <Description>{item.description}</Description>
            <Price>
              R${item.price}
              <Button> + </Button> 1 <Button> - </Button>
              {/* <BsFillCartPlusFill
                style={{ color: "orange", cursor: "pointer" }}
              /> */}
            </Price>
          </CardMedia>
        ))}
      </Card>
    </Container>
  );
}
