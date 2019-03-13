import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{

    state = {
        lat : null,
        errorMsg : ""                                       //same thing (Alternate Initialization Approach)
    }

    componentDidMount(){
        console.log("I am inside DidMount");
        window.navigator.geolocation.getCurrentPosition(   
            (position) =>  this.setState( {lat : position.coords.latitude }),          
            (error) => this.setState( { errorMsg : error.message })                                 
         );
    }

    componentDidUpdate(){
        console.log("Hi I am updated just now");
    }

    renderContent(){
        if(this.state.errorMsg && !this.state.lat)
        {
            return <div>Error : {this.state.errorMsg }</div>
        }
        else if( !this.state.errorMsg && this.state.lat){
            return <div> <SeasonDisplay  latitude = {this.state.lat} /> </div> 
        }
        else {
            return <div><Spinner message="Please Accept Location Request"/></div>
        }            
    }
    

    
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
}}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
