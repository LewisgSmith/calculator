
function CalcButton(props) {
    function testFunction(){
        console.log("reacts")
      }
    return (
      <button className="CalcButton">
        {props.value}
      </button>
    )
  }
  
  export default CalcButton;