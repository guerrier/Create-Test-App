import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App, { Todo, TodoForm, useTodos } from "./App";

configure({ adapter: new Adapter() })

describe("App", () => {
  describe('Todo', () => {
    it('Ejecuta complete.Todo cuando pincho Complete', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala'
      };

      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(0)
        .simulate('click');

      expect(completeTodo.mock.calls).toEqual([[5]]);
      expect(removeTodo.mock.calls).toEqual([]);
    });

    it('Ejecuta removeTodo cuando pincho X', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala'
      };

      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(1)
        .simulate('click');

      expect(removeTodo.mock.calls).toEqual([[5]]);
      expect(completeTodo.mock.calls).toEqual([]);
    });
  });

  describe('TodoForm', () => {
    it('Llamar a addTodo cuando el formulario tiene un valor', () => {
      const addTodo = jest.fn();
      const prevent = jest.fn();
      const wrapper = shallow(<TodoForm addTodo={addTodo}/>);
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'mi nuevo todo!' } });
      wrapper
        .find('form')
        .simulate('submit', { preventDefault: prevent }); //En lugar de prevent podemos poner () => {}

        expect(addTodo.mock.calls).toEqual([[ 'mi nuevo todo!' ]]);
        expect(prevent.mock.calls).toEqual([[]]);
    });
  });

  describe('custom hook: useTodos', () => {
    it('addTodo', () => {
      const Test = (props) => {
        const hook = props.hook();
        return <div {...hook}></div>;
      };

      const wrapper = shallow(<Test hook={useTodos}/>);
      let props = wrapper.find('div').props();
      props.addTodo('Texto de prueba');
      props = wrapper.find('div').props();
      expect(props.todos[0]).toEqual({ text: 'Texto de prueba'});
    });
  });
});
