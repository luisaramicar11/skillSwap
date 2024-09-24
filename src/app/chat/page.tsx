"use client"
import styled from 'styled-components';

// Styled Components
const ChatContainer = styled.div`
  display: flex;
  height: 100vh ;
  width: 100%;
  overflow: hidden;
  margin: 54px 0;
  padding: 0;
`;

const ContactList = styled.div`
  width: 30%;

  border-right: 2px solid #f5f5f5;
  padding: 10px;

`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  margin-top:30px;
  margin-bottom: 30px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;


  &:hover {
    background-color: #e6e6e6;
  }
`;

const ContactImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ContactName = styled.div`
  font-size: 18px;
`;

const ChatWindow = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const ChatHeaderImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChatHeaderName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ChatBody = styled.div`
  padding: 20px;
  background-color: #fff;
  flex-grow: 1;
`;

// Mensajes con clases dinámicas
const Message = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;

  &.mine {
    justify-content: flex-end;
  }

  &.others {
    justify-content: flex-start;
  }
`;

const MessageText = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;

  &.mine {
    background-color: #ff5722;
    color: #fff;
  }

  &.others {
    background-color: #d3d3d3;
    color: #000;
  }
`;

const MessageInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  align-items: flex-end;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

// Componente Contact
const ContactComponent = ({ imgSrc, name }: { imgSrc: string; name: string }) => (
  <Contact>
    <ContactImg src={imgSrc} alt={name} />
    <ContactName>{name}</ContactName>
  </Contact>
);

// Componente principal
const Chat: React.FC = () => {
  return (
    <ChatContainer>
      <ContactList>
        <Title>Chat</Title>
        <ContactComponent imgSrc="/martin.jpg" name="Martín Elias" />
        <ContactComponent imgSrc="/martin.jpg" name="Martín Elias" />
      </ContactList>
      <ChatWindow>
        <ChatHeader>
          <ChatHeaderImg src="/alicia.jpg" alt="Alicia Keys" />
          <ChatHeaderName>Alicia Keys</ChatHeaderName>
        </ChatHeader>
        <ChatBody>
          {/* Mensaje de otro usuario */}
          <Message className="others">
            <MessageText className="others">Holaa..</MessageText>
          </Message>

          {/* Mensaje propio */}
          <Message className="mine">
            <MessageText className="mine">Hola!!</MessageText>
          </Message>
        </ChatBody>
        <MessageInputContainer>
          <MessageInput type="text" placeholder="Escribe un mensaje..." />
          <SendButton>Enviar</SendButton>
        </MessageInputContainer>
      </ChatWindow>
    </ChatContainer>
  );
};

export default Chat;
