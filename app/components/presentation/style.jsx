"use client";
import { styled } from "styled-components";

export const Container = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap"); */
  min-height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  line-height: 2em;
  background-image: url("/assets/Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 47%;
  padding-right: 10px;
  gap: 20px;

  .icon {
    color: orange;
  }
`;

export const TextPresentation = styled.div`
  font-size: 48px;
  line-height: 1em;
  font-family: "Baloo 2", cursive;
  font-weight: 900;
`;
export const Paragrapho = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  font-size: 1em;
  margin-top: 66px;
`;
export const ListText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TextImage = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
