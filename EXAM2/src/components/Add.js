import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';
export default class add extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isbn:"",
           name:""
        }
      }
      handlesave=(e,id)=>{
        const value=e.target.value;
        this.setState(()=>({
            [`${id}`]: value,
        }));
      }

      savebook=()=>{
        const book = {
            isbn:this.state.isbn,
            name:this.state.name
        }
        axios.post("http://localhost:4000/book",book).then((res)=>{
            console.log(res);
            this.props.history.push('/');

        }).catch((err)=>{
            console.log(err);
        })
      }

  render() {
    return (
      <div>
        <form>
            isbn<input type="text" value={this.state.isbn} onChange={(e)=>{this.handlesave(e,"isbn")}}></input>
            name<input type="text" value={this.state.name} onChange={(e)=>{this.handlesave(e,"name")}}></input>
            <button onClick={this.savebook}>save</button>
            <Link to="/">Back</Link>
        </form>
      </div>
    )
  }
}


