const Digit = (props) => {
  let { digit } = props
  return (
    <>
      <img className="digit" src={`/images/digits/${digit}.svg`} />
    </>
  )
}

export default Digit