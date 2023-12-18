import React, { useState } from 'react'
import './input.css'

export default function Input() {
  const [a, b] = useState("")
  const [inputFontStyle, setInputFontStyle] = useState('normal');
  const [inputFontStyleInt, setInputFontStyleInt] = useState('normal');
  const [inputFontStyleUnder,setInputFontStyleUnder] = useState('normal');
  const [textCenter,setTextCenter]=useState('normal')
  const [display,setDisplay]=useState("none")
 

  let UpperCase = (e) => {
    console.log("this is a ")
    let newcape = a.toUpperCase();
    b(newcape);


  }
  let LoarCase = (e) => {
    console.log("this is a ")
    let newcape = a.toLowerCase();
    b(newcape);


  }
  let channgehonewal = (e) => {
    b(e.target.value);



  }
  let removeHandler = () => {
    let remove = a.trim().split(/ + /).join(' ');
    b(remove)



  }

  function workBold() {
    if(inputFontStyle=="normal"){
      setInputFontStyle('bold');
    }else{
      setInputFontStyle('normal');
    }

 
  }
  function workInte(){
    if(inputFontStyleInt=="normal"){
      setInputFontStyleInt('italic')
    }else{
      setInputFontStyleInt('normal')
    }
    
  }
  function workInteundeline(){
    
    if(inputFontStyleUnder=="normal"){
      setInputFontStyleUnder('underline')
    }
    else{
      setInputFontStyleUnder('normal')
    }
   
  }


  function centerText(){
    setTextCenter('center')
  }

  function rightText(){
    setTextCenter('right')
  }
  function leftText(){
    setTextCenter('left')
  }


 

  let removeHandlerchat = () => {
    b(' ');
  }




  const opneDowp=()=>{
    if(display=='none'){
      setDisplay("block");
    }
    else{
      setDisplay('none');

    }

  }
  const copyText=()=>{
    window.navigator.clipboard.writeText(a)
  }


  return (
    <div className='main-content'>
      <div className='navBar'>
        <div className='navBar-aroow'>
          <i class="fa-solid fa-arrow-left"></i>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className='paragraph'>
          <p>paragraph</p>
          <i class="fa-solid fa-caret-down" onClick={opneDowp}>
           
            
          </i>
          <ul style={{
            position:'absolute',
          top:'100px',
          left:'220px',
            zIndex:'99',
            listStyle:'none',
            overflow:'hidden',
           height:'70px',
           width:'150px',
            cursor:'pointer',
            backgroundColor:'lightgray',
            borderRadius:'10px',
            boxShadow:'0px 0px 0xp -7px',
            display:'flex',
            display:display,
            flexDirection:'column',
            justifyContent:'center',
           
          }}>
            <li onClick={UpperCase}>UpperCase</li>
            <li onClick={LoarCase}>Loarcase</li>
            </ul>
        </div>
        <div className='text'>
          <b onClick={workBold}>B</b>
          <i onClick={workInte}>I</i>
          <b className='underLine' onClick={workInteundeline}>U</b>
        </div>
        < div className='textContent'>
          <img src='https://cdn-icons-png.flaticon.com/128/7231/7231133.png' onClick={leftText} ></img>
          <img src='https://cdn-icons-png.flaticon.com/128/10993/10993281.png' onClick={centerText}></img>
          <img src='https://cdn-icons-png.flaticon.com/128/3945/3945132.png' onClick={rightText}></img>

        </div>
        <div className='deletName'>
          <i class="fa-solid fa-trash" onClick={removeHandlerchat}></i>

        </div>
      </div>


      <hr></hr>
      <textarea type="text" onChange={channgehonewal} className='input' placeholder='Enter the text word....' value={a} style={{ fontWeight: inputFontStyle,textDecoration: inputFontStyleUnder,fontStyle:inputFontStyleInt ,textAlign:textCenter, }} />
      <div className='footer'>
        <div className='chat-word'>
          <div style={{ display: "flex", gap: '7px' }}>
            <p>{a.trim().split(/ +/).length}</p>
            <p>Word</p>
          </div>
          <div style={{ display: "flex", gap: '7px' }}>
            <p>{a.length}</p>
            <p>Characters</p>
          </div>
          <div className="container" onClick={removeHandler}>
            <input type="checkbox" class="checkbox" id="checkbox" placeholder='Enter The Text....' />
            <label className="switch" for="checkbox">
              <span className="slider"></span>
            </label>

          </div>
          <p>Include Spaces</p>

        </div>
        <div className='footer-fb'>
        <i className="fa-brands fa-facebook"></i>
      <p>{a.split(/ +/).length*0.25}</p> /
      <p>250</p>

<div style={{position:'relative',left:'500px', fontSize:'22px'}}>

<i class="fa-regular fa-copy" onClick={copyText}></i>
</div>
        </div>

      </div>
      {/* <button className='btn btn-primary' onClick={changekarenewal}>Change hijiye</button>
    <button className='btn btn-primary' onClick={removeHandler}>Remove sp</button>
    <button className='btn btn-primary' onClick={removeHandlerchat}>Remove CHAT</button> */}

      {/* <br>
    </br>
    <h2>this is a console area</h2>
    <p>{a}</p>
    <h2>this is a count area</h2>
    <p>{a.length}</p>
    <hr></hr>
    <h2>this is a count area</h2>
    <p>{a.trim().split(/ +/).length}</p>
    <h2>this is a raed word</h2>
    <p>{a.split(/ +/).length*0.25}</p> */}
    </div>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            