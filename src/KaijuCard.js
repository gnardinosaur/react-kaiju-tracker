// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    editForm: false
  }

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }

  updateBackend = (e, edits, id) => {
    e.preventDefault();
    this.props.updateKaiju(edits, id);
    this.toggleEditForm()
  }

  deleteBackend = () => {
    this.props.deleteKaiju(this.props.id);
  }

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={"monster"} />

        {/* What should this edit button do? */}
        <button onClick={this.toggleEditForm} className='kaiju-card-edit-button'>{this.state.editForm ? "Nevermind" : "Edit"}</button>
        
        {this.state.editForm && <button onClick={this.deleteBackend} className="kaiju-card-delete-button">Delete</button>}
        
        {this.state.editForm && <EditKaijuForm kaiju={this.props} updateBackend={this.updateBackend} />}

      </div>
    )
  }
}

export default KaijuCard
