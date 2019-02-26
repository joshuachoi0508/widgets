import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    
    this.changeIndex = this.changeIndex.bind(this);
  }
  
  changeIndex(index) {
    this.setState({index: index});
  }

  render() {
    return (
    <div>
      <div className="tabs"> 
        <div className="tab-components">
          <ul className="tab-options">
            <li className="tab-option" onClick={() => this.changeIndex(0)}>{this.props.tabsInfo[0].title}</li>
            <li className="tab-option" onClick={() => this.changeIndex(1)}>{this.props.tabsInfo[1].title}</li>
            <li className="tab-option" onClick={() => this.changeIndex(2)}>{this.props.tabsInfo[2].title}</li>
          </ul>
          <ul id="tab-content">
            {this.props.tabsInfo[this.state.index].content.map(info => (<li className="content"><a className="links" href={info[1]}>{info[0]}</a></li>))}
          </ul>
        </div>
      </div>
    </div>
    );
  }
} 

export default Tab;