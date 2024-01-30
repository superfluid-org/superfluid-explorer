import { DebouncedFunc } from 'lodash'
import debounce from 'lodash/debounce'
import { useRef } from 'react'

const useDebounce = <T extends (...args: any) => any>(
  func: T,
  timeout: number
): DebouncedFunc<T> => {
  const throttleFunc = useRef(debounce(func, timeout))

  return throttleFunc.current
}

export default useDebounce
