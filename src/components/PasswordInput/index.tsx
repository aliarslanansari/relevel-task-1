import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const CustomInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  box-sizing: border-box;
  border-radius: 8px;

  margin-bottom: 1rem;
`
const StyledInput = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem 3.5rem 1rem 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.grey.grey2};
  background-color: ${colors.grey.grey1};
  &::placeholder {
    color: ${colors.grey.grey3};
  }
  &:focus {
    outline: none !important;
    border: 1px solid ${colors.grey.grey3};
  }
  width: 100%;
`
const CustomEndAdorment = styled.button`
  font-style: normal;
  font-weight: 500;
  position: absolute;
  background-color: ${colors.grey.grey1};
  right: 1rem;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${colors.primary};
  cursor: pointer;
  outline: none;
  border: none;
  user-select: none;
`
interface PasswordInputPropsTypes {
  placeholder: string
}

const PasswordInput = (props: PasswordInputPropsTypes) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <CustomInput>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        placeholder={props.placeholder}
      />
      <CustomEndAdorment onClick={() => setShowPassword((p) => !p)}>
        {showPassword ? 'Hide' : 'Show'}
      </CustomEndAdorment>
    </CustomInput>
  )
}

export default PasswordInput
