import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './SignInForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getSignInData } from 'features/SignIn/state/selectors/getSignInData/getSignInData'
import { signInActions } from 'features/SignIn'
import { fetchSignIn } from 'features/SignIn/state/thunks/fetchSignIn'

interface SignInFormProps {
  className?: string
  onClose?: () => void
}

export const SignInForm: FC<SignInFormProps> = (props) => {
  const { t } = useTranslation()
  const { className, onClose } = props
  const { password, username, isLoading } = useSelector(getSignInData)
  const dispatch = useDispatch()

  const onChangeUsername = (value: string) => {
    dispatch(signInActions.setUsername(value))
  }

  const onChangePassword = (value: string) => {
    dispatch(signInActions.setPassword(value))
  }

  const onSignIn = () => {
    dispatch(fetchSignIn({ password, username }))
    onClose?.()
  }
  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <div className={s.inputs}>
        <Input type="text" label={'Username'} onChange={onChangeUsername} value={username} />
        <Input type="text" label={'Password'} onChange={onChangePassword} value={password} />
      </div>
      <Button disabled={isLoading} onClick={onSignIn} className={s.signInBtn} theme={'bordered'}>{t('Sign in')}</Button>
    </div>
  )
}
