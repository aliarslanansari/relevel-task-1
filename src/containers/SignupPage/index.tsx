import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import CrossIcon from '../../assets/icons/CrossIcon'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import Clickable from '../../components/Clickable'
import Head from '../../components/Head'
import Header from '../../components/Header'
import PasswordInput from '../../components/PasswordInput'
import TextField from '../../components/TextField'
import { colors } from '../../utils/themes/colors'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ForgotPassword = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 19px;
  color: ${colors.primary};
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${colors.secondary};
  }
`

const SignupPage = () => {
  const history = useHistory()
  const [checked, setChecked] = useState(false)
  const onHeaderRightLinkClick = () => {
    history.push('/login')
  }
  return (
    <>
      <Head title='Sign Up' />
      <Header
        title='Sign Up'
        leftOnClick={onHeaderRightLinkClick}
        rightOnClick={onHeaderRightLinkClick}
        rightText='Login'
        LeftIcon={() => <CrossIcon />}
      />
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <TextField onChange={() => {}} placeholder='Name' />
        <TextField onChange={() => {}} placeholder='Email' />
        <PasswordInput placeholder='Password' />
        <Checkbox
          marginTop={'1rem'}
          checked={checked}
          onChange={() => setChecked((c) => !c)}
          label='I would like to receive your newsletter and other promotional information.'
        />
        <Button label='Sign Up' mt='2.7rem' onClick={() => {}} />
      </StyledForm>
      <ForgotPassword>
        <Clickable text='Forgot your password?' onClick={() => {}} />
      </ForgotPassword>{' '}
    </>
  )
}

export default SignupPage
