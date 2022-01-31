import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import store from '../utilities/localStore';
import useStates from '../utilities/useStates';

const AddCityForm = () => {
  const [timeZoneOptions, setTimeZoneOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')
  store.cityListLocalStorage = store.cityListLocalStorage || []

  const [errors, setErrors] = useState([])

  let emptymyNewCityObject = {
    myCityName: '',
    myCityTimeZone: ''
  };

  const [myNewCityObject, updateFormValue] = useStates({ ...emptymyNewCityObject });

  let { myCityName, myCityTimeZone } = myNewCityObject;


  useEffect(async () => {
    setTimeZoneOptions(await (await fetch('/public/json/timezones.json')).json())
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    let errors = [];
    if (city === '') { errors.push('You need to enter a city name') }
    if (timeZone === "") { errors.push('You need to select a time zone') }
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
    store.cityListLocalStorage.push(myNewCityObject);
    store.save();
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
            <Form.Control name="myCityName" type="text" value={myCityName} placeholder="City" onChange={handleCityInputChange} />
            <Form.Text className="text-muted">
              Enter the name of the city you would like to add
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time Zone</Form.Label>
            <Form.Select name="myCityTimeZone" value={myCityTimeZone} onChange={handleSelectTimeZoneChange}>
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
      </div>
    </>
  )
}

export default AddCityForm