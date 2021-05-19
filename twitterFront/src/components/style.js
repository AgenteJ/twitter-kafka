import styled from 'styled-components/native';

export const UserContainer = styled.View`
    flex-direction: row;
`;

export const TextLight = styled.Text`
    color: #9C9D9E;
 `;

export const UserName = styled.Text`
    font-weight: bold;
    margin-right: 5px;
    color: black
`;

export const RowFlex = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const CardView = styled.View`
    background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    margin-top: 10px;
    border-radius: 15px;
    min-height: 100px;
    shadow-color: #000;
    shadow-offset: {
      width: 0;
      height: 2
    };
    shadow-opacity: 0.25;
    elevation: 5;
    width: 94%;
`;

export const Container = styled.View`
    align-items: center;
    flex: 1;
`;

export const Description = styled.Text`
    margin-top: 10px;
`;