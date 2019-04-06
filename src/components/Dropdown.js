import React from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  position: relative;
  margin: 1rem auto 0;
  background: none;
  display: inline-block;
  cursor: pointer;
  margin: 0.5rem;
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0;
    border-color: ${({ theme }) => theme.dark} transparent transparent
      transparent;
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
  }
  select {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.dark};
    border: none;
    font-size: inherit;
    line-height: 1.5em;
    appearance: none;
    margin: 0;
    padding: 0 2rem 0 20px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
`

const Dropdown = props => {
  return (
    <DropdownWrapper>
      <select
        name={props.name}
        value={
          props.selected || (props.name === 'year' ? props.placeholder : '00')
        }
        onChange={props.onChangeHandler}
      >
        {[props.placeholder].concat(props.options).map((option, index) => (
          <option
            key={option}
            value={props.name === 'year' ? option : `0${index}`.slice(-2)}
            disabled={option === props.placeholder}
            hidden={option === props.placeholder}
          >
            {option}
          </option>
        ))}
      </select>
    </DropdownWrapper>
  )
}

export default Dropdown
