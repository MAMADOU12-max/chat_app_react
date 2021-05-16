import '../styles/App.css';
import {ChatEngine} from "react-chat-engine";
import ChatFeed from './ChatFeed';
import Login from './Login'

const App = () => {

  if (!localStorage.getItem('username')) return <Login/>

  return (
    <ChatEngine
        height="100vh"
        projectID="4815e5ed-3ffa-4527-b681-7e95c3771e42"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
    />
  //  pass1234 == secret first user dioufcodeur
  );
}

export default App;

