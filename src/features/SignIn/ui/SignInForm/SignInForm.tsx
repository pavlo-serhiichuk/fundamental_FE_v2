import { type FC, useCallback, useEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './SignInForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
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
  const data = useSelector(getSignInData)
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
    const requestData = {
      password: data?.password || '', username: data?.username || ''
    }
    // eslint-disable-next-line
    const res: any = await dispatch(fetchSignIn(requestData))
    if (res.meta.requestStatus === 'fulfilled') {
      onSignInSuccess()
    }
  }, [dispatch, onSignInSuccess, data])

  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <Text title={'Sign in'} />
      {data?.error ? <Text theme={'error'} text={data?.error} /> : null}
      <div className={s.inputs}>
        <Input type="text" label={'Username'} onChange={onChangeUsername} value={data?.username} />
        <Input type="text" label={'Password'} onChange={onChangePassword} value={data?.password} />
      </div>
      <Button disabled={data?.isLoading} onClick={onSignIn} className={s.signInBtn} theme={'bordered'}>{t('Sign in')}</Button>
    </div>
  )
}

export default SignInForm
