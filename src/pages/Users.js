
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddUser, GetUserList } from '../services/UserServices'
import { updateAllUsersList } from '../actions'
import UserCard from '../components/UserCard'
import UserUpdate from '../components/UserUpdate'
import '../styles/List.css'
// import '../styles/Students.css'
const Users = () => {
  const [needRefresh, setNeedRefresh] = useState([true])
  const [addUserMode, setAddUserMode] = useState([false])
  const dispatch = useDispatch()
  const allUsersList = useSelector(state => state.allUsersList)
  const [updatedUserName, setUpdatedUserName] = useState('')

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
    setUpdatedUserName(formValues.name)

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
  }, [needRefresh, updatedUserName])
  
  let addUserRender = (
    <button onClick={enableAddUserMode}>Add new Watchlist</button>
  )

  if (enableAddUserMode) {
    addUserRender = (
      <form onSubmit={handleSubmit} className="course-form">
        <label>Playlist Name:</label>
        <input
          onChange={handleChange}
          value={formValues.name}
          name="name"
          type="text"
          placeholder="Christmas Movies"
        />
        <button type="submit" >
        Create
        </button>
      </form>
    )
  }


  let userListRender = (
    <div > 
      {allUsersList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
  
  let userUpdateRender = (
    <div > 
      {allUsersList.map((user) => (
        <UserUpdate key={user.id} user={user} />
      ))}
    </div>
  )
  
  let toRender = (
    <div>
     
      {/* {searchUserRender} */}
      {addUserRender}
      <div className='flex-conta'>
      {userListRender}
      {userUpdateRender}
      </div>
    </div>
  )
  return toRender
  
}

export default Users