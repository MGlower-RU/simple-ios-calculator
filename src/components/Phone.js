import { useContext } from "react"
import Buttons from "./Buttons"
import { CalcContext } from "./Context"

export default function Phone() {
  const { total, op, newValue, error } = useContext(CalcContext)

  return (
    <div className="phone__wrapper">
      <div className="total">
        <span>
          {
            error !== '' ? error
            :
            op !== '' ? parseFloat(Number(newValue).toFixed(5)) : parseFloat(Number(total).toFixed(5))
          }
        </span>
      </div>
      <div className="some-el"></div>
      <Buttons />
    </div>
  )
}