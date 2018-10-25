import React, { Component } from 'react';
export default class Content extends Component {
   constructor(){
    super()
   

    this.state={
      color: 'rgba(12, 119, 158, .75)',
      text2: <div>Start Your Project<i className="material-icons" style={{display: 'flex', justifyContent: 'center', marginTop: '10%', fontSize: '10rem', width: '100%', height: '100%', justifySelf: 'center', alignSelf: 'center'}}>arrow_downward</i></div>,
      text: 'Start Your Project'
      
    }
    
    //this.changeColor = this.changeColor.bind(this);
   
  }
  
  changeColor(test, site){
    //var audio = new Audio('Click2-Sebastian-759472264.mp3');
   var x=document.getElementById('click');
   console.log(x);
   x.play();
    //audio.play();
    this.setState({ color: test});
    this.setState({ text: <div className="projectstarttxt">Click<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect letsgobtn">Lets Go!</button></div>})
    if(site== 'web'){
      this.setState({ text2: <div className="projectstarttxt">Start Your Website<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect letsgobtn">Lets Go!</button></div>})
    }else if(site=='app'){
      this.setState({ text2: <div className="projectstarttxt">Start Your Application<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect letsgobtn">Lets Go!</button></div>})
    }else{
      this.setState({ text2: <div className="projectstarttxt">Access Developer Tools<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect letsgobtn">Lets Go!</button></div>})
    }
  }
  //mdl-button--accent add that class
  
  render() {
     
    return (
      <div className='content'>
      <div className='textquote1'>
         Choose a Template to Get Started
         
         </div>
        <div className='select-template'>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect websitebtn" onClick={() => this.changeColor('rgba(255, 242, 0,', 'web')}>
  Website Builder
</button>
<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect appbtn" onClick={() => this.changeColor('rgba(0, 255, 21,', 'app')}> {/*rgba(199, 249, 153,'*/}
  App Builder
</button>
<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect devbtn" onClick={() => this.changeColor('rgba(65, 244, 244,', 'dev')}>
  Developer Plugins
</button>
<div className='changer' id='changer' style={{background: `${this.state.color} .75)`}}>{this.state.text2}</div>

<audio id='click'> <source src="/Talmage_project/src/components/content/sounds/sound.mp3" type="audio/mpeg"></source></audio>

<div className='changerskew' style={{background: `${this.state.color} .70)`}}></div>
        </div>
        
      </div>
    );
  }
}