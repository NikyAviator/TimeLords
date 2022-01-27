import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import store from './localStore';
import useStates from '../utilities/useStates';

const AddCityForm = () => {
  const [errors, setErrors] = useState([])
  const [options, setOptions] = useState([])
  const [city, setCity] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [myCityList, setMyCityList] = useState([]);

  useEffect(async () => {
    //Get timezones from WorldTimeAPI
    setOptions(await (await fetch('/public/json/timezones.json')).json())
  }, [])

  let emptyFormValues = {
    myCity: '',
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
  let { myCity, myTimezone } = formValues;

  useEffect(() => {
    if (myCity != '' && myTimezone != '') //if myCity and myTimezone is not empty save them into myCityList
      setMyCityList([...myCityList, formValues]) // ...myCityList is the old array, and formValues is the new city and timezone that are
    //choosen by the user
  }, [myCity, myTimezone]);


  function handleCityInputChange(e) {
    e.preventDefault()
    setCity(e.target.value)
    let { name, value } = e.target; //name is DOM element's name and value is the DOM element's value 
    updateFormValue({ [name]: value });
  }

  function handleSelectTimeZoneChange(e) {
    e.preventDefault()
    setTimeZone(e.target.value)
    let { name, value } = e.target; //name is DOM element's name and value is the DOM element's value 
    updateFormValue({ [name]: value });

  }
  function saveCity() {
    store.myCity = myCityList; //Save myCityList to localStore "store"
    store.save();
  }


  const resetForm = () => {
    updateFormValue({ ...emptyFormValues }); //empthFormValues and there is custom useStates hook is used here
  };
  console.log(myCityList)
  console.log(store.myCity)

  return (
    <>
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
        <Button onClick={saveCity} variant="primary" type="sumbit" className="mb-3">Add City</Button>
      </Form>
      {errors.map((error, index) => {
        return <Alert key={index} className="mb-3" variant="danger">{error}</Alert>
      })}
    </>
  )
}

export default AddCityForm