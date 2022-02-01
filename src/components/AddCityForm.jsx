import { useState, useEffect } from 'react'
import store from '../utilities/localStore';
import useStates from '../utilities/useStates';
import { Button, Card, Row, Form, Alert, Container } from 'react-bootstrap'
import RemoveMyCity from './RemoveMyCity';

const AddCityForm = () => {
  const [timeZoneOptions, setTimeZoneOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')


  const [errors, setErrors] = useState([])

  let emptymyNewCityObject = {
    name: '',
    timezone: ''
  };

  const [myNewCityObject, updateFormValue] = useStates({ ...emptymyNewCityObject });

  let { name, timezone } = myNewCityObject;
  let checkTheCityIsThere = store.cityList.some((city) => JSON.stringify(city) == JSON.stringify(myNewCityObject));

  useEffect(async () => {
    setTimeZoneOptions(await (await fetch('/public/json/timezones.json')).json())
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    let errors = [];
    if (city === '') { errors.push('You need to enter a city name') }
    if (timeZone === "") { errors.push('You need to select a time zone') }
    if (checkTheCityIsThere == true) {
      errors.push('You already have the same city in your list!')
    }
    setErrors(errors.length === 0 ? [] : errors)
    resetForm();
  }

  function handleCityInputChange(e) {
    e.preventDefault()
    setCity(e.target.value)
    let { name, value } = e.target;
    updateFormValue({ [name]: value });
  }

  function handleSelectTimeZoneChange(e) {
    e.preventDefault()
    setTimeZone(e.target.value)
    let { name, value } = e.target;
    updateFormValue({ [name]: value });
  }


  function saveCity() {

    console.log(checkTheCityIsThere)
    if (checkTheCityIsThere == false) {
      store.cityList.push(myNewCityObject);
      store.save();
    }
  }

  const resetForm = () => {
    updateFormValue({ ...emptymyNewCityObject });
  };


  return (
    <>
      <div className="MyCities_Form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>City Name</Form.Label>
            <Form.Control name="name" type="text" value={name} placeholder="City" onChange={handleCityInputChange} />
            <Form.Text className="text-muted">
              Enter the name of the city you would like to add
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time Zone</Form.Label>
            <Form.Select name="timezone" value={timezone} onChange={handleSelectTimeZoneChange}>
              <option value="">-- Select a Time Zone --</option>
              {
                timeZoneOptions.map((option, index) => {
                  return <option key={index} value={option}>{option}</option>
                })
              }
            </Form.Select>
            <Form.Text>
              Pick the correct time zone for your city
            </Form.Text>
          </Form.Group>
          <Button onClick={saveCity} variant="custom" type="sumbit" className="mb-3" >Add City</Button>
        </Form>
        {errors.map((error, index) => {
          return <Alert key={index} className="mb-3" variant="danger">{error}</Alert>
        })}
        <Container className="mt-3 px-5 text-center">
          <h1 style={{ marginLeft: "8%", marginRight: "8%" }}>My Cities</h1>
          <RemoveMyCity />
        </Container>
      </div>
    </>
  )
}

export default AddCityForm