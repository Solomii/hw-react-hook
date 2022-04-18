import React, {useReducer} from "react"
 
 export const AboutPage = () => {
   const initialState = 0;

   const reducer = (state, action) => {
    switch (action) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      case 'reset':
        return initialState;
      default:
        return state;
      }
   };
   
   const [count, dispatch] = useReducer(reducer, initialState);
   
  return (
    <div className="about_page">
      <h1>About useReducer</h1>
      <h2>{ count }</h2>
      <button onClick={()=>dispatch('increase')}>Increase(+)</button>
      <br />
      <button onClick={()=>dispatch('decrease')}>Decrease(-)</button>
      <br />
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
