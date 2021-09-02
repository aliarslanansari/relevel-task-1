import styled from 'styled-components'
import { sizes } from '../../utils/themes/media'

interface ContainerPropsTypes {
  maxWidth?: number
  padding?: number
}

const StyledContainer = styled.div<ContainerPropsTypes>`
  && {
    display: flex;
    flex-direction: column;
    ${(props) => (props.maxWidth ? `max-width:${props.maxWidth}px` : '')};
    ${(props) => (props.padding ? `padding:${props.padding}px` : '')};
    margin: 0 auto;
    @media (min-width: ${sizes.mobile}) {
      width: 82%;
      max-width: none;
    }
  }
`

const Container: React.FC<ContainerPropsTypes> = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

export default Container
