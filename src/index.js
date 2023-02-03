
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
function translate() {
}
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={text:'', isSubmitted:false };
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleButton=this.handleButton.bind(this);
  }
  handleInput(e)
  {
    this.setState({text:e.target.value});
  }
  handleSubmit(event)
  {   
    event.preventDefault();
    this.setState({isSubmitted:true});
    
  }
  handleButton(event)
  {
    this.setState({isSubmitted:false, text:''});
  }
  render() {
    let button;
    let textarea;
    const isSubmitted=this.state.isSubmitted;
    if(isSubmitted) {
      button=<button onClick={this.handleButton}>초기화 </button>
    }
    if(!isSubmitted){
      textarea=<textarea placeholder='입력하세요' rows='5' cols='100' type="text" value={this.state.text} onChange={this.handleInput} /> 
    }
    else{
      textarea=<textarea  readonly rows='5' cols='100' type="text" value={""} /> 
    }
    return (
      <div>
        <label>뉴스를 입력하세요 : 
        <form onSubmit={this.handleSubmit}>
          {textarea}         
          <hr/> 
          <input type="submit" value="Submit" />
          <hr/>
        </form>
        </label>
        {this.state.isSubmitted && <TextOutput text={this.state.text}/>}
        {this.state.isSubmitted &&button}
      </div>
    );
  }
}

class TextOutput extends React.Component {
  render() {
    return (
      
      <div>
        <hr/> 
        결과  
        <p >{this.props.text}</p>  
        <hr/>
      </div>

    )
  };
}



export default function Insert({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: "고유한값", text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="입력하세요"
        value={text}
        onChange={handleChange}
      />
      <button>추기</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Insert />);





















class Translater extends React.Component {
  constructor(props) {
    super(props);
    this.state={text:'', isSubmitted:false };
    this.handleInput=this.handleInput.bind(this);
    
  }
  handleInput(text)
  {
    this.setState({text});
  }
  handleSubmit(isSubmitted)
  {
    this.setState({isSubmitted:true});
  }
  render() {
    const text=this.state.text;
    const isSubmitted=this.state.isSubmitted;
    return (
      <div>
      <TextInput text={text} isSubmitted={isSubmitted} onChange={this.handleInput} onSubmit={this.handleSubmit}/ >
      <div>
        {this.state.isSubmitted && <TextOutput text={text}/>}
      </div>
      </div>

      
    );
  }

}