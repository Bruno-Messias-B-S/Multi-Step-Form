import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep4 = () => {
    const {state, dispatch} = useContext(FormContext)

    const history = useNavigate()

    useEffect( () => {
        if ( state.form.email === '' || state.form.github === '') {
            history('/step3')
        } else {
        dispatch({
            type: 'CURRENT_STEP',
            payload: {
                currentStep: 4
            }
        });
        }
    }, []);
    
    const finishSteps = () => {
        if ( state.form.email !== '' && state.form.github !== '' ) {
           console.log(state);
        }
    }

    return (
        <Theme>
        <C.Container>
        <p>Passo 4/4</p>
        <h2>Visão Geral</h2>
        <p>Os dados estão corretos?</p>

        <hr/>

        <div className="div-path4">
            <div><span>Nome:</span> {state.form.name}</div>
            <div><span>Nível:</span> {state.form.level === 0 ? 'Iniciante' : 'Programador'}</div>
            <div><span>E-mail:</span> {state.form.email}</div>
            <div><span>GitHub:</span> {state.form.github}</div>
        </div>

        <Link className="backButton" to="/step3">Voltar</Link>
        <button onClick={finishSteps}>Finalizar Cadastro</button>
       </C.Container> 
        </Theme>
    )
}