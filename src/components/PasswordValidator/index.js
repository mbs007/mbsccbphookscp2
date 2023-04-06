// Write your code here
import {useState} from 'react'
import {
  MainDiv,
  InnerDiv,
  Head,
  Para,
  PwdInput,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const errorMsg = 'Your password must be at least 8 characters'
  const [pwdInput, setPwdInput] = useState('')

  return (
    <MainDiv>
      <InnerDiv>
        <Head>Password Validator</Head>
        <Para>Check how strong and secure is your password</Para>
        <PwdInput
          type="password"
          value={pwdInput}
          onChange={e => {
            setPwdInput(e.target.value)
          }}
        />
        {pwdInput.length >= 8 ? null : <ErrMsg>{errorMsg}</ErrMsg>}
      </InnerDiv>
    </MainDiv>
  )
}

export default PasswordValidator
