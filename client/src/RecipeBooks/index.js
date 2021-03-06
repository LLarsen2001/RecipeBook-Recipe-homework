import { Link, Outlet } from "react-router-dom"

const Recipebooks = () => {
    return (
        <div>
            <div className='navbar'>
                <Link to='/recipebooks'>Recipebooks</Link>
                <Link to='/recipebooks/new'>New Recipebook</Link>
                <Link to='/recipebooks/:recipebook_id'>Show recipe books and recipes</Link>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default Recipebooks