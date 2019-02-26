import React from 'react'
import InjectSheet from 'react-jss'
// import FormComponent from './components/FormComponent'
import FormHook from './components/FormHook'

const styles = theme => (
  {
    container: theme.container
  }
)

function App ({ classes }) {
  return (
    <div className={classes.container}>
      <FormHook />
    </div>
  )
}

export default InjectSheet(styles)(App)
