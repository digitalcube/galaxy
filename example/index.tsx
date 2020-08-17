import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading, Brand, Post, Card } from "../dist"

const App = () => {
  return (
    <>
    <div style={{background: '#000'}}>
      <Brand />
    </div>
    <Heading>Hello World</Heading>
    <Post
      content={{
        title: 'hello',
        subtitle: 'world',
        excerpt: 'It is a test content'
      }}
    />
    <Card
      content={{
        header: {
          title: 'Card test',
        },
        footer: {
          title: 'Card Footer'
        }
      }}
    />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
