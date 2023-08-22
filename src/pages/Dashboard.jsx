import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TareaForm from '../components/TareaForm'

const Dashboard = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section className="heading">
                <h4>WELCOME {user && user.name}</h4>
                <p>Tasks dashboard</p>
            </section>
            <TareaForm />
        </>
    )
}

export default Dashboard

/* pseudocodigo
if (user) {
    fabricio
} else {
    no hay
}

{user? fabricio : no hay}

****************************************
if (user) {
    fabricio
}

{user && fabricio}
*/