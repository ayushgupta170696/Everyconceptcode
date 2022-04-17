import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ayush'
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivestate method')
        return null
    }
     
  componentDidMount(){
      console.log('LifecycleB componentDidmount')
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldcomponent update')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
   console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
}


componentDidUpdate()
{
    console.log('LifecycleB componentDid update method')
}

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
