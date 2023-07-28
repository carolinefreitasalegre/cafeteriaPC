"use client";
import React from "react";
import {
  Container,
  FlexContent,
  Title,
  Address,
  Payment,
  Subtitle,
  Text,
  Paymentmethod,
  Form,
  Options,
  ConfirmOrder,
  Order,
  AddRemove,
  FlexContentRight,
  OrderName,
  Price,
  ColumnConfirm,
  LineConfirm,
  Button,
} from "./styled";
import Header from "../components/header/page";
import Image from "next/image";
import Line from "../../public/assets/divider.png";
import {
  BsPinMap,
  BsCurrencyDollar,
  BsCreditCard2Back,
  BsBank,
  BsCashCoin,
  BsTrash,
} from "react-icons/bs";
import Link from "next/link";

export default function Car() {
  return (
    <>
      <Header />
      <Container>
        <FlexContent>
          <Title>Complete seu pedido</Title>
          <Address>
            <Subtitle>
              <BsPinMap className="icon" />
              Endereço de Entrega
            </Subtitle>
            <Text>Informe o endereço onde deseja receber seu pedido</Text>
            <Form>
              <input placeholder="CEP" className="input200" />
              <input placeholder="Rua" className="input560" />
              <input placeholder="Numero" className="input200" />
              <input placeholder="Complemento" className="input200" />
              <input placeholder="Bairro" className="input200" />
              <input placeholder="Cidade" className="input200" />
            </Form>
          </Address>
          <Payment>
            <Subtitle>
              <BsCurrencyDollar className="icon" /> Pagamento
            </Subtitle>
            <Text>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
            <Options>
              <Paymentmethod>
                <BsCreditCard2Back className="icon" /> CARTÃO DE CRÉDITO
              </Paymentmethod>
              <Paymentmethod>
                <BsBank className="icon" /> CARTÃO DE DÉBITO
              </Paymentmethod>
              <Paymentmethod>
                <BsCashCoin className="icon" />
                DINHEIRO
              </Paymentmethod>
            </Options>
          </Payment>
        </FlexContent>
        <FlexContent className="flexrebel">
          <FlexContentRight>
            <Title>Cafés selecionados</Title>
            <ConfirmOrder>
              <Order>
                <OrderName>
                  <Subtitle>Expresso radicional</Subtitle>
                  <AddRemove>
                    <p>- 1 + </p>
                    <p>
                      <BsTrash className="icon" /> REMOVER
                    </p>
                  </AddRemove>
                </OrderName>

                <Price>R$9,90</Price>
              </Order>
              <Image
                src={Line}
                alrt="divisor"
                style={{
                  strokeWidth: "1px",
                  color: "#E6E5E5",
                }}
              />
              <ColumnConfirm>
                <LineConfirm>
                  <Text>Total de itens</Text>
                  <Subtitle>R$ 29,70</Subtitle>
                </LineConfirm>
                <LineConfirm>
                  <Text>Entrega</Text>
                  <Subtitle>R$3,50</Subtitle>
                </LineConfirm>
                <LineConfirm>
                  <h3>Total</h3>
                  <h3>R$ 33,20</h3>
                </LineConfirm>
                <Link href="car/delivery">
                  <Button>CONFIRMAR PEDIDO</Button>
                </Link>
              </ColumnConfirm>
            </ConfirmOrder>
          </FlexContentRight>
        </FlexContent>
      </Container>
    </>
  );
}
