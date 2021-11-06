import { useState } from "react";
import "./styles.css";

export const App = () => {
  // stateを定義
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);

  // inputタグでのstate変更をonCangeで受け取るように定義(eventは仮引数)
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンのアクションを定義
  const onClickAddTodo = () => {
    // 空の場合はそのままreturn
    if (todoText === "") return;
    // スプレッド構文で未完了TODOの配列を展開しつつinputタグの値を追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 追加後はinputエリアに空文字をセットしてクリアする
    setTodoText("");
  };

  // 削除ボタンのアクションを定義
  const onClickDeleteTodo = (index) => {
    // 改めて未完了TODOをスプレッド構文で取得
    const targetTodos = [...incompleteTodos];
    // splace関数で対象のindexを　１つ削除
    targetTodos.splice(index, 1);
    // 未完了TODOのstateを更新する
    setIncompleteTodos(targetTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを入力"
        />
        <button onClick={onClickAddTodo}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDeleteTodo(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
