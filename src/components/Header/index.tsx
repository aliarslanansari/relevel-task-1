import { SVGProps } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/themes/colors'
import Clickable from '../Clickable'

const StyledHeader = styled.header<HeaderPropsTypes>`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
  ${(props) => props.darkTheme && 'color:' + colors.white};
`

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  margin: 0 auto;
  justify-self: center;
`

const IconWrapper = styled.div`
  cursor: pointer;
  justify-self: start;
`

interface HeaderPropsTypes {
  darkTheme?: boolean
  leftText?: string
  leftOnClick?: () => void
  rightText?: string
  rightOnClick?: () => void
  title: string
  LeftIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const Header = (props: HeaderPropsTypes) => {
  const { leftOnClick, leftText, rightOnClick, rightText, title, LeftIcon } =
    props
  return (
    <StyledHeader {...props}>
      {LeftIcon && leftOnClick ? (
        <IconWrapper onClick={leftOnClick}>
          <LeftIcon />
        </IconWrapper>
      ) : (
        leftText &&
        leftOnClick && (
          <Clickable
            onClick={leftOnClick}
            text={leftText}
            color={props.darkTheme ? colors.white : undefined}
          />
        )
      )}
      <StyledTitle>{title}</StyledTitle>
      {rightText && rightOnClick && (
        <Clickable
          onClick={rightOnClick}
          text={rightText}
          color={props.darkTheme ? colors.white : undefined}
        />
      )}
    </StyledHeader>
  )
}

export default Header
