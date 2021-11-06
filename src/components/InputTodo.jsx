export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAddTodo } = props;
  return (
    <div className="input-area">
      <input
        value={todoText}
        onChange={onChangeTodoText}
        placeholder="TODOを入力"
      />
      <button onClick={onClickAddTodo}>追加</button>
    </div>
  );
};
