import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <button onClick={() => navigate('/catalog')}>Catalog</button>
            <span className='todo'>Create main page</span>
        </div>
    )
}