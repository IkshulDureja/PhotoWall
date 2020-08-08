import React from 'react'
import ReactDOM from 'react-dom'
//import Main from './Components/Main'
import './styles/stylesheet.css'
import UserProfile from './Components/UserProfile'
//import 'bootstrap/dist/css/bootstrap.min.css';
//const tasks = ['Take out the trash', 'shovel the driveway', 'walk the dog']

// FIRST const element = React.createElement('ol', null, tasks.map((tasks, index) => React.createElement('li', { key: index }, tasks)));
// React.createElement('li', null, 'Take out the trash'),
//React.createElement('li', null, 'shovel the driveway'),
//React.createElement('li', null, 'walk the dog')
//);

// SECOND const element =< div >
          //          < h1 > Task List </h1>
            //        < ol >
              //          {tasks.map((tasks, index) => < li key = { index } > { tasks } </li >)}
                //    </ ol>
                //</div>
            //createElements
            //<
            //li > { tasks[0] } < /li>  <li > { tasks[1] } < /li > < li > { tasks[2] } < /li> < /ol >
ReactDOM.render(<UserProfile />, document.getElementById('root'))
