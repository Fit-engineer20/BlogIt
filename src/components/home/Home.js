import React,{useState} from 'react'
import styled from "styled-components";
import Data from "../../constants/Data";
import Button from "../button/Button";
import List from "../list/List";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Container = styled.div` 
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
`
const Heading = styled.div` 
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:40px;
margin-top:50px;
color:#ffffff;
`
const Head = styled.div`
font-size:56px;
font-weight:300;
`
const Allblog = styled.div`
width:60%;
padding:5%;
padding-right:8%;
padding-bottom:3%;
background: rgb(85, 41, 220);
`

const Home = ({array,setArray}) => {

    const getList = (curr) => {
        return(
            <List 
                title = {curr.title}
                content = {curr}
                setArray = {setArray}
            />
        )
    }

 
    // const navigate = useNavigate();
 
  return (
    <div>
        <Navbar />
        <Container>
            <Heading>
                <Head>All Blogs</Head>
            </Heading>
            <Allblog>
                {Data.map(getList)}
            </Allblog>
        </Container>
        <Footer />
    </div>
  )
}

export default Home