import { type FC, Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { SignInFormAsync } from '../SignInForm/SignInForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

interface SignInModalProps {
  isOpen: boolean
  onClose?: () => void
}

export const SignInModal: FC<SignInModalProps> = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={''}>
        <Suspense fallback={<Loader />}>
          <SignInFormAsync onSignInSuccess={onClose} />
        </Suspense>
    </Modal>
  )
}
