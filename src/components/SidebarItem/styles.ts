import styles from 'styled-components';

export const Container = styles.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styles.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styles.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: white;
`;

export const Description = styles.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

export const IconArea = styles.div<{ active: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${ props => props.active ? '#25CD89' : '#494A7C' };
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styles.div< {active: boolean }>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${ props => props.active ? '#25CD89' : '#494A7C' };
`;
