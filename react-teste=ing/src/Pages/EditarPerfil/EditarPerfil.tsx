import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e62e33;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #785ef0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 16px;

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
  position: relative;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  font-family: 'Monsterrat Alternates', sans-serif;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

const EyeIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 40px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const PhotoSection = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const PhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6C761;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e5b14c;
  }
`;

const RemovePhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #F6C761;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f7f7f7;
    border-color: #e5b14c;
  }
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
    font-family: 'Montserrat', sans-serif;

    &:hover {
      color: #4834d4;
    }
  }
`;

const ProfileEdit = () => {
  const navigate = useNavigate();

  // Estados para controle da visibilidade das senhas
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <ProfileEditContainer>
      <Header style={{ borderBottom: '3px solid #ccc' }}>
        <Logo onClick={() => navigate('/Home')}>
          <img src="/src/assets/Logo.svg" alt="Logo Quack()" />
          <span>Quack()</span>
        </Logo>
      </Header>
      <Header>
        <BackButton onClick={() => navigate('/Home', { state: { section: 'Perfil' } })}>
          <ArrowBackIcon style={{ marginRight: '10px' }} /> Voltar
        </BackButton>
        <SaveButton>Salvar Alterações</SaveButton>
      </Header>
      <FormContainer>
        <PhotoSection>
            <Label>Perfil</Label>
            <h1 style={{ fontFamily: 'Monsterrat Alternates', fontWeight: 'bold', marginTop: '0px' } }>Edição de Perfil</h1>
            <Label>Foto de Perfil</Label>
          <img
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            src="https://via.placeholder.com/150"
            alt="Foto do Perfil"
          />
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <PhotoButton>
              <img src="/src/svgs/Home-svgs/Perfil/Image.svg" alt="Adicionar Foto" /> Adicionar Foto
            </PhotoButton>
            <RemovePhotoButton>
              <img src="/src/svgs/Home-svgs/Perfil/Trash.svg" alt="Remover Foto" /> Remover Foto
            </RemovePhotoButton>
          </div>
        </PhotoSection>

        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" placeholder="Nome" defaultValue="José Almeida" />
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
          <PasswordInput
            type={showCurrentPassword ? 'text' : 'password'}
            placeholder="********"
          />
          <EyeIcon
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            src="/src/svgs/Home-svgs/Perfil/Eye.svg"
            alt={showCurrentPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
          />
        </FormGroup>

        <FormGroup>
          <Label>Nova Senha</Label>
          <PasswordInput
            type={showNewPassword ? 'text' : 'password'}
            placeholder="********"
          />
          <EyeIcon
            onClick={() => setShowNewPassword(!showNewPassword)}
            src="/src/svgs/Home-svgs/Perfil/Eye.svg"
            alt={showNewPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
          />
        </FormGroup>
      </FormContainer>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
