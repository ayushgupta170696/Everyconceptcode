import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ayush'
        }
        console.log('Lifecycle A constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivestate method')
        return null
    }
     
  componentDidMount(){
      console.log('LifecycleA componentDidmount')
  }

  shouldComponentUpdate(){
      console.log('LifecycleA shouldcomponent update')
      return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
     console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }
   
  componentDidUpdate()
  {
      console.log('LifecycleA componentDid update method')
  }

  changeState = () => {
      this.setState({
          name: 'Codevolution'
      })
  }

    render() {
        console.log('Lifecycle A render')
        return (
           <div>
           <div>
                Lifecycle A
            </div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
