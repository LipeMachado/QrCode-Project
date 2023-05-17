import styled from 'styled-components';

export const ContainerBoxSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BoxDiv = styled.div`
    width: 300px;
    height: 450px;
    text-align: center;
    border-radius: 20px;
    background-color: hsl(0, 0%, 100%);
    font-family: 'Outfit', sans-serif;
`;

export const ContainerImageDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

export const Image = styled.img`
    width: 260px;
    border-radius: 15px;
`;


export const ContainerTitleDiv = styled.div`
    display: inline-block;
    max-width: 270px;
    margin-top: 20px;
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.4px;
`;


export const ContainerParagraphDiv = styled.div`
    display: inline-block;
    max-width: 260px;
    margin-top: 10px;
`;

export const Subtitle = styled.h2`
    color: hsl(220, 15%, 55%);
    font-weight: 400;
    font-size: 15px;
`;