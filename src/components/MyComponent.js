import React from 'react';

class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: ""
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users/10')
            .then(response => response.json())
            .then(json => {
               this.setState({email: json.data.email})
            })
    }
render() {
        return (
            <div>
                <center><h1>FETCHING DATA</h1></center>
                <hr />
                <h3>{this.state.email}</h3>
            </div>
        )
    }
}

export default MyComponent;