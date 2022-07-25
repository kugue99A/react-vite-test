import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'

export type State = {
  displayModal: boolean
  modalView: string
}

const initialState = {
  displayModal: false,
  modalView: 'CREATE_VIEW',
}

type Action =
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }
  | {
      type: 'SET_MODAL_VIEW'
      view: MODAL_VIEWS
    }

type MODAL_VIEWS = 'CREATE_VIEW' | 'UPDATE_VIEW' | 'DELETE_VIEW'

export const UIContext = createContext<State>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      }
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      }
    }
  }
}

type UIProviderProps = {
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openModal = useCallback(() => dispatch({ type: 'OPEN_MODAL' }), [dispatch])
  const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), [dispatch])
  const setModalView = useCallback(
    (view: MODAL_VIEWS) => dispatch({ type: 'SET_MODAL_VIEW', view }),
    [dispatch]
  )

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
    }),
    [state]
  )
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

type ManagedUIContextProps = {
  children: ReactNode
}

export const ManagedUIContext: FC<ManagedUIContextProps> = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}
