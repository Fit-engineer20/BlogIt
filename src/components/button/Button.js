import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    font-size:20px; 
    font-weight: 600;
    padding: 0.5em 1.5em;
    color: white;
    background: black;
    border-radius: 4px;
    border: 2px solid black;
    cursor: pointer;
    transition: all 0.2s;
    &:focus,
    &:hover {
        box-shadow: 0 4px 12px 0 rgb(0 0 0 / 30%);
        highlight: none;
        outline: none;
    }
`
const Inner = styled.div`
    width:100%;
    display:flex;
    justify-contet:center;
    align-items:center;
`

const Button = (props) => (
    <ButtonComponent {...props}>
        <Inner>
            {props.children}
        </Inner>
    </ButtonComponent>
);

export default Button;
