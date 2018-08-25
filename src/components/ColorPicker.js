import React, { Component } from 'react';

class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state = {
      colors : ['red', 'green', 'blue', '#ccc']
    };
  }

  showColor(color){
    return {
      backgroundColor : color
    };
  }

  setActiveColor(color){
      this.props.onReceiveColor(color);
  }

  render() {

    var elmColors = this.state.colors.map((item)=>{
      return <span 
                key={item} 
                style={this.showColor(item)} 
                className={this.props.color===item ? 'active' : ''}//nếu color truyền vào từ bên App(color đc nhấp) mà = color hiện tại=> add cho class active(bo viền)
                onClick={()=>this.setActiveColor(item)}//hàm có biến đầu vào phải dùng hàm mũi tên để khai báo
              ></span>
    });

    return (  
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       <div className="panel panel-primary">
         <div className="panel-heading">
           <h3 className="panel-title">Color Picker</h3>
         </div>
         <div className="panel-body">
           {elmColors}
           <hr/>
         </div>
       </div>
     </div>
    );
  }
}

export default ColorPicker;
