import { type FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface ThrowErrorButtonProps {
  className?: string
}

// for testing ErrorBoundaries provider
export const ThrowErrorButton: FC<ThrowErrorButtonProps> = (props) => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const onThrow = () => {
    setError(true)
  }
  return (
    <Button onClick={onThrow}>
        {t('throw error')}
    </Button>
  )
}
