
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


