import '../styles/Users.css'
import { useNavigate } from "react-router-dom";

const UserCard = ({user}) => {
    let navigate = useNavigate();
    const toDetail = () => {
        navigate(`/users/${user.id}/${user.name}`)
    }


    
    return (
    <div className="student-card-containter">
        <ul onClick={toDetail}>
            <li>
        <span className='name'>{user.name}</span>
   
        </li>
        </ul>
        
    </div>
    )
}

export default UserCard