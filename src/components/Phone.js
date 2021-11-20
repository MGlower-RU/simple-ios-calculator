import { useContext } from "react"
import Buttons from "./Buttons"
import { CalcContext } from "./Context"

export default function Phone() {
  const { total, op, newValue } = useContext(CalcContext)

  return (
    <div className="phone__wrapper">
      <div className="total">
        <span>
          {op !== '' ? newValue : total}
        </span>
      </div>
      <div className="some-el"></div>
      <Buttons />
    </div>
  )
}