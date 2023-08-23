import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('5f167d3a-b628-43e2-acd8-6f582ceccf4b',
                     props.user.username, 
                     props.user.secret
                     );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket{...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage;