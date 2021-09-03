import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const StyledClickable = styled.div`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`

const StyledSpan = styled.span<{ color?: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${colors.primary};
  ${(props) => props.color && 'color:' + props.color};
  &:hover {
    color: ${colors.secondary};
    ${(props) => props.color && 'color:' + props.color};
  }
`

interface ClickablePropsTypes {
  onClick: () => void
  text: string
  color?: string
}

const Clickable: React.FC<ClickablePropsTypes> = (props) => {
  return (
    <StyledClickable onClick={props.onClick}>
      <StyledSpan color={props.color}>{props.text}</StyledSpan>
    </StyledClickable>
  )
}

export default Clickable
