"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const CardMedia = styled.div`
  display: flex;
  box-shadow: 2px 2px 10px grey;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
  width: 256px;
  height: 310px;
  flex-shrink: 0;
  border-radius: 6px 36px;
  background: #fff;

  img {
    width: 120px;
    height: 120px;
    margin-top: -5em;
  }
`;
export const Title = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #f1e9c9;
  color: #c47f17;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;
export const Subtitle = styled.div`
  color: #403937;
  text-align: center;
  font-family: "Baloo 2", cursive;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  width: 216px;
`;
export const Description = styled.div`
  color: var(--base-label, #8d8686);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  width: 216px;
`;
export const Price = styled.div`
  width: 10em;
  font-family: Roboto;
  font-size: 14px;
  color: #574f4d;
  font-family: Baloo 2;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  gap: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px grey;
  border-radius: 6px 36px;
  margin-top: 1em;

  p {
    font-size: 10px;
    box-shadow: 2px 2px 10px grey;
    padding: 0 10px;
    background: #f1e9c9;
    border-radius: 5px;
    margin-right: 1em;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: orange;
  border: none;
  border-radius: 5px;
  background-color: #80808019;

  font-size: 1em;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: grey;
    color: white;
  }
`;
