import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const AddCityForm = () => {
  const [errors, setErrors] = useState([])
  const [options, setOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')

  useEffect(async () => {
    //Get timezones from WorldTimeAPI
    setOptions(await (await fetch('http://worldtimeapi.org/api/timezone')).json())
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    let errors = [];

    if (city === '') { errors.push('You must enter a city name to add a new clock') }
    if (timeZone === "") { errors.push('You have to select a time zone to add a new clock') }
    setErrors(errors.length === 0 ? [] : errors)
  }

  function handleCityInputChange(e) {
    e.preventDefault()
    setCity(e.target.value)
  }

  function handleSelectTimeZoneChange(e) {
    e.preventDefault()
    setTimeZone(e.target.value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>City Name</Form.Label>
          <Form.Control type="text" placeholder="City" onChange={handleCityInputChange} />
          <Form.Text className="text-muted">
            Enter the name of the city you would like to add
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time Zone</Form.Label>
          <Form.Select value={timeZone} onChange={handleSelectTimeZoneChange}>
            <option value="">-- Select a Time Zone --</option>
            {
              options.map((option, index) => {
                return <option key={index} value={index}>{option}</option>
              })
            }
          </Form.Select>
          <Form.Text>
            Pick the correct time zone for your city
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="sumbit" className="mb-3">Add City</Button>
      </Form>
      {errors.map((error, index) => {
        return <Alert key={index} className="mb-3" variant="danger">{error}</Alert>
      })}
    </>
  )
}

export default AddCityForm