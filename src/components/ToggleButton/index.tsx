import Button from '../Button'
import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const ToggleButtonContainer = styled.div`
  display: flex;
  border-radius: 100px;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${colors.grey.grey2};
  box-sizing: border-box;
  justify-content: center;
  background-color: ${colors.grey.grey1};
`
interface ToggleButtonPropTypes {
  onChange: (sectionIndex: number) => void
  sectionIndex: number
}

const ToggleButton = (props: ToggleButtonPropTypes) => {
  return (
    <ToggleButtonContainer>
      <Button
        label='Posts'
        disableThemeOnly
        onClick={() => {
          props.onChange(0)
        }}
        variant={props.sectionIndex === 0 ? 'secondary' : 'disabled'}
        disabled={props.sectionIndex === 0 ? false : true}
        bgColor={props.sectionIndex === 0 ? colors.white : undefined}
      />
      <Button
        disableThemeOnly
        onClick={() => {
          props.onChange(1)
        }}
        label='Photos'
        variant={props.sectionIndex === 1 ? 'secondary' : 'disabled'}
        disabled={props.sectionIndex === 1 ? false : true}
        bgColor={props.sectionIndex === 1 ? colors.white : undefined}
      />
    </ToggleButtonContainer>
  )
}

export default ToggleButton
