import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import s from './LangSwitcher.module.scss'

interface LandSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LandSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation()
  const { className } = props

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
    <Button
      theme={'clear'}
      onClick={toggleLanguage}
      className={cls(s.LangSwitcher, {}, [className])}>
      {t('Lang')}
    </Button>
  )
}
