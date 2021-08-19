import styled from 'styled-components'


//eslint-disable-next-line
const Container = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center;
    height: 100vh;
`
//eslint-disable-next-line
const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`
<Container>
    <Button></Button>
</Container>
console.log(Container, Button)