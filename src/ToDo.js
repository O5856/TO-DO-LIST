import flower from './images/flower.png'
import { Component } from "react";

export class ToDo extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            toDoList: []
        }
    }

    onChangeEvent(event) {
        this.setState({ userInput: event })
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item')
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({ toDoList: listArray, userInput: '' })
            console.log(listArray)
        }

    }
    crossedWord(e) {
        e.target.classList.toggle('crossed')
    }

    resetList() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({ toDoList: listArray })
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div >
                <form className='list'  onSubmit={this.onFormSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="What would you like to complete today?"
                            onChange={(e) => { this.onChangeEvent(e.target.value) }}
                            value={this.state.userInput}
                        />
                    </div>

                    <div className='btnOne'>
                        <button className="btn btnColorOne" onClick={() => this.addItem(this.state.userInput)}>Add</button>

                    </div>

                    <div>
                        <ul className='listContainer'>
                            {this.state.toDoList.map((item, index) =>
                            (<div onClick={this.crossedWord} key={index} className='listItem'>
                                <img src={flower} width="20px" alt='flower' className='flower' />
                                <li>{item}</li>
                            </div>))
                            }
                        </ul>
                    </div>
                    <div className='btnTwo'>
                        <button className="btn btnColorTwo" onClick={()=>this.resetList()}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}