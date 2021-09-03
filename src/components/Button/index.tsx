import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

interface ButtonPropsTypes {
  label: string
  mt?: string
  onClick: () => void
  mb?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'disabled'
  bgColor?: string
  disableThemeOnly?: boolean
}

const CustomButton = styled.button<ButtonPropsTypes>`
  width: 100%;
  ${(props) => props.mb && 'margin-bottom: ' + props.mb};
  ${(props) => props.mt && 'margin-top: ' + props.mt};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.disabled || props.variant === 'disabled'
      ? colors.grey.grey1
      : props.variant
      ? props.variant === 'primary'
        ? colors.primary
        : colors.grey.grey1
      : colors.primary};

  border-radius: 100px;
  border: none;
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${(props) =>
    props.disabled || props.variant === 'disabled'
      ? colors.grey.grey3
      : props.variant
      ? props.variant === 'primary'
        ? colors.white
        : colors.secondary
      : colors.white};
  cursor: pointer;
  ${(props) => props.bgColor && 'background:' + props.bgColor};
  &:hover {
    background: ${(props) =>
      props.disabled || props.variant === 'disabled'
        ? colors.grey.grey1
        : props.variant
        ? props.variant === 'primary'
          ? colors.secondary
          : colors.grey.grey1
        : colors.secondary};
    ${(props) => props.bgColor && 'background:' + props.bgColor};
  }
`

const Button = (props: ButtonPropsTypes) => {
  const { label } = props

  return (
    <CustomButton
      {...props}
      disabled={
        props.disableThemeOnly !== undefined
          ? !props.disableThemeOnly
          : props.disabled
      }>
      {label}
    </CustomButton>
  )
}

export default Button
