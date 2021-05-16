import { useState }  from 'react'
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "4815e5ed-3ffa-4527-b681-7e95c3771e42",
            "user-Name": username,
            'User-secret': password
        }

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject});
               // connection work
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            //reload page
            window.location.reload();

        } catch (error) {
            setError('Oops, incorrect credentials!!')
        }
        // username | passwrd => chatrngine -> give messages
        // work out -> login
        // error -> try with new data
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="Username" required/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}
                           className="input" placeholder="Password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>
        </div>
    )
}

export default Login
