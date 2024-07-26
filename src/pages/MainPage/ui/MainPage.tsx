import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      {t('Main Page')} <br/>
    </div>
  )
}

export default MainPage
