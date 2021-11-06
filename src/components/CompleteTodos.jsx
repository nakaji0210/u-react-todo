export const CompleteTodos = (props) => {
  const { todos, onClickBackTodo } = props;
  const style = {
    backgroundColor: "#fffadd",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBackTodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
