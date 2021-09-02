import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

interface ButtonPropsTypes {
  label: string
  mt?: string
  onClick: () => void
  mb?: string
}

const CustomButton = styled.button<ButtonPropsTypes>`
  ${(props) => props.mb && 'margin-bottom: ' + props.mb};
  ${(props) => props.mt && 'margin-top: ' + props.mt};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primary};
  border-radius: 100px;
  border: none;
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background: ${colors.secondary};
  }
`

const Button = (props: ButtonPropsTypes) => {
  const { label } = props

  return <CustomButton {...props}>{label}</CustomButton>
}

export default Button
