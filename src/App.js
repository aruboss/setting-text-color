import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 16
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

onSetColor(param){
  this.setState({
    color: param
  });
}

onChangeSize(param){
  //8=<size<=36
  if(this.state.fontSize + param < 37 && this.state.fontSize + param > 7){
    this.setState({
      fontSize: this.state.fontSize + param
    })
  }
}

onSettingDefault(param){
  if(param){
    this.setState({
      color: 'red',
      fontSize: 16
    })
  }
}

  render() {
    return (  
      <div className="container mt-50">
           <div className="row">    
               <ColorPicker 
                       color={this.state.color} 
                       onReceiveColor={this.onSetColor}
               />
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting 
                      fontSize={this.state.fontSize}
                      onChangeSize={this.onChangeSize}
                />
                <Reset 
                      onSettingDefault={this.onSettingDefault} //gọi 1 props tên onSettingDefault, vs giá trị = {this.onSettingDefault} 
                />
               </div>
               <Result color={this.state.color} fontSize={this.state.fontSize}/>
             </div>
      </div>      
    );
  }
}

export default App;
//state: nội bộ 1 component, props: truyền giưa cac component