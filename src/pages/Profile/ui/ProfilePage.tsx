import { type FC, useEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { type ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props
  const { onActivateDynamicLoad } = useDynamicReducerLoad(reducers)

  useEffect(() => {
    onActivateDynamicLoad()
  }, [onActivateDynamicLoad])

  return (
    <div className={cls('', {}, [className])}>
        {t('Profile page')}
    </div>
  )
}

export default ProfilePage
