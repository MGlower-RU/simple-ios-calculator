import { useContext } from "react";
import { CalcContext } from "./Context";

export default function Buttons() {
  const {
    buttonsArray,
    setOp,
    op,
    newValue,
    setIsTotal,
    dispatch
  } = useContext(CalcContext)

  function handleClick(e) {
    if(isNaN(Number(e.target.dataset.name))) {
      if(e.target.dataset.name === 'total') {
        if(op !== '') {
          setIsTotal(true)
          dispatch()
        }
      } else if(e.target.dataset.name === 'clear') {
        setOp(e.target.dataset.name)
        dispatch()
      } else if(e.target.dataset.name === 'opposite') {
        dispatch({type: 'opposite'})
      } else if(e.target.dataset.name === 'dot') {
        dispatch({type: 'dot'})
      } else {
        if(newValue === '0') {
          setOp(e.target.dataset.name)
        }
      }
    } else {
      dispatch({number: e.target.dataset.name})
    }
  }

  return (
    <div className="buttons__wrapper">
      {
        buttonsArray.map(({name, symbol}) => {
          return (
            <button
              key={name}
              data-name={name}
              className="button"
              onClick={handleClick}
            >
              {symbol}
            </button>
          )
        })
      }
    </div>
  )
}