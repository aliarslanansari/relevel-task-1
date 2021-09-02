import styled, { keyframes } from 'styled-components'
import { colors } from './../../utils/themes/colors'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${colors.primary};
  border-right: 2px solid ${colors.primary};
  border-bottom: 2px solid ${colors.primary};
  border-left: 4px solid ${colors.secondary};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export default Spinner
