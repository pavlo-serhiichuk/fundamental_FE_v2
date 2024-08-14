import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation('profile')
  const { className } = props
  const data = useSelector(getProfileData)
  const dispatch = useAppDispatch()
  console.log(111, data)
  return (
    <div className={cls(s.ProfileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Profile')} />
        <Button theme={'bordered'}>{t('Edit')}</Button>
      </div>
      <div className={s.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Your name...')}
          label={t('Name')}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your lastname...')}
          label={t('Lastname')}
        />
      </div>
    </div>
  )
}
