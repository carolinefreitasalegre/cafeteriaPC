"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #403937;

  .flexrebel {
    margin-bottom: 14.5em;
  }
`;

export const Title = styled.div`
  font-family: Baloo 2;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;
export const FlexContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  .icon {
    color: orange;
    margin-right: 1em;
  }
`;

export const Address = styled.div`
  background-color: #f3f2f2;
  padding: 40px;
  height: 372px;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  margin-top: 32px;
  input {
    height: 42px;
    border: 1px solid #e6e5e5;
    outline: none;
    padding: 5px;
    background: #ededed;
    color: #403937;
  }
  .input200 {
    width: 200px;
  }
  .input560 {
    width: 560px;
  }
`;
export const Payment = styled.div`
  background-color: #f3f2f2;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 6px;
  padding: 40px;
  height: 207px;
`;
export const Subtitle = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
export const Text = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
export const Paymentmethod = styled.div`
  display: flex;
  background: #bf9b753e;
  padding: 16px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  transition: 0.5s all;
  border-radius: 6px;
  .icon {
    color: orange;
    transition: 0.5s all;
  }

  &:hover {
    background-color: #bf9b75ca;
    color: white;
    .icon {
      color: white;
    }
  }
`;
export const Options = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  display: flex;
  font-family: Roboto;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  line-height: 160%;
  text-transform: uppercase;
  margin-top: 24px;
`;
export const FlexContentRight = styled.div`
  height: 498px;
  width: 448px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  padding: 40px;
  align-items: flex-start;
  gap: 24px;
  border-radius: 6px 44px;
  background: #f3f2f2;
  min-height: 200px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const Order = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  justify-content: space-between;
  width: 368px;
  height: 80px;
`;
export const OrderName = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const AddRemove = styled.div`
  display: flex;
  gap: 10px;

  p {
    display: flex;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    background: #e6e5e5;
    cursor: pointer;
    font-size: 12px;
  }

  icon {
    color: orange;
  }
`;

export const Price = styled.p`
  color: #574f4d;
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const ColumnConfirm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  a {
    width: 100%;
  }
`;
export const LineConfirm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-top: 24px;
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  background: #bf9b75;
  cursor: pointer;
  border: none;
  color: var(--base-white, #efece8);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  transition: 0.5s;
  width: 100%;

  &:hover {
    background-color: #bf9b758e;
  }
`;
