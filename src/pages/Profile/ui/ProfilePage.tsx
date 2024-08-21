import { useEffect } from 'react'
import { type ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad'
import { profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData'
import { EditProfileCard } from 'features/EditProfileCard'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { onActivateDynamicLoad } = useDynamicReducerLoad(reducers, false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onActivateDynamicLoad()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!window.location.href.includes('6006')) {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  return (
    <>
      <EditProfileCard />
    </>
  )
}

export default ProfilePage
