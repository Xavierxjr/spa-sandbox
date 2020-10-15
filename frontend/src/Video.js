import React from 'react'
import Loading from './Loading'


export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'No ID',
      name: 'No Video Name Yet',
      hasLoaded: false,
      error: false,
      image: null,
      video: null,
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/videos/3/")
    const responseJson = await response.json()
    if (response.ok) {
      this.setState({
        id: responseJson['id'],
        name: responseJson.name,
        hasLoaded: true,
        image: responseJson.image,
        video: responseJson.video,
      })
    } else {
      this.setState({
        error: true,
      })
    }
    console.log(response)
    console.log(responseJson)
  }


  render() {
    const { children } = this.props
    const {
      id,
      name,
      hasLoaded,
      error,
      image,
      video,
    } = this.state

    if (error) {
      return <b style={{color: 'red'}}>ERROR!</b>
    }

    if ( !hasLoaded ) {
      return <Loading />
    }

    return (
      <p>
        Video: ID = {id} --- 
        Name = {name} --- 
        Children = {children} --- 
        <img src={image} />
        <hr />
        <video width="320" height="240" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <hr />
      </p>
    )
  }
}


export const Blah = () => <h1>Blah!</h1>

