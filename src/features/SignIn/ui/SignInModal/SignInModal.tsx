import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { SignInForm } from '../SignInForm/SignInForm'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getSignInData } from 'features/SignIn/state/selectors/getSignInData/getSignInData'

interface SignInModalProps {
  isOpen: boolean
  onClose?: () => void
}

export const SignInModal: FC<SignInModalProps> = (props) => {
  const { isOpen, onClose } = props
  const { error } = useSelector(getSignInData)
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={''}>
      <Text title={'Sign in'}/>
      {error ? <Text theme={'error'} text={error} /> : null}
        <SignInForm onClose={onClose} />
    </Modal>
  )
}
