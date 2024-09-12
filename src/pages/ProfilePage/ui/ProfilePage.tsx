import { profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { EditProfileCard } from 'features/EditProfileCard'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchProfileData())
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <EditProfileCard />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
