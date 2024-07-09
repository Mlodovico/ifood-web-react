import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40%;
    width: 28rem;
    padding: 20px;
    border-radius: 12px;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
`