import { store } from "."
import { setErrorAction } from "./action"
import { clearErrorAction } from "./api-actions"

export const proccessErrorHandle = (message: string): void => {
  store.dispatch(setErrorAction(message))
  store.dispatch(clearErrorAction())
}
