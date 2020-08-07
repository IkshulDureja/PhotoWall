import React, {Component}  from 'react'

class List extends Component {
    render(){
        return (< ol > 
                      {this.props.tasks.map((tasks, index) => < li key = { index } > { tasks } </li >)}
                </ ol>  
                )
            }
}

export default List