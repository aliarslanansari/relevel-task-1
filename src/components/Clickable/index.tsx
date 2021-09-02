import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const StyledClickable = styled.div`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`

const StyledSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${colors.primary};
  &:hover {
    color: ${colors.secondary};
  }
`

interface ClickablePropsTypes {
  onClick: () => void
  text: string
}

const Clickable: React.FC<ClickablePropsTypes> = (props) => {
  return (
    <StyledClickable onClick={props.onClick}>
      <StyledSpan>{props.text}</StyledSpan>
    </StyledClickable>
  )
}

export default Clickable
