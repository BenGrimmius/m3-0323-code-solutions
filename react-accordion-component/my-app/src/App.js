import './App.css';
import Accordion from './Accordion';

const topics = [
  { id: 1, name: 'Fungus', description: 'A fungus is any member of the group of eukaryotic organisms that includes microorganisms such as yeasts and molds, as well as the more familiar mushrooms.'},
  { id: 2, name: 'Tree', description: 'A tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow.'},
  { id: 3, name: 'Algae', description: 'A simple, nonflowering, and typically aquatic plant of a large group that includes the seaweeds and many single-celled forms. Algae contain chlorophyll but lack true stems, roots, leaves, and vascular tissue.'}
]

function App() {

  return (
    <div className="container">
      <ul>
        <Accordion topics={topics} />
      </ul>
    </div>
  );
}

export default App;
