import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import Button from "../button/Button";
import Data from "../../constants/Data";

    const Container = styled.div`
    padding:10%;
    `
    const Boxdiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin-bottom:50px;
    `
    const Lable = styled.div`
    font-size:42px;
    font-weight:400;
    margin-bottom:20px;
    color:#ffffff;
    `
    const Input = styled.input`
    width:100%;
    border:2px solid #aaa;
    border-radius:4px;
    margin:8px 0;
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition:.3s;
    font-size:24px;
 `;

const EditPost = ({array, setArray}) => {

    const history = useHistory();
    const data = history.location.state.content;
    const orgtitle = data.title;

    const [content, setBlog] = useState({
        title:data.title,
        content:data.content
    });

    const handletitle = (e) => {
        setBlog({...content, title: e.target.value});
    }
    const handlecontent = (e) => {
        setBlog({...content, content: e.target.value});
    }

    const Createnew = ()=>{
        for(let i=0;i<Data.length;i++)
        {
            if(Data[i].title === orgtitle)
            {
                Data[i] = content;
                break;
            }
        }
        console.log(Data);
        setArray(Data);
        alert("Sucessfully edited");
        history.push('/');
    }

  return (
    <Container>
        <Boxdiv>
            <Lable>Title</Lable>
            <Input type="text" onChange={handletitle} value={content.title} placeholder="Title here"></Input>
        </Boxdiv>
        <Boxdiv>
            <Lable>Description</Lable>
            <Input type="text" onChange={handlecontent} value={content.content} placeholder="Description here"></Input>
        </Boxdiv>
        <Button onClick={Createnew}>Confirm Edit</Button>
    </Container>
  )
}

export default EditPost;