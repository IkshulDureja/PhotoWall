import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

//class Photowall extends Component
//{
    //render(){
        //return <div className='photoGrid'>
      //          {this.props.posts.map((post, index) => <Photo key={index} post = { post }/>)}
    //            </div>
  //          }
//}

function PhotoWall(props){
    return(
            <div className="addIcon">
                <button> + </button>
                <div className='photoGrid'>
                    {props.posts.map((post, index) => <Photo key={index} post = { post } onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
    )}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
}

export default PhotoWall
