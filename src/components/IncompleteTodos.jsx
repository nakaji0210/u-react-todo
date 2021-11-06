export const IncompleteTodos = (props) => {
  const { todos, onClickCompleteTodo, onClickDeleteTodo } = props;
  const style = {
    backgroundColor: "#bff9da",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteTodo(index)}>完了</button>
              <button onClick={() => onClickDeleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
