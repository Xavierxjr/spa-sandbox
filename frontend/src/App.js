import React from 'react'
import logo from './logo.svg'
import './App.css'


class Adder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/add", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({a: 1, b: 2}),
    })
    const responseJson = await response.json()

    if (response.ok) {
      this.setState({
      })
    }

  }
}


class Video extends React.Component {
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


const Loading = () =>
  <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video name="Insert Movie Name">Blah blahblah</Video>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
