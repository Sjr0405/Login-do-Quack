import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { TextField, Grid, Box, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

// Estilos
const StyledTypography = styled(Typography)`
  font-family: "Lilita One", sans-serif;
  font-size: 24px;
  
  margin-bottom: 20px;

  h3 {
    text-decoration: none;
    font-size: 24px;
    font-family: "Lilita One", sans-serif;
    margin-top: 30%;
  }

  a {
    color: #7A5FF5;
    text-decoration: none;
    font-weight: bold;
    font-family: "Montserrat Alternates", sans-serif;
  }

  p {
    color: #7A5FF5;
    text-decoration: none;
    font-weight: bold;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

const LoginContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
`;

const FormSection = styled(Box)`
  width: 45%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Login-svgs/1.svg");
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const StyledButton = styled.button`
  color: white;
  background-color: #7A5FF5;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;

  &:hover {
    background-color: #3700b3;
  }
`;

const GoogleButton = styled.button`
  background-color: white;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 50px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const LoginLink = styled.a`
  color: #eb832e;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

const DuckImage = styled.img`
  width: 500px;
  margin-top: 46%;
  margin-right: 25%;
`;

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

const fetchUserData = async () => [
  { email: 'Admin@gmail.com', password: 'Administrator1' },
  { email: 'user1@example.com', password: '12345678' },
  { email: 'user2@example.com', password: '87654321' },
];

const Login = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (data) => {
    try {
      const users = await fetchUserData();
      const user = users.find(user => user.email === data.email && user.password === data.password);

      if (user) {
        login(data.email, data.password);
        Swal.fire('Sucesso!', 'Login realizado com sucesso.', 'success').then(() => {
          navigate('/dashboard');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Falha no Login',
          text: 'E-mail ou senha incorretos.',
          footer: `<a href="/Cadastro" style="color: #eb832e;">Clique aqui para se cadastrar</a>`
        });
      }
    } catch {
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login.', 'error');
    }
    reset();
  };

  return (
    <LoginContainer>
      {/* Seção do formulário */}
      <FormSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" style={{textAlign: 'left', fontFamily: 'Lilita One',fontSize: '80px', marginBottom: '20px', color: '#ff7f00' }}>
            Quack()
          </Typography>
          <Typography variant="h6" style={{textAlign: 'left', fontFamily: 'Montserrat Alternates', fontSize: '30px',marginBottom: '10px', fontWeight: 'bold' }}>
            Bem Vindo Dev! <br />
            Jefte o mestre supremo
          </Typography>
          <Typography variant="body2" style={{textAlign: 'left', fontFamily: 'Montserrat Alternates',  marginBottom: '30px', color: '#777' }}>
            Bem vindo de volta dev! Por favor, informe seu Usuário e Senha para entrar na plataforma
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nome de usuário"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Digite sua senha"
                    type="password"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <label>
                  <input type="checkbox" style={{fontFamily: 'Montserrat Alternates',color: '#eb832e',  marginRight: '5px' }} />
                  Lembrar senha
                </label>
              </div>
              <LoginLink onClick={() => navigate('/EsqueciSenha')}>
                Esqueci minha senha
              </LoginLink>
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit">Iniciar sessão</StyledButton>
            </Grid>
            <Grid item xs={12}>
              <GoogleButton>
                <img src="/src/Icons/Google.svg" alt="Google" style={{height: '20px',fontFamily: 'Montserrat Alternates', marginRight: '10px' }} />
                Iniciar sessão com o Google
              </GoogleButton>
            </Grid>
          </Grid>

          <Typography style={{ marginTop: '20px' }}>
            Não tem uma conta? <LoginLink onClick={() => navigate('/Cadastro')}>Clique aqui e se inscreva!</LoginLink>
          </Typography>
        </Form>
      </FormSection>

      {/* Seção de Apresentação */}
      <ImageSection>
        
        <StyledTypography variant="body1" style={{ marginTop: '20px' }}>
          <h3>Seja Bem Vindo a Quack()</h3>
          A plataforma que tem como missão,<br/> ajudar você a aprender e compreender a
          <a href="https://pt.wikipedia.org/wiki/Programação"> programação!</a>
        </StyledTypography>
        <DuckImage src="/src/Assets/LogoReverse.svg" alt="Mascote Quack" />
      </ImageSection>
    </LoginContainer>
  );
}

export default Login;
