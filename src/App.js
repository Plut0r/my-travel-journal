import './App.css';
import Header from './Header';
import {data} from './data';
import Card from "./Card";

function App() {
  const card = data.map(item => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div className="App">
       <Header />
       <section className='section'>
       {card}
       </section>
    </div>
  );
}

export default App;
