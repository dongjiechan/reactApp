import React, { Component } from 'react';
// import { List } from 'antd';
import logo from '../logo.svg';
import './App.css';
 

const data = [
  'demo1: 如何使用react',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">欢迎React从入门到跑路</h1>
      //   </header>
      //   <p className="App-intro">
      //     你可以在<code>src/App.js</code> 修改和保存.
      //   </p>
      //   <h3 style={{ marginBottom: 16 }}>一起学习</h3>
      //   <List
      //     footer={<div>Footer</div>}
      //     bordered
      //     dataSource={data}
      //     renderItem={item => (<List.Item>{item}</List.Item>)} />
      // </div>
      <div>
        <header>
            <h1 className="App-title">欢迎React从入门到跑路</h1>
         </header>
      {this.props.children}
    </div>
    );
  }
}

export default App;
