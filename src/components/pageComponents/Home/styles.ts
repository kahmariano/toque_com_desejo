import styled from 'styled-components'
export const HomeWrapper = styled.div`
  font-size: 32px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background: #ea1f28;

  h3 {
    margin-top: 5px;
    font-size: 25px;
  }
`
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  p {
    font-size: 20px;
  }
  a {
    background: #ece8e9;
    color: #ea1f28;
    text-decoration: none;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
