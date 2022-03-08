import styled from 'styled-components';
import { Banner } from './components/Banner';
import { Featured } from './components/Featured';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Slider } from './components/Slider';


const Container = styled.div`
  padding: 1.5rem 5% 2.5rem;
  max-width: 1500px;
  margin: auto;
  position: relative;
  overflow-x: hidden;
  background-color: #171616;
`

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Featured />
      <Slider />
      <Banner />
      <Footer />
    </Container>
  );
}

export default App;
