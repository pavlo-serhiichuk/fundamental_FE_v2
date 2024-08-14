import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  type?: string
  className?: string
  label?: string
  value?: string | undefined
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const { t } = useTranslation()
  const { className, label = '', type = 'text', value = '', onChange, ...otherProps } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cls(s.Input, {}, [className])}>
      {label ? <div>{t(label)}:</div> : null}
        <input value={value} onChange={onChangeHandler} type={type} {...otherProps} />
    </div>
  )
})
