import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const CustomInput = styled.input`
  background-color: ${colors.grey.grey1};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid ${colors.grey.grey2};
  box-sizing: border-box;
  border-radius: 8px;
  &::placeholder {
    color: ${colors.grey.grey3};
  }
  margin-bottom: 1rem;
  &:focus {
    outline: none !important;
    border: 1px solid ${colors.grey.grey3};
  }
`
interface TextFieldPropsTypes {
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
const TextField = (props: TextFieldPropsTypes) => {
  return (
    <CustomInput
      type='text'
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}

export default TextField
