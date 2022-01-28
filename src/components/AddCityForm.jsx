import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import store from '../utilities/localStore';
import useStates from '../utilities/useStates';//Import custom hook from utilities
//This hook reset the DOM elements(Form.Control and Form.Select)
const AddCityForm = () => {
  const [errors, setErrors] = useState([])
  const [options, setOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [myCityList, setMyCityList] = useState([]);//get a state variable myCityList

  useEffect(async () => {
    setOptions(await (await fetch('/public/json/timezones.json')).json())
  }, [])

  let emptyFormValues = { //set the emptyFormValues myCity and myTimezone to ''
    myCity: '',           //myCity and myTimezone should match the DOM elements' value
    myTimezone: ''
  };

  const [formValues, updateFormValue] = useStates({ ...emptyFormValues });

  function handleSubmit(e) {
    e.preventDefault();
    let errors = [];
    if (city === '') { errors.push('You need to enter a city name') }
    if (timeZone === "") { errors.push('You need to select a time zone') }
    setErrors(errors.length === 0 ? [] : errors)
    resetForm();
  }
  let { myCity, myTimezone } = formValues;  //myCity and myTimezone should match the DOM elements' value

  useEffect(() => {
    if (myCity != '' && myTimezone != '') {  //if myCity and myTimezone is not empty save them into myCityList
      setMyCityList([...myCityList, formValues])
    }// ...myCityList is the old array, and formValues is the new city and timezone that are                                              
  }, [myCity, myTimezone]);                     //choosen by the user

  function handleCityInputChange(e) {
    e.preventDefault()
    setCity(e.target.value)
    let { name, value } = e.target; //name is DOM element's (Form.Control) name and value is the DOM element's value 
    updateFormValue({ [name]: value });//save them into FormValues
  }

  function handleSelectTimeZoneChange(e) {
    e.preventDefault()
    setTimeZone(e.target.value)
    let { name, value } = e.target; //name is DOM element's (Form.Select) name and value is the DOM element's value 
    updateFormValue({ [name]: value });//save them into FormValues

  }
  function saveCity() {
    store.cityList = myCityList; //Save myCityList to localStore store's cityList
    store.save();
  }

  const resetForm = () => {
    updateFormValue({ ...emptyFormValues }); //empthFormValues and there is custom useStates hook is used here
  };

  return (
    <>
    <div className="MyCities_Form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>City Name</Form.Label>
          <Form.Control name="myCity" type="text" value={myCity} placeholder="City" onChange={handleCityInputChange} />
          <Form.Text className="text-muted">
            Enter the name of the city you would like to add
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time Zone</Form.Label>
          <Form.Select name="myTimezone" value={myTimezone} onChange={handleSelectTimeZoneChange}>
            <option value="">-- Select a Time Zone --</option>
            {
              options.map((option, index) => {
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