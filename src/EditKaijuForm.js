import React from 'react'

class EditKaijuForm extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.props.updateBackend(e, this.state, this.props.kaiju.id)} className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input onChange={this.handleChange} type='text' name="name" placeholder={this.props.kaiju.name}/>
          <br/>

          <label>Power: </label>
          <input onChange={this.handleChange} type='text' name="power" placeholder={this.props.kaiju.power}/>
          <br/>

          <label>Image URL: </label>
          <input onChange={this.handleChange} type='text' name="img_url" placeholder={this.props.kaiju.image} />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
