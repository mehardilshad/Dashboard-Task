import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import ButtonLoader from '../genaral/Loader/ButtonLoader'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [hide, setHide] = useState(true)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 2200)
  }, [isError])

  const handlePasswordShow = () => {
    setHide(!hide)
  }

  return (
    <Contains>
      <Credentials>
        <Title>Login</Title>
        <Description>login to to your account</Description>
        <Middle>
          <UserInput>
            <Icon
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/message.svg"
              alt="message"
            />
            <InputField
              type="text"
              placeholder="Your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </UserInput>
          <PasswdInput>
            <Icon
              src={
                hide
                  ? 'https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/lock.svg'
                  : 'https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/unlock.svg'
              }
            />
            <InputField
              type={hide ? 'password' : 'text'}
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeSpan>
              <Eye
                onClick={handlePasswordShow}
                style={{ cursor: 'pointer' }}
                src={
                  hide
                    ? 'https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/hide.svg'
                    : 'https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/01-02-2022/images/eye.svg'
                }
              />
            </EyeSpan>
          </PasswdInput>
          <LinkSection isError={isError}>
            {isError && <ErrorSpan>{errorMsg}</ErrorSpan>}
          </LinkSection>
        </Middle>
        <BottomButton to="/dashboard/" onClick={(e) => {}}>
          {isLoading ? <ButtonLoader /> : 'Login'}
        </BottomButton>
      </Credentials>
    </Contains>
  )
}

export default Login

const Contains = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 0px 53px;
  background: #1b1c1f;
  margin: 0 auto;
  position: absolute;
  z-index: 11111111111;
  @media (max-width: 1100px) {
    width: 45%;
  }
  @media (max-width: 980px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 660px) {
    width: 80%;
  }
  @media (max-width: 740px) {
    padding: 0px 44px;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
    padding: 0px 30px;
  }
`
const LogoSpan = styled.div`
  display: block;
  margin-bottom: 52px;
  width: 114px;
  @media (max-width: 640px) {
    display: block;
    width: 55px;
  }
  @media (max-width: 480px) {
    width: 55px;
  }
`
const Logo = styled.img`
  width: 100%;
  display: block;
  @media (max-width: 680px) {
    display: block;
  }
`
const Credentials = styled.div``
const ShapeSpan = styled.span`
  display: block;
  width: 29px;
  height: 29px;
  @media (max-width: 640px) {
    display: none;
  }
`
const Shape = styled.img`
  display: block;
  width: 100%;
`
const Title = styled.h2`
  text-align: center;
  letter-spacing: 0px;
  font-size: 27px;
  font-family: 'gordita_medium';
  line-height: 1.4em;
  margin-top: 20px;
  color: #fff;
  @media (max-width: 640px) {
    font-size: 25px;
  }
`
const Description = styled.p`
  text-align: center;
  letter-spacing: 0px;
  font-size: 16px;
  color: #fff;
  opacity: 1;
  margin: 18px 0px 40px;
  @media (max-width: 680px) {
    margin: 13px 0px 30px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    margin: 13px 0px 20px;
  }
`
const UserInput = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(47, 51, 55);
  border-image: initial;
  border-radius: 10px;
  padding: 15px;
  @media (max-width: 480px) {
    padding: 10px;
  }
  &:focus-within {
    border-color: #5cc66a;
  }
  font-family: 'gordita_medium';
`
const PasswdInput = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(47, 51, 55);
  border-image: initial;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  @media (max-width: 480px) {
    padding: 10px;
  }
  &:focus-within {
    border-color: #5cc66a;
  }
`
const Icon = styled.img`
  max-width: 23px;
  max-height: 23px;
  display: block;
`
const InputField = styled.input`
  width: 100%;
  font-size: 18px;
  margin-left: 15px;
  color: #fff;
  font-family: 'gordita_regular';
  // opacity:.5;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`
const EyeSpan = styled.span`
  max-width: 25px;
  max-height: 25px;
  display: block;
`
const Eye = styled.img`
  width: 100%;
  display: block;
`
const BottomButton = styled(Link)`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 10px 50px;
  /* background: #2bc871; */
  background: #1a267f;
  border-radius: 10px;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 18px;
  font-family: 'gordita_medium';
  text-align: center;
  @media (max-width: 480px) {
    height: 44px;
    font-size: 15px;
  }
`
const Middle = styled.div`
  position: relative;
`
const LinkSection = styled.div`
  position: absolute;
  bottom: -31px;
  display: flex;
  justify-content: ${(props) => (props.isError ? 'space-between' : 'flex-end')};
  align-items: center;
`
const ErrorSpan = styled.span`
  color: #f44336;
  font-size: 15px;
  display: block;
`
const FullCover = styled.div`
  /* display: flex; */
`
