import { type FC, useCallback, useEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './SignInForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getSignInData } from 'features/SignIn/state/selectors/getSignInData/getSignInData'
import { signInActions, signInReducer } from 'features/SignIn'
import { fetchSignIn } from 'features/SignIn/state/thunks/fetchSignIn'
import { Text } from 'shared/ui/Text/Text'
import { type ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export interface SignInFormProps {
  className?: string
  onSignInSuccess: () => void
  isStory?: boolean
}

const initialReducers: ReducersList = { signIn: signInReducer }

const SignInForm: FC<SignInFormProps> = (props) => {
  const { t } = useTranslation()
  const { className, onSignInSuccess } = props
  const { password, username, isLoading, error } = useSelector(getSignInData)
  const dispatch = useAppDispatch()
  const { onActivateDynamicLoad } = useDynamicReducerLoad(initialReducers)

  useEffect(() => {
    onActivateDynamicLoad()
    // eslint-disable-next-line
  }, [])

  const onChangeUsername = (value: string) => {
    dispatch(signInActions.setUsername(value))
  }

  const onChangePassword = (value: string) => {
    dispatch(signInActions.setPassword(value))
  }

  const onSignIn = useCallback(async () => {
    // eslint-disable-next-line
    const res: any = await dispatch(fetchSignIn({ password, username }))
    if (res.meta.requestStatus === 'fulfilled') {
      onSignInSuccess()
    }
  }, [dispatch, onSignInSuccess, username, password])

  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <Text title={'Sign in'} />
      {error ? <Text theme={'error'} text={error} /> : null}
      <div className={s.inputs}>
        <Input type="text" label={'Username'} onChange={onChangeUsername} value={username} />
        <Input type="text" label={'Password'} onChange={onChangePassword} value={password} />
      </div>
      <Button disabled={isLoading} onClick={onSignIn} className={s.signInBtn} theme={'bordered'}>{t('Sign in')}</Button>
    </div>
  )
}

export default SignInForm
