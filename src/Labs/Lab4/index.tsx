import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvent from "./clickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnDateEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }
    
  return(
<div>

    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions theFunction={sayHello} />
    <EventObject />
    <Counter  />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />
    <ReduxExamples/>


    </div>



  );
}
