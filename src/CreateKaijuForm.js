import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: "",
    power: "",
    img_url: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state)} id='create-kaiju-form'>

        <label>Name: </label>
        <input onChange={this.handleChange} name="name" type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input onChange={this.handleChange} name="power" type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input onChange={this.handleChange} name="img_url" type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
