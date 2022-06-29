import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { ChangeEvent, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
    const {state, dispatch} = useContext(FormContext)

    const history = useNavigate()

    useEffect( () => {
        if ( state.form.name === '' ) {
            history('/')
        } else {
        dispatch({
            type: 'CURRENT_STEP',
            payload: {
                currentStep: 3
            }
        });
        }
    }, []);
    
    const nextStep = () => {
        if ( state.form.email !== '' && state.form.github !== '' ) {
            history('/step4')
        } else {
            alert('Preencha os dados')
        }
    }

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'EMAIL',
            payload: {
                email: e.target.value
            }
        })
    }

    const githubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'GITHUB',
            payload: {
                github: e.target.value
            }
        })
    }

    return (
        <Theme>
        <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal, {state.form.name}, onde te achamos?</h1>
        <p>Preencha para conseguirmos entrar em contato.</p>

        <hr/>

        <label>
        Qual o seu e-mail?
            <input
                type='email'
                value={state.form.email}
                onChange={emailChange}
            />
        </label>

        <label>
        Qual o seu GitHub?
            <input
                type='url'
                value={state.form.github}
                onChange={githubChange}
            />
        </label>

        <Link className="backButton" to="/step2">Voltar</Link>
        <button onClick={nextStep}>Próximo</button>
       </C.Container> 
        </Theme>
    )
}