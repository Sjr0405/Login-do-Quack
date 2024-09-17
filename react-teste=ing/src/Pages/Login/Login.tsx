import { useRef, useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';  // Contexto de autenticação
import styled from 'styled-components';
import './Login.css';

// Validação com Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

// Função simulada para buscar dados de usuários
const fetchUserData = async () => {
  return [
    { email: 'Admin@gmail.com', password: 'Administrator1' },
    { email: 'user1@example.com', password: '12345678' },
    { email: 'user2@example.com', password: '87654321' },
  ];
};

// Estilos com styled-components
const LoginContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const PresentationCard = styled(Card)`
  padding: 32px;
  background-color: #eb832e;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const FormCard = styled(Card)`
  padding: 32px;
  background-color: #f8f8f8;
  margin-left: 16px;
`;

const StyledButton = styled(Button)`
  color: white;
  background-color: #eb832e;
  &:hover {
    background-color: #d8732a;
  }
`;

const LoginLink = styled.a`
  color: #eb832e;
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Login() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();  // Hook para gerenciar login via contexto
  const navigate = useNavigate();
  const formCardRef = useRef<HTMLDivElement>(null);
  const [formCardHeight, setFormCardHeight] = useState('auto');

  // Sincroniza a altura dos cards de apresentação e do formulário
  useEffect(() => {
    if (formCardRef.current) {
      setFormCardHeight(`${formCardRef.current.offsetHeight}px`);
    }
  }, [formCardRef]);

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (data) => {
    try {
      const users = await fetchUserData();
      const user = users.find(user => user.email === data.email && user.password === data.password);

      if (user) {
        login(data.email, data.password);  // Armazena no contexto
        Swal.fire('Sucesso!', 'Login realizado com sucesso.', 'success').then(() => {
          navigate('/dashboard');  // Redireciona para o dashboard após o login
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Falha no Login',
          text: 'E-mail ou senha incorretos.',
          footer: `
            <a class="Clique-aqui" href="/Cadastro" style="text-decoration: none; color: #eb832e;">Clique aqui para se cadastrar</a>
            <br />
            <a class="Tente-novamente" href="#" style="text-decoration: none; color: #eb832e; margin-left: 25px;">Tentar novamente</a>
          `,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login. Por favor, tente novamente.', 'error');
    }
    reset();
  };

  return (
    <LoginContainer>
      {/* Card de apresentação */}
      <Box sx={{ width: 600, height: formCardHeight }}>
        <PresentationCard>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <img src="src/assets/LogoReverse.svg" alt="Logo" style={{ width: '80px' }} />
          </Box>
          <Typography variant="h5" gutterBottom>
            Bem-vindo ao Quack()
          </Typography>
          <Typography variant="body1">
            Faça login para continuar.
          </Typography>
        </PresentationCard>
      </Box>

      {/* Formulário de Login */}
      <Box sx={{ width: 400 }} ref={formCardRef}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormCard>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
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
                      label="Senha"
                      type="password"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ""}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton type="submit" variant="contained" fullWidth>
                  Entrar
                </StyledButton>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Ainda não possui uma conta?
                  <LoginLink
                    onClick={() => navigate('/Cadastro')}
                  >
                    Clique aqui para Cadastrar-se
                  </LoginLink>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center" variant="body2">
                  <LoginLink onClick={() => navigate('/EsqueciSenha')}>
                    Esqueci minha senha
                  </LoginLink>
                </Typography>
              </Grid>
            </Grid>
          </FormCard>
        </form>
      </Box>
    </LoginContainer>
  );
}
