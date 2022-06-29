import { createContext, useReducer } from "react";
import { FormContextType, formInitialState, formReducer } from "../reducers/FormReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    form: FormContextType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>;
}

const initialState = {
    form: formInitialState
}

export const FormContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = ({ form }: initialStateType, action: reducerActionType) => ({
   form: formReducer( form, action ) 
})

type Props = {
    children: React.ReactNode
}

export const FormProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer( mainReducer, initialState )

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            { children }
        </FormContext.Provider>
    )
}

