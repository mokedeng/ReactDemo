import React, { Component } from 'react';
import XiaojiejieItem from './XiaojiejieItem'
import './style.css';

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '中药泡脚',
            list: ['基础按摩','精油推背']
        }
        this.inputChange = this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() { 
        return (
            <div>
                <div>
                    <label htmlFor="jspang">加入服务：</label>
                    <input id="jspang" className="input" value={this.state.inputValue} onChange = {this.inputChange} />
                    <button onClick={this.addList}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                    <XiaojiejieItem
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    addList={this.addList}
                                    deleteItem={this.deleteItem} />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    inputChange(e) {
        // console.log(e)
        this.setState({
            inputValue: e.target.value
        })
    }

    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }

    deleteItem(index) {
        // console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
 
export default Xiaojiejie;