import React from 'react'
import Artur from './Artur'
import Axel from './Axel'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Sandbox = () => {
  let { name } = useParams()

  function getSandbox(name) {
    switch (name.toLowerCase()) {
      case 'artur': return <Artur />
      case 'axel': return <Axel />
    }
  }

  return (
    <>
      <Container className="p-3">
        {getSandbox(name)}
      </Container>
    </>
  )
}

export default Sandbox