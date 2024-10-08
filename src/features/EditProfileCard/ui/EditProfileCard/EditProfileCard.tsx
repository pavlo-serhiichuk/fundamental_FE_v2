import { type FC, useCallback } from 'react'
import { ProfileCard } from 'features/EditProfileCard'
import { EditProfileHeader } from 'features/EditProfileCard/ui/EditProfileHeader/EditProfileHeader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getProfileForm, profileActions } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'

interface EditProfileCardProps {
  className?: string
}

export const EditProfileCard: FC<EditProfileCardProps> = (props) => {
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const form = useSelector(getProfileForm)

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({ name: value }))
  }, [dispatch])
  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({ lastname: value }))
  }, [dispatch])
  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({ age: Number(value) }))
  }, [dispatch])
  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({ avatar: value }))
  }, [dispatch])

  return (
    <>
        <EditProfileHeader />
        <ProfileCard
          form={form}
          readonly={!!readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
        />
    </>
  )
}
