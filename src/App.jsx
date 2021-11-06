import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // stateを定義(入力値, 未完了TODO, 完了TODO)
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // inputタグでのstate変更をonCangeで受け取るように定義(eventは仮引数)
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンのアクションを定義
  const onClickAddTodo = () => {
    // 空の場合はそのままreturn
    if (todoText === "") return;
    // 現状の未完了TODOの配列(スプレッド構文で展開)にinputタグの値を追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 追加後はinputエリアに空文字をセットしてクリアする
    setTodoText("");
  };

  // 削除ボタンのアクションを定義
  const onClickDeleteTodo = (index) => {
    // 現状の未完了TODOの配列を取得
    const targetIncompleteTodos = [...incompleteTodos];
    // splace関数で対象のindexを　１つ削除
    targetIncompleteTodos.splice(index, 1);
    // 未完了TODOのstateを更新する
    setIncompleteTodos(targetIncompleteTodos);
  };

  // 完了ボタンのアクションを定義
  const onClickCompleteTodo = (index) => {
    // 現状の未完了TODOの配列を取得
    const targetIncompleteTodos = [...incompleteTodos];
    // splace関数で対象のindexを　１つ削除
    targetIncompleteTodos.splice(index, 1);
    // 完了TODOの配列に当該TODOを追加する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 未完了TODOと完了TODOのstateを更新する
    setIncompleteTodos(targetIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンのアクションを定義
  const onClickBackTodo = (index) => {
    // 現状の完了TODOの配列を取得
    const targetCompleteTodos = [...completeTodos];
    // 該当のindexを1つ削除
    targetCompleteTodos.splice(index, 1);
    // 未完了TODOの配列に当該TODOを追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // 未完了TODOと完了TODOのstateを更新する
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(targetCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAddTodo={onClickAddTodo}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickCompleteTodo={onClickCompleteTodo}
        onClickDeleteTodo={onClickDeleteTodo}
      />
      <CompleteTodos todos={completeTodos} onClickBackTodo={onClickBackTodo} />
    </>
  );
};
