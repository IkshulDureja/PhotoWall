import React from 'react'
import PropTypes from 'prop-types'

function Photo(props){
    const post = props.post
    return  <figure className='figure'>
    <img className='photo' src={post.imageLink} alt={post.description}/>
    <figcaption> <p>{post.description}</p></figcaption>
    <div class='button-container'>
    <button className='remove-button' onClick={() => {
      props.onRemovePhoto(post)
    }}>REMOVE</button>
    </div>
   </figure>
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
}
//class Photo extends Component {
  //  render(){
    //    const post = this.props.post
      //  return <figure className='figure'>
        //<img className='photo' src={post.imageLink} alt={post.description}></img>
        //<figcaption> <p>{post.description}</p></figcaption>
       // <div class='button-container'>
       // <button className='remove-button'>REMOVE</button>
      //  </div>
       // </figure>
   // }
//}

export default Photo
