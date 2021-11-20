import React, { createContext, useReducer, useState } from 'react';

export const CalcContext = createContext();

const buttonsArray = [
  {
    name: 'clear',
    symbol: 'AC'
  },
  {
    name: 'opposite',
    symbol: '+/-'
  },
  {
    name: 'percent',
    symbol: '%'
  },
  {
    name: 'divide',
    symbol: '÷'
  },
  {
    name: '7',
    symbol: 7
  },
  {
    name: '8',
    symbol: 8
  },
  {
    name: '9',
    symbol: 9
  },
  {
    name: 'multiply',
    symbol: '×'
  },
  {
    name: '4',
    symbol: 4
  },
  {
    name: '5',
    symbol: 5
  },
  {
    name: '6',
    symbol: 6
  },
  {
    name: 'minus',
    symbol: '-'
  },
  {
    name: '1',
    symbol: 1
  },
  {
    name: '2',
    symbol: 2
  },
  {
    name: '3',
    symbol: 3
  },
  {
    name: 'plus',
    symbol: '+'
  },
  {
    name: '0',
    symbol: 0
  },
  {
    name: 'dot',
    symbol: '.'
  },
  {
    name: 'total',
    symbol: '='
  },
]


export default function Context(props) {
  const [op, setOp] = useState('')
  const [isTotal, setIsTotal] = useState(false)
  const [newValue, setNewValue] = useState('0')
  const [total, dispatch] = useReducer(reducer, '0')

  function reducer(total, action) {
    if(action) {
      if(op) {
        if(newValue === '0') {
          setNewValue(action.number)
        } else {
          setNewValue(val => String(val) + action.number)
        }
      } else {
        if(total === '0') {
          total = action.number
        } else {
          total = String(total) + action.number;
        }
      }
      return total
    }
    if(op === 'clear') {
      setNewValue('0')
      setOp('')
      return total = '0'
    } else if(op === '' || !isTotal) {return}

    switch (op) {
      case 'plus':
        setOp('')
        setNewValue('0')
        return total = Number(total) + Number(newValue);
      case 'minus':
        setOp('')
        setNewValue('0')
        return total = Number(total) - Number(newValue);
      case 'divide':
        setOp('')
        setNewValue('0')
        return total = Number(total) / Number(newValue);
      case 'multiply':
        setOp('')
        setNewValue('0')
        return total = Number(total) * Number(newValue);
      case 'opposite':
        setOp('')
        setNewValue('0')
        return total *= -1;
      case 'percent':
        setOp('')
        setNewValue('0')
        return total /= 100;
      case 'dot':
        setOp('')
        setNewValue('0')
        return total = `${total}.`;
      default:
        setNewValue('0')
        setOp('')
        setNewValue('0')
        return total = '0'
    }
  }

  return (
    <CalcContext.Provider value={{
      total,
      reducer,
      dispatch,
      op,
      setOp,
      newValue,
      setNewValue,
      buttonsArray,
      setIsTotal
    }}>
      {props.children}
    </CalcContext.Provider>
  )
}