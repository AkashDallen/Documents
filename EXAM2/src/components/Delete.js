import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export class Delete extends Component {
    constructor(props){
        super(props);
        this.state={
            book:[]
        }
    }
    componentDidMount=()=>{
        this.getBooks()
    }
    getBooks=()=>{
        axios.get('http://localhost:4000/book').then((res)=>{
            this.setState(()=>({book:res.data}))
        }).catch((err)=>{
            console.log(err);
        })
    }
    deleteBook=(isbn)=>{
        axios.delete(`http://localhost:4000/book/${isbn}`).then((res)=>{
            this.getBooks();
        }).catch((er)=>{
            console.log(er)
        })
    }   
    render() {
        return (
            <div>
                   <Link to='/addbooks'>new book</Link>
                    <table>
                        <thead>
                            <th>isbn</th>
                            <th>name</th>

                        </thead>
                        <tbody>
                            {this.state.book.map((item)=>{
                               return(
                                <tr key={item.isbn}>
                                    <td><Link to='/desc'>{item.isbn}</Link> </td>
                                    <td>{item.name}</td>
                                    <td><Link to='/editbooks'>edit</Link></td>
                                    <td><button onClick={()=>this.deleteBook(item.isbn)}>delete</button></td>
                                </tr>
                               )
                            })}
                        </tbody>
                    </table>
            </div>
         
        )
    }
}

export default Delete
