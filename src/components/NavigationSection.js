import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import data from "../data.json";
import './NavigationSection.css'

class NavigationSection extends Component {
  constructor() {
    super();
    this.state = {
     theme:0
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {

    let i =this.state.theme+1
    let count =data.themes.length;
    if(i===count)
      i=0
  
    this.setState({

      theme:i 
      
     });

    
    document.body.style.backgroundColor = data.themes[this.state.theme].background_color
    document.body.style.color=data.themes[this.state.theme].color
    
  }
 

  render() {
    return (
      <div className="navigation" >


        <div className="chTheme">

          <img onClick={()=>{
            
            this.changeColor();

          }} src={data.icons.theme} /> 

        </div>


        <ul>

                  <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={0}
                        >
                <li>About</li>
                </Link>
                <Link
                  activeClass="active"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={0}
                >
                <li>Skill</li>
                </Link>
        
       
      </ul>
    
      


      </div>
    );
  }
}

export default NavigationSection;