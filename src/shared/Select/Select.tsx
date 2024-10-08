import { type ChangeEvent, type FC, memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Select.module.scss'
import { useTranslation } from 'react-i18next'

interface SelectProps {
  className?: string
  options: any[]
  onChange?: (value: any) => void
  value?: any
  selectName: string
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const { t } = useTranslation()
  const { className, options, onChange, selectName, value, readonly } = props

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }
  return (
    <div className={cls(s.SelectWrapper, {}, [className])}>
      <span>{t(selectName)}:</span>
      <select value={value} disabled={readonly} onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
)
