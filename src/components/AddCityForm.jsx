import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import store from './localStore';


const AddCityForm = () => {
  const [errors, setErrors] = useState([])
  const [options, setOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [localStoreCity, setLocalStoreCity] = useState([])
  // const [localStoreTimeZone, setLocalStoreTimeZone] = useState('')
  const [input, setInput] = useState([])

  useEffect(async () => {
    //Get timezones from WorldTimeAPI
    setOptions(await (await fetch('/public/json/timezones.json')).json())
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    let errors = [];

    if (city === '') { errors.push('You need to enter a city name') }
    if (timeZone === "") { errors.push('You need to select a time zone') }
    setErrors(errors.length === 0 ? [] : errors)
    e.target.reset();
  }

  function handleCityInputChange(e) {
    e.preventDefault()
    setCity(e.target.value)
  }

  function handleSelectTimeZoneChange(e) {
    e.preventDefault()
    setTimeZone(e.target.value)

  }

  function saveCity() {
    if (city != ' ') {
      setLocalStoreCity(localStoreCity.push(city));
      store.myCities = localStoreCity;
      store.save();
      console.log(store.myCities);
    }
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
        <Button onClick={saveCity} variant="primary" type="sumbit" className="mb-3">Add City</Button>
      </Form>
      {errors.map((error, index) => {
        return <Alert key={index} className="mb-3" variant="danger">{error}</Alert>
      })}
    </>
  )
}

export default AddCityForm