import { reducerActionType } from "../types/reducerActionType";

export type FormContextType = {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
}

export const formInitialState: FormContextType = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

export const formReducer = (state: FormContextType, action: reducerActionType) => {
    switch ( action.type ) {
        case 'CURRENT_STEP':
            return {...state, currentStep: action.payload.currentStep}
        break;
        case 'NAME':
            return {...state, name: action.payload.name}
        break;
        case 'LEVEL':
            return {...state, level: action.payload.level}
        break;
        case 'EMAIL':
            return {...state, email: action.payload.email}
        break;
        case 'GITHUB':
            return {...state, github: action.payload.github}
        break;
        default:
            throw new Error(`${action.type} action is not supported`);
    }

}