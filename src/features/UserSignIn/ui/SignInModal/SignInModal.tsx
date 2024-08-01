import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { SignInForm } from '../SignInForm/SignInForm'

interface SignInModalProps {
  isOpen: boolean
  onClose?: () => void
}

export const SignInModal: FC<SignInModalProps> = (props) => {
  const { isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={''}>
        <SignInForm />
    </Modal>
  )
}
