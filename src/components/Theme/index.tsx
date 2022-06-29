import * as C from '../Theme/styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { FormContext } from '../../contexts/FormContext';
import { useContext } from 'react';

type Props = {
    children: React.ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useContext(FormContext)

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title = "Pessoal"
                            description = "Identifique-se"
                            icon = "profile"
                            path = "/"
                            active = { state.form.currentStep === 1 }
                        />

                        <SidebarItem
                            title = "Profissional"
                            description = "Seu nível"
                            icon = "book"
                            path = "/step2"
                            active = { state.form.currentStep === 2 }
                        />

                        <SidebarItem
                            title = "Contatos"
                            description = "Como te achar"
                            icon = "mail"
                            path = "/step3"
                            active = { state.form.currentStep === 3 }
                        />

                        <SidebarItem
                            title = "Revisão"
                            description = "Seus dados"
                            icon = "file"
                            path = "/step4"
                            active = { state.form.currentStep === 4 }
                        />
                    </C.Sidebar>
                    <C.Page>
                        { children }
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}