import React from 'react'
import styled from "styled-components";
import Button from "../components/button/Button";
import Data from "../constants/Data";
import {useHistory} from "react-router-dom";

    const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
    const Title = styled.div`
    font-size:56px;
    font-weight:500;
    margin-top:50px;
    margin-bottom:50px;
    color:#ffffff;
    `
    const Description = styled.div`
    width:60%;
    padding:2%;
    padding-left:3%;
    padding-right:3%;
    background-color:#ffffff;
    font-size:30px;
    border-radius:10px;
    `
    const Buttondiv = styled.div`
    display:flex;
    width:60%;
    justify-content:space-between;
    align-items:center;
    margin-top:30px;
    `

    // const content = {
    //     title :" hemlllo",
    //     content :  " hhhhhhhhhhhhh"
    // }

const Blogpage = ({array, setArray}) => {

    const history = useHistory();
    const content = history.location.state.content;

    const handledelete = () => {
        let ind;
        for(let i=0;i<Data.length;i++)
        {
            if(Data[i].title === content.title)
            {
                ind = i;
                break;
            }
        }
        console.log(ind);
        Data.splice(ind,1);
        setArray(Data);
        alert("Selected blog has been deleted");
        history.push('/');
    }

    const hanndleedit = () => {
        history.push('/editpost', {
            content,
        })
    }

  return (
    <Container>
        <Title>
            {content.title}
        </Title>
        <Description>
            {content.content}
        </Description>
        <Buttondiv>
            <Button backgroundColor="rgb(85, 41, 220)" onClick={hanndleedit}>Edit Blog</Button>
            <Button onClick={handledelete}>Delete Blog</Button>
        </Buttondiv>
    </Container>
  )
}

export default Blogpage;