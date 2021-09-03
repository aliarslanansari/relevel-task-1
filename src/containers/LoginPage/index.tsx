import styled from 'styled-components'
import Button from '../../components/Button'
import Clickable from '../../components/Clickable'
import Head from '../../components/Head'
import Header from '../../components/Header'
import PasswordInput from '../../components/PasswordInput'
import TextField from '../../components/TextField'
import { colors } from '../../utils/themes/colors'
import { useHistory } from 'react-router'

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

const LoginPage = () => {
  const history = useHistory()
  return (
    <>
      <Head title='Login' />
      <Header title='Login' />
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <TextField placeholder='Email' onChange={() => {}} />
        <PasswordInput placeholder='Password' />
        <Button
          label='Login'
          mt='2.7rem'
          onClick={() => {
            history.push('/profile')
          }}
        />
        <ForgotPassword>
          <Clickable text='Forgot your password?' onClick={() => {}} />
        </ForgotPassword>
      </StyledForm>
    </>
  )
}

export default LoginPage
