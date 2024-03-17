import {FC, useCallback} from 'react'
import {cls} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import s from './LangSwitcher.module.scss'
import {Button} from 'shared/ui/Button'

interface LandSwitcherProps {
  className?: string;
}

export const LangSwitcher:FC<LandSwitcherProps> = (props) => {
  const {t, i18n} = useTranslation()
  const { className } = props

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua': 'en')
  }

  return (
    <Button onClick={toggleLanguage} className={cls(s.LandSwitcher, {}, [className])}>
      {t('language')}
    </Button>
  );
};