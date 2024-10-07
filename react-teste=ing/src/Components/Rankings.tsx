import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CrownIcon = styled.span`
  font-size: 24px;
  margin-left: 10px;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const UserCard = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const UserImage = styled.div`
  background-color: #e0e0e0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px auto;
`;

const UserName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const UserIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f1f1f1;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Rankings = () => {
  return (
    <Container>
      <Header>
        <h1>Os Mais Quacktivos</h1>
        <CrownIcon>👑</CrownIcon>
      </Header>

      <MainSection>
        <UserCard>
          <UserImage />
          <UserName>Thiago de Andrade</UserName>
          <UserIcons>
            <span>🐤</span>
            <span>2</span>
            <span>⚙️</span>
          </UserIcons>
        </UserCard>

        <UserCard>
          <UserImage />
          <UserName>Elisson Nadson</UserName>
          <UserIcons>
            <span>🐤</span>
            <span>1</span>
            <span>PHP</span>
          </UserIcons>
        </UserCard>

        <UserCard>
          <UserImage />
          <UserName>Adriel Henrique</UserName>
          <UserIcons>
            <span>🐤</span>
            <span>3</span>
            <span>Swift</span>
          </UserIcons>
        </UserCard>
      </MainSection>

      <UserList>
        <ListItem>
          <span>#4 Erik Marques</span>
          <span>Linguagem Favorita: Java</span>
        </ListItem>
        <ListItem>
          <span>#5 Jetfé Goes</span>
          <span>Linguagem Favorita: .NET</span>
        </ListItem>
        <ListItem>
          <span>#6 Ícaro Vasconcelos</span>
          <span>Linguagem Favorita: Python</span>
        </ListItem>
        <ListItem>
          <span>#7 Victor Moak</span>
          <span>Linguagem Favorita: JavaScript</span>
        </ListItem>
      </UserList>
    </Container>
  );
};

export default Rankings;
