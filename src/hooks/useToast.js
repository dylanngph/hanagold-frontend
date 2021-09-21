import { ToastsContext } from 'contexts/ToastsContext/Provider';
import { useContext } from 'react'

const useToast = () => {
  const toastContext = useContext(ToastsContext)

  if (toastContext === undefined) {
    throw new Error('Toasts context undefined')
  }

  return toastContext
}

export default useToast
