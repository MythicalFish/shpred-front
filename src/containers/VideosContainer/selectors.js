import { createSelector } from 'reselect'

export const selectDomain = () => state => state.Videos

export const selectVideos = () =>
  createSelector(selectDomain(), s => {
    console.log(s)
    return s.get('list')
  })
