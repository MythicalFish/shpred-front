import { createSelector } from 'reselect'

export const selectDomain = () => state => state.Video

export const selectVideo = () =>
  createSelector(selectDomain(), s => {
    return s.get('attributes')
  })
