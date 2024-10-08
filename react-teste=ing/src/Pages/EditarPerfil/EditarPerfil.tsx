import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileEditContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #444;
  }
`;

const BackButton = styled.button`
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e62e33;
  }
`;

const SaveButton = styled.button`
  background-color: #785ef0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #5841d8;
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PhotoSection = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  content: '/src/svgs/Home-svgs/Perfil/Image.svg';
  background-color: #F6C761;
  border: none;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e5b14c;
  }
`;

const RemovePhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  content: '/src/svgs/Home-svgs/Perfil/Trash.svg';
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #F6C761;

  &:hover {
    background-color: #f7f7f7;
    border: 3px solid: #e5b14c;
  }
`;

const PasswordInput = styled(Input)`
  
  position: relative;
  padding-right: 40px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  img {
    height: 60px;
    margin-right: 15px;
    cursor: pointer;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
    transition: color 0.3s;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  
    &:hover {
      color: #4834d4;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }

    span {
      font-size: 24px;
    }
  }
`;

const ProfileEdit = ({ changeSection }: { changeSection: (section: string) => void }) => {
  const navigate = useNavigate();
  return (
    <ProfileEditContainer>
      <Header style={{ borderBottom: '3px solid #ccc' }}>
      <Logo onClick={() => navigate('/Home')}>
        <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
        <span>Quack()</span>
      </Logo>
      </Header>
      <Header>
      <BackButton onClick={() => {
        navigate('/Home');
        changeSection('EditarPerfil');
      }}>← Voltar</BackButton>
        <SaveButton>Salvar Alterações</SaveButton>
        </Header>
      <FormContainer>
        <PhotoSection>
          <Label>Foto do Perfil</Label>
          <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://via.placeholder.com/150" alt="Foto do Perfil" />
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <PhotoButton onClick={() => {}}>
            <img src="/src/svgs/Home-svgs/Perfil/Image.svg" alt="Adicionar Foto" /> Adicionar Foto
          </PhotoButton>
          <RemovePhotoButton onClick={() => {}}>
            <img src="/src/svgs/Home-svgs/Perfil/Trash.svg" alt="Remover Foto" /> Remover Foto
          </RemovePhotoButton>
          </div>
        </PhotoSection>

        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Jose_Almeida@gmail.com" />
        </FormGroup>

        <FormGroup>
          <Label>Nome de Usuário</Label>
          <Input type="text" placeholder="José Almeida" />
        </FormGroup>

        <FormGroup>
          <Label>Número de Telefone</Label>
          <Input type="tel" placeholder="(11) 91234-5678" />
        </FormGroup>

        <FormGroup>
          <Label>Senha Atual</Label>
          <PasswordInput type="password" placeholder="********" />
          <img onClick={() => {}} style={{ cursor: 'pointer' , width: '20px', height: '20px'}} src="/src/svgs/Home-svgs/Perfil/Eye.svg" alt="Mostrar Senha" />
        </FormGroup>

        <FormGroup>
          <Label>Nova Senha</Label>
          <PasswordInput type="password" placeholder="********" />
          <img onClick={() => {}} style={{ cursor: 'pointer' , width: '20px', height: '20px'}} src="/src/svgs/Home-svgs/Perfil/Eye.svg" alt="Mostrar Senha" />
        </FormGroup>
      </FormContainer>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
