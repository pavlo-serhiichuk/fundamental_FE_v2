import { type FC, type ReactNode, type KeyboardEvent, type MouseEvent, useEffect, useCallback } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props
  const { theme } = useTheme()
  const mods = { [s.opened]: isOpen }

  const closeHandler = useCallback(() => {
    onClose()
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener<any>('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener<any>('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onClickContent = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Portal>
      <div className={cls(s.Modal, mods, [className, theme])}>
        <div onClick={closeHandler} className={s.overlay}>
          <div className={s.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
