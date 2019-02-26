import React, { Component } from 'react'
import { Form, Input, Icon } from 'antd'
import 'antd/dist/antd.css'

class FormComponent extends Component {
  constructor (props) {
    super(props)

    // * estado
    this.state = {
      name: 'Daniel',
      lastName: 'Diaz'
    }

    // * bindings de los handlers
    this.onNameChange = this.onNameChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
  }

  // * ciclos de vida para cambiar el titulo de la App
  componentDidMount () {
    window.document.title = this.state.name + ' ' + this.state.lastName
  }

  componentDidUpdate () {
    window.document.title = this.state.name + ' ' + this.state.lastName
  }

  // * handlers para manejar el estado de los inputs
  onNameChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  onLastNameChange (e) {
    this.setState({
      lastName: e.target.value
    })
  }

  render () {
    return (
      <Form>
        <h1>Class Component</h1>
        <label>Name</label>
        <Input onChange={this.onNameChange} value={this.state.name} prefix={<Icon type='user' />} />
        <label>Last Name</label>
        <Input onChange={this.onLastNameChange} value={this.state.lastName} prefix={<Icon type='user-add' />} />
        <h1>FullName: {this.state.name + ' ' + this.state.lastName}</h1>
      </Form>
    )
  }
}

export default FormComponent
