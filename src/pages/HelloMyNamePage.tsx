import {useState} from "react";

export default function HelloMyNamePage() {
  const [name,setName] = useState("");
  const [result,setResult] = useState("");
  const [isGreetOk,setGreetOk] = useState(false);
  const greetBtnOnClick = () =>{
    if(name == ""){
      setResult("Please Input a Name");
      setGreetOk(false);
    }else{
      setResult(`Hello : ${name}`);
      setGreetOk(true);
    }
  };
  const nameInput = (event:any)=>{
    setName(event?.target.value);
  }
  
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange = {nameInput}
        value = {name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnClick}>Greet Me</button>
      {/* Result Text */}
      <p className = {isGreetOk? "": "text-danger"}>{result}</p>
    </div>
  );
}
