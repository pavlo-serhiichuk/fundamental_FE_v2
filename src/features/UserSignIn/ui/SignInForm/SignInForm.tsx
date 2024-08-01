import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './SignInForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface SignInFormProps {
  className?: string
}

export const SignInForm: FC<SignInFormProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUsername = (value: string) => {
    setUsername(value)
  }

  const onChangePassword = (value: string) => {
    setPassword(value)
  }

  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <div className={s.inputs}>
        <Input type="text" label={'Username'} onChange={onChangeUsername} value={username} />
        <Input type="text" label={'Password'} onChange={onChangePassword} value={password} />
      </div>
      <Button className={s.signInBtn} theme={'bordered'}>{t('Sign in')}</Button>
    </div>
  )
}
