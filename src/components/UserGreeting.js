import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        //short circuit operator
    return this.state.isLoggedIn && <div>Welcome Ayushji</div>
}
}
 
export default UserGreeting

        /* 3rd approach - ternary operator
     { return (
        this.state.isLoggedIn ? 
          <div>Welcome Ayush1 </div> :
          <div>Welcome Guest1</div>
      ) 
     }


      2nd Approach = element variable
      let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Ayush</div>
        }
        else {
            message = <div>Welcome Guest</div>
        }
    return <div>{message}</div> */
    



    //method 1  - if -else
      //  if(this.state.isLoggedIn){
      //  return  <div> Welcome Ayush</div>
       //     } 
        //    else {
        //    return <div> Welcome Guest</div>
       //     }
      //  }
    

