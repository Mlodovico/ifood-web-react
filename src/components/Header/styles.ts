import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width:  60%;
    border-radius: 12px;
    margin-top: 20px;
    background-color: #ea1d2c;

    @media (min-width: 600px) and (max-width: 1199px) {
        width: 100%;
        margin-top: 0;
        border-radius: 0px;
    }
`

export const ConfigOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SubjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    background-color: ${props => props.theme};
    color: ${props => props.theme};
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
    color: ${props => props.theme};
    font-weight: bold;
`

export const ModalLoginTitle = styled.p`
    font-size: 1.5rem;
    color: #000000;
    font-weight: bold;
    margin-bottom: 1rem;
`
export const ModalLoginDescrition = styled.p`
    font-size: 1rem;
    color: #000000;
    margin-bottom: 1rem;
`
export const ModalLoginInput = styled.input`
    width: 90%;
    height: 40px;
    border-radius: 12px;
    margin: 20px;
`
export const ModalLoginButton = styled.button``