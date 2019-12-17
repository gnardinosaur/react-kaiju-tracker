//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    formStatus: false
  }

  componentDidMount() {
    requests.fetchKaijus()
      .then(kaijus => this.setState({ kaijus }))
  }

  handleSubmit = (e, newKaiju) => {
    e.preventDefault();
    requests.postKaiju(newKaiju)
      .then(kaiju => this.setState({ kaijus: [...this.state.kaijus, kaiju] }))
  }

  formToggle = () => {
    this.setState({
      formStatus: !this.state.formStatus
    })
  }

  updateKaiju = (edits, id) => {
    requests.editKaiju(edits, id)
    .then(updatedKaiju => {
      let newKaijuArray = this.state.kaijus.map(kaiju => kaiju.id === id ? updatedKaiju : kaiju)
      this.setState({ kaijus: newKaijuArray})
    })
  }

  deleteKaiju = (id) => {
    requests.deleteKaiju(id)
      .then(kaiju => [...this.state.kaijus].filter(kaiju => kaiju.id !== id))
      .then(updatedArr => this.setState({ kaijus: updatedArr }))
  }

  render() {
    return (
      
      <>
        <button onClick={this.formToggle}>{this.state.formStatus ? "Close Form" : "Open Form"}</button>    

        {this.state.formStatus && <CreateKaijuForm handleSubmit={this.handleSubmit} />}

        <div id='kaiju-container'>

          {this.state.kaijus.map(kaiju => <KaijuCard key={kaiju.id} {...kaiju} updateKaiju={this.updateKaiju} deleteKaiju={this.deleteKaiju} />)}


        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer

