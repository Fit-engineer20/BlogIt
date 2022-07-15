import React from 'react'
import styled from "styled-components";
import Button from "../button/Button";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
   
    const history = useHistory();

    const handleclick = () => {
        history.push('/newpost');
    }

    const Main = styled.div`
        width:94%;
        padding:1.5%;
        padding-left:3%;
        padding-right:3%;
        height:4rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background: rgb(85, 41, 220);
    `
    const Logo = styled.div`
        font-size:36px;
        font-weight:600;
        color:white;
    `
    
  return (
    <Main>
        <Logo>BlogIt</Logo>
        <Button onClick={handleclick}>New Post&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus} /></Button>
    </Main>
  )
}

export default Navbar