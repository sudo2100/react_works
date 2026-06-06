
const Box = ({children}) => {
  const boxStyle = {
    width: '200px',
    border: '1px solid #000',
    margin: '0 auto',
    padding: '10px'
  }

  return(
    <div>
      <h2>Props Children</h2>
      <p style={boxStyle}>{children}</p>
    </div>
  )
}

export default Box;