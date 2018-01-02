import { createSelector } from 'reselect'

export const selectDomain = () => state => state.Video

export const selectVideos = () =>
  createSelector(selectDomain(), s => {
    return s.get('gallery')
  })

export const selectVideo = () =>
  createSelector(selectDomain(), s => {
    return s.get('current')
  })

export const selectResolution = () =>
  createSelector(selectDomain(), s => {
    return s.get('selectedResolution')
  })
