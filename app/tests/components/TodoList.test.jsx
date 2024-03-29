import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'check mail'
      },
      {
        id: 2,
        text: 'check oil'
      }
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(
      todoList,
      Todo
    ); //checks how many itesm will be renderd

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
