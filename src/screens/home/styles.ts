import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;

  @media (min-width: 600px) and (max-width: 1199px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0px;
  }
`

export const Carousel = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 12px;
  opacity: 0.7;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
