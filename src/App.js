import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    // Fragmentを唯一の親要素とし、コンポーネントを囲む
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
