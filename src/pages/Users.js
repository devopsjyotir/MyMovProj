
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddUser, GetUserList } from '../services/UserServices'
import { updateAllUsersList } from '../actions'
import UserCard from '../components/UserCard'
// import '../styles/Students.css'
const Users = () => {
  const [needRefresh, setNeedRefresh] = useState([true])
  const [addUserMode, setAddUserMode] = useState([false])
  const dispatch = useDispatch()
  const allUsersList = useSelector(state => state.allUsersList)

  const [formValues, setFormValues] = useState({
    name: ''
  })

  const enableAddUserMode = () => {
    setAddUserMode(true)
  }
  const disableAddUserMode = () => {
    setAddUserMode(false)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let createdUser = await AddUser(formValues)
    disableAddUserMode()
    setFormValues({
      name: ''
    })
    setNeedRefresh(true)
  }

  useEffect(() => {
    const getAllUsersList = async () => {
      let data = await GetUserList()
      dispatch(updateAllUsersList(data))
      setNeedRefresh(false)
    }
    getAllUsersList()
  }, [needRefresh])

  let addUserRender = (
    <button onClick={enableAddUserMode}>Add new student</button>
  )

  if (enableAddUserMode) {
    addUserRender = (
      <form onSubmit={handleSubmit} >
        <label>User Name:</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="John Doe"
        />
        <button type="submit" >
          Add student
        </button>
      </form>
    )
  }

  let searchUserRender = (
    <div className="search-container-main">
      <div className="search-container-box">
        <input type="text" placeholder="Search User" />
        <button>Search</button>
      </div>
    </div>
  )
  let userListRender = (
    <div>
      <div></div>
      {allUsersList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
  let toRender = (
    <div >
      <div></div>
      {searchUserRender}
      {addUserRender}
      {userListRender}
    </div>
  )
  return toRender
}

export default Users