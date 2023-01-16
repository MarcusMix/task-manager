import styled from 'styled-components'

export const TasksContainer = styled.div `
    padding: 60px 85px;
    display: flex;
    flex-direction: column;
    max-width: 40%;
    padding-top: 50px;
    height: 100vh;
`
    
export const TaskTitle = styled.h2 `
    margin-bottom: 24px;
`

export const TaskFont = styled.h3 `
    font-size: 18px;

`
export const LastTasks = styled.div `
    flex: 1;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
`

export const TaskList = styled.div `
    margin-top: 28px;
`
    
export const CompletedTasks = styled.div `
    flex: 1;
    padding-top: 28px;
`
