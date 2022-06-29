import styles from 'styled-components'

export const Container = styles.div`
    background-color: #02044A;
    color: white;
    height: 100vh;
`

export const Area = styles.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styles.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styles.div`
    width: 250px;
    border-right: 1px solid #16195C;
`;

export const Page = styles.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;