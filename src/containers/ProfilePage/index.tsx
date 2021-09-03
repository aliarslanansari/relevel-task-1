import { useHistory } from 'react-router'
import styled from 'styled-components'
import Head from '../../components/Head'
import Header from '../../components/Header'
import { colors } from '../../utils/themes/colors'
import profilePicture from '../../assets/images/girl_profile_picture.jpg'
import ToggleButton from '../../components/ToggleButton'
import { useState } from 'react'

const MainWrapper = styled.div`
  position: relative;
  text-align: center;
`

const UpperSection = styled.div`
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
  background-color: ${colors.primary};
  position: absolute;
  height: 200px;
  left: 0;
  right: 0;
  z-index: -99;
`
const ProfileImageDiv = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: ${colors.white};
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid ${colors.white};
  box-shadow: 0px 4px 20px 0px #65656526;
`

const ProfileImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`
const ProfileName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 2rem;
  margin-bottom: 0;
`
const MantraText = styled.h2`
  margin-top: 0.5rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
`

const ProfilePage = () => {
  const history = useHistory()
  const onHeaderRightLinkClick = () => {
    history.push('/login')
  }
  const [sectionIndex, setSectionIndex] = useState(0)

  const onSectionChange = (sectionIndex: number) => {
    setSectionIndex(sectionIndex)
  }
  return (
    <>
      <MainWrapper>
        <UpperSection />
        <Head title='Sign Up' />
        <Header
          title='Profile'
          leftOnClick={() => {}}
          rightOnClick={onHeaderRightLinkClick}
          rightText='Logout'
          leftText='Settings'
          darkTheme
        />
        <ProfileImageDiv>
          <ProfileImage src={profilePicture} />
        </ProfileImageDiv>
        <ProfileName>Victoria Robertson</ProfileName>
        <MantraText>A mantra goes here</MantraText>
        <ToggleButton onChange={onSectionChange} sectionIndex={sectionIndex} />
      </MainWrapper>
    </>
  )
}

export default ProfilePage
