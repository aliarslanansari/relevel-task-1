import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'

const BottomNavbarContainer = styled.footer<BottomNavbarTypes>`
  background-color: ${colors.white1};
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ${(props) => (props.maxWidth ? `max-width:${props.maxWidth}px` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}px` : '')};
  margin: 0 auto;
  border-top: 1px solid ${colors.dividerColor};
`
const NavIcon = styled(Link)<{ active?: boolean }>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? colors.primary : colors.grey.grey2};
`

interface BottomNavbarTypes {
  maxWidth?: number
  padding?: number
}

const BottomNavbar = (props: BottomNavbarTypes) => {
  const location = useLocation()
  const currentLocation = location.pathname
  return (
    <BottomNavbarContainer {...props}>
      <NavIcon active={currentLocation === '/signup'} to='/signup' />
      <NavIcon active={currentLocation === '/login'} to='/login' />
    </BottomNavbarContainer>
  )
}

export default BottomNavbar
