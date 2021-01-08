import {  useState } from 'react';
import Accordion from './components/Accordion';
import Counter from './components/Counter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
           selected={selected}
           onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
};
