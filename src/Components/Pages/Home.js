
import React, { useEffect } from 'react';
export default function Home() {

  var slideindex=0;
  useEffect(()=>{
    carousel();
  },[])
  
  function carousel(){
    var i;
    var x= document.getElementsByClassName("slide");
    for( i=0;i<x.length;i++){
        x[i].style.display='none';
    }
    slideindex++;
    if (slideindex>x.length){slideindex=1}
    x[slideindex-1].style.display="block";
    setTimeout(carousel,5000);
  }
  return (
    <div className='home'>
    <div className="slider">
        
        <div className="slide active" id="s1">
          <img src={require("../../images/s1.jpg")}></img>
        </div>
        <div className="slide" id="s2">
           <img src={require("../../images/s2.jpg")}></img>
        </div>
        <div className="slide" id="s3">
        <img src={require("../../images/s3.jpg")}></img>
        </div> 
        <div className="slide"id="s4" >
        <img src={require("../../images/s4.jpg")}></img>
        </div>
        <div className="slide" id="s5">
        <img src={require("../../images/s5.jpg")}></img>
        </div>
        <div className="slide" id="s6">
        <img src={require("../../images/s3.jpg")}></img>
        </div>
    </div>
    <div id="heading">
      <h1>
        Pallavi
      </h1>
      <h4>
        Hotels & Resorts
      </h4>
    </div>
    </div>
  )
}
