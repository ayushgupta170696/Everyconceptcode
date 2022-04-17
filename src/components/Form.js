import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: '' 
        }
    }
    
    handleUsernameChange = (event) => {
          this.setState(
              {
                  username: event.target.value
              }
          )
    
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = event => {
        alert('${this.state.username} ${this.state.comments}')
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>Username</label>
            <input type='text' 
            value={this.state.username}
            onChange={this.handleUsernameChange}
            /> 
            </div>
            <div>
            <label>Comments</label>
            <textarea 
            value={this.state.comments}
            onChange={this.handleCommentsChange}
            ></textarea>
            </div>
            <div>
                <label>Topic</label>
                    <select value={this.setState.topic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                
            </div>
            <button type="submit">Submit button</button>
            </form>
        )
    }
}

export default Form
