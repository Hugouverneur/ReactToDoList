import { render, screen } from '@testing-library/react';
import App from './App';
import TaskList from './components/TaskList/TaskList'

let { createItem, editItem, setEditItem } = require("./App")

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDoList/i);
  expect(linkElement).toBeInTheDocument();
});

test('Create task', () => {
  render(<TaskList createItem={createItem} />)
});