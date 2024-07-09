import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  border-radius: 12px;
  margin-top: 20px;
  background-color: #ea1d2c;

  @media (min-width: 600px) and (max-width: 1199px) {
    margin-top: 0;
    border-radius: 0px;
  }
`;

export const ConfigOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme};
  color: ${(props) => props.theme};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 48px;
  border: none;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const Subject = styled.p`
  margin: 10px;
  color: ${(props) => props.theme};
  font-weight: bold;
`;

export const ModalLoginTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ModalLoginDescrition = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ModalLoginInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ModalLoginButton = styled.button`
  width: 80%;
  height: 50px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  background-color: red;
  border: none;
  color: #ffffff;
`;

export const ModalLoginInputText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
`;

export const ModalLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
