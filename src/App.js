import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href='/'
          onClick={(evt) => {
            console.log('evt', evt);
            evt.preventDefault();
            props.onSelect();
          }}
        >
          WWW
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Nav(props) {
  const liTags = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a
          href={'/read/' + e.id}
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect(e.title);
          }}
        >
          {e.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{liTags}</ol>
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB!'></Article>;
  } else if (mode === 'READ') {
    content = <Article title='READ' body='Hello, READ!'></Article>;
  }
  function createHandler() {
    alert('create');
  }
  return (
    <div>
      <Header
        onSelect={() => {
          // mode = 'WELCOME';
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        data={topics}
        onSelect={(id) => {
          // mode = 'READ';
          setMode('READ');
        }}
      ></Nav>
      {content}
      <ButtonGroup
        variant='outlined'
        aria-label='outlined primary button group'
      >
        <Button variant='outlined' onClick={createHandler}>
          Create
        </Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>delete</Button>
    </div>
  );
}

export default App;
