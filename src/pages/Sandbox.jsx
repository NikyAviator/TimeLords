import React from 'react'
import Artur from './Artur'
import { useParams } from 'react-router-dom'

const Sandbox = () => {
  let { name } = useParams()

  function getSandbox(name) {
    switch (name.toLowerCase()) {
      case 'artur': return <Artur />
    }
  }

  return (
    <>
      {getSandbox(name)}
    </>
  )
}

export default Sandbox