import { createContext, useMemo, useCallback, useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { db } from "../utils/firebase";

export const todosContext = createContext();

// TodoProvider　todoの取得・編集・削除を行う
export const TodosProvider = (props) => {
  const { children } = props;

  const [todos, setTodos] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const collection = useMemo(() => {
    const col = db.collection('todos')

    // 更新イベントを監視する
    col.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const data = []
      query.forEach(d => data.push({ ...d.data(), docId: d.id }))
      setTodos(data)
    })

    return col
  }, [])

  const add = useCallback(async text => {
    await collection.add({
      uid: currentUser.uid,
      text,
      isComplete: false,
      created_at: new Date(),
    })
  }, [])

  return (
    <TodosProvider value={{ todos, add }}>
      {children}
    </TodosProvider>
  )
}
