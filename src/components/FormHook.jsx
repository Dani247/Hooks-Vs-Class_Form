import React from 'react'
import { Form, Input, Icon } from 'antd'
import 'antd/dist/antd.css'
import { useFormInput, useAppTitle } from '../hooks/customHooks'

const FormComponent = props => {
  // * hooks de inputs
  const name = useFormInput('Daniel')
  const lastName = useFormInput('Diaz')

  // * hook para cambiar el titulo de la App
  useAppTitle(name.value + ' ' + lastName.value)

  return (
    <Form>
      <h1>Functional Component</h1>
      <label>Name</label>
      <Input {...name} prefix={<Icon type='user' />} />
      <label>Last Name</label>
      <Input {...lastName} prefix={<Icon type='user-add' />} />
      <h1>FullName: {name.value + ' ' + lastName.value}</h1>
    </Form>
  )
}

export default FormComponent
