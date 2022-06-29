import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { ChangeEvent, useContext, useEffect } from 'react';

export const FormStep1 = () => {
    const {state, dispatch} = useContext(FormContext)

    useEffect( () => {
        dispatch({
            type: 'CURRENT_STEP',
            payload: {
                currentStep: 1
            }
        });
    }, []);

    const history = useNavigate()
    
    const nextStep = () => {
        if ( state.form.name !== '' ) {
            history('/step2')
        } else {
            alert('Preencha os dados')
        }
    }

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'NAME',
            payload: {
                name: e.target.value
            }
        })
    }

    return (
        <Theme>
        <C.Container>
        <p>Passo 1/4</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr/>
        <label>
        Seu nome
            <input
                type='text'
                autoFocus
                value={state.form.name}
                onChange={nameChange}
            />
        </label>

        <button onClick={nextStep}>Próximo</button>
       </C.Container> 
        </Theme>
    )
}