import React,{useState} from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import NewPost from "./components/newpost/NewPost";
import Data from "./constants/Data";
import Blogpage from "./components/Blogpage";
import Edit from "./components/editblog/Edit";

function App() {

  const [array, setArray] = useState(Data);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={() => (<Home array={array} setArray={setArray}/>)} />
        <Route exact path='/newpost' component = {() => (<NewPost array={array} setArray={setArray}/>)} />
        <Route exact path='/editpost' component = {() => (<Edit array={array} setArray={setArray}/>)} />
        <Route exact path='/:title' component={() => (<Blogpage array={array} setArray={setArray}/>)} />
      </Switch>
    </div>
  );
}

export default App;