import { AUTH } from '../constants/actionTypes'

import * as api from '../api/index.js'

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData)
    dispatch({ type: AUTH, data })
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData)
    dispatch({ type: AUTH, data })
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}
