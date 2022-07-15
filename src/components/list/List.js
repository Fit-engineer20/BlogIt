import React from 'react'
import styled from "styled-components";
import Button from "../button/Button";
import {useHistory, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const List = ({title,content,setArray}) => {

    const history = useHistory();

    const ListItem = styled.div`
        width:100%;
        height: 4rem;
        padding:10px;
        padding-left:30px;
        padding-right:30px;
        display:flex;
        justify-content:space-between;
        align-items:center; 
        border:2px solid black;
        margin-bottom:30px;
        border-radius:8px;
        box-shadow: 2px 5px 5px grey;
        background-color:#ffffff;
    `
    const Title = styled.div`
        font-size:26px;
    `
    const handle = (e) => {
        const name = e.target.name;
        history.push(`/${name}`,{
            content,
        });
    }
  return (
    <ListItem>
        <Title>{title}</Title>
        <Button name={title} onClick={handle}>View&nbsp;&nbsp;<FontAwesomeIcon icon={faUpRightFromSquare} /></Button>
    </ListItem>
  )
}

export default withRouter(List);