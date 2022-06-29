import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../contexts/FormContext';
import { ChangeEvent, useContext, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const {state, dispatch} = useContext(FormContext)

    const history = useNavigate()

    useEffect( () => {
        if ( state.form.name === '' ) {
            history('/')
        } else {
        dispatch({
            type: 'CURRENT_STEP',
            payload: {
                currentStep: 2
            }
        });
        }
    }, []);
    
    
    const nextStep = () => {
        if ( state.form.name !== '' ) {
            history('/step3')
        } else {
            alert('Preencha os dados')
        }
    }

    const setLevel = (n: number) => {
        dispatch({
            type: 'LEVEL',
            payload: {
                level: n
            }
        })
    }

    return (
        <Theme>
        <C.Container>
        <p>Passo 2/4</p>
        <h1>{state.form.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr/>

        <SelectOption 
            title = "Sou iniciante"
            description = "Comecei a programar há menos de 2 anos"
            icon = "🥳"
            selected={state.form.level === 0}
            onClick={() => setLevel(0)}
        />

        <SelectOption 
            title = "Sou programador"
            description = "Já programo a 2 anos ou mais"
            icon = "😎"
            selected={state.form.level === 1}
            onClick={() => setLevel(1)}
        />

        <Link className="backButton" to="/">Voltar</Link>
        <button onClick={nextStep}>Próximo</button>
       </C.Container> 
        </Theme>
    )
}