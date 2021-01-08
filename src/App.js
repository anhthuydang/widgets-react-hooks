// import Accordian from './components/Accordion';
// import Counter from './components/Counter';
// import Search from './components/Search';
import {  useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use react?',
    content: 'It is a favourite framework'
  },
  {
    title: 'How do you use React?',
    content: 'Use react by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

function App() {
  // const [selected, setSelected] = useState(options[0]);
  // const[showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
      selected={selected}
      onSelectedChange={setSelected} 
      options={options}/> : null } */}
    </div>
      
  );
}

export default App;
