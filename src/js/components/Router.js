import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ renderLogin, renderTodos }) => {
  const { currentUser } =useContext(AuthContext)

  return (
    <>
      {currentUser ? renderTodos() : renderLogin()}
    </>
  )
}
