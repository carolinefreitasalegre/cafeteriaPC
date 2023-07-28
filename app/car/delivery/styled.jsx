import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #403937;
  justify-content: space-between;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #403937;
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border: 1px solid;
  border-image: linear-gradient(
      to bottom,
      rgba(219, 172, 44, 1),
      rgba(128, 71, 248, 1)
    )
    1;
  border-radius: 6px 36px;

  .icon {
    width: 25px;
    height: 25px;
    box-shadow: 2px 2px 10 grey;
    border: 1px solid transparent;
    background-color: #80808038;
    border-radius: 50%;
    color: orange;
  }
`;
export const Information = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Title = styled.p`
  color: #c47f17;
  font-family: "Baloo 2", cursive;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`;

export const Subtitle = styled.p`
  font-family: Roboto;
  margin-bottom: 2em;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
