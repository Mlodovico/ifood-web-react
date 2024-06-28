import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:  60%;
    border-radius: 12px;
    background-color: #ea1d2c;

    @media (min-width: 600px) and (max-width: 1199px) {
        width: 100%;
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
    border-radius: 10px;
    border: none;
    font-weight: bold;

    &:hover {
        opacity: 0.8;
        transition: 0.3s;
        cursor: pointer;
    }
`;