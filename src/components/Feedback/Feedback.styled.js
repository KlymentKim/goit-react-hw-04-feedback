import styled from "styled-components";

export const BtnGroup =styled.div`
    display: flex;
    justify-content: center;
    gap: 3px;
    margin-top: 30px;
    margin-bottom: 30px;
`;
export const Btn = styled.button`

    height: 35px;
    width: 90px;
    background-color: #0093E9;
    background-image: linear-gradient(301deg, #0093E9 11%, #80D0C7 50%, #ffffff 100%);
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transform: scale(0.9);

    :hover, :focus {
        color: rgb(242, 247, 247);
        scale: 1.2;
        background-color: #303f9f;
    }
`;


