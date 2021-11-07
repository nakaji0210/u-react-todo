export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAddTodo, disabled } = props;
  const style = {
    backgroundColor: "#c1feff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChangeTodoText}
        placeholder="TODOを入力"
      />
      <button disabled={disabled} onClick={onClickAddTodo}>
        追加
      </button>
    </div>
  );
};
