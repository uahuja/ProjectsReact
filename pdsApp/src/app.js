import React from 'react';
import NavEg from './NavEg'
import 'bootstrap/dist/css/bootstrap.css';
import Example from './Table';
import Pages from './Pages';
import Carousels from './carousel';
import {RenderItems2} from './Navigation';


const style={
    display: "flex",
  }
const style1={
    paddingTop: "50px",
    paddingLeft: "80px"
}
const style2={
    paddingLeft:"700px"
}
class App extends React.Component{

render(){
    return (
    <div>
        
        <div><NavEg/></div>
        <div  style= {style}>
            <div><RenderItems2/></div>
            <div style={style1}> <Carousels/></div>
        </div>
        <div><Example/></div><br/>
        <div style={style2}><Pages/></div>
    </div>
    )
    
}
}

export default App;