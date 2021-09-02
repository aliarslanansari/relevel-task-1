import styled from 'styled-components'
import EmptyCheckBoxIcon from '../../assets/icons/EmptyCheckBoxIcon'
import FilledIcon from '../../assets/icons/FilledTickIcon'
import { colors } from '../../utils/themes/colors'

interface CheckboxPropsTypes {
  checked: boolean
  onChange: () => void
  label?: string
  marginTop?: string
  marginBottom?: string
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 0px;
  padding: 0;
  width: 0px;
  display: none;
`
const StyledLabel = styled.label`
  user-select: none;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: ${colors.grey.grey4};
  cursor: pointer;
`
const CheckboxContainer = styled.div<Partial<CheckboxPropsTypes>>`
  display: flex;
  width: 100%;
  ${(props) => props.marginBottom && 'margin-bottom: ' + props.marginBottom};
  ${(props) => props.marginTop && 'margin-top: ' + props.marginTop};
  cursor: pointer;
`
const IconWrapper = styled.div`
  margin-right: 0.5rem;
`

const Checkbox = (props: CheckboxPropsTypes) => {
  const { checked, onChange, label } = props
  return (
    <CheckboxContainer {...props} onChange={() => {}} onClick={() => {}}>
      <IconWrapper onClick={onChange}>
        {checked ? <FilledIcon /> : <EmptyCheckBoxIcon />}
      </IconWrapper>
      <StyledLabel>
        <HiddenCheckbox checked onChange={onChange} />
        {label}
      </StyledLabel>
    </CheckboxContainer>
  )
}

export default Checkbox
