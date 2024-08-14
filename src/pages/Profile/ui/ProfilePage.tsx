import { useEffect } from 'react'
import { type ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad'
import { ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchProfileData } from 'entities/Profile/model/thunk/fetchProfileData'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = () => {
  const { onActivateDynamicLoad } = useDynamicReducerLoad(reducers, false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  useEffect(() => {
    onActivateDynamicLoad()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <ProfileCard />
    </>
  )
}

export default ProfilePage
