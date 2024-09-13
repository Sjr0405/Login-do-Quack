import { useRef, useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';  // Contexto de autenticação
import './Login.css';

// Esquema de validação
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

export default function Login() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  
  const { login } = useAuth();  // Hook para gerenciar login via contexto
  const navigate = useNavigate();
  const [formCardHeight, setFormCardHeight] = useState('auto');
  const formCardRef = useRef(null);

  // Atualiza a altura do card do formulário para ser igual ao card de apresentação
  useEffect(() => {
    if (formCardRef.current) {
      const current = formCardRef.current as HTMLElement;
      setFormCardHeight(`${current.offsetHeight}px`);
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
            <a class="Clique-aqui" href="/Cadastro" onclick="event.preventDefault(); window.location.href='/Cadastro';" style="text-decoration: none; color: #eb832e;">Clique aqui para se cadastrar</a>
            <br />
            <a class="Tente-novamente" href="#" onclick="event.preventDefault(); window.location.reload();" style="text-decoration: none; color: #eb832e; margin-left: 25px;">Tentar novamente</a>
          `,
        });
      }
    } catch (error){
      console.error(error);
      Swal.fire('Erro', 'Houve um problema ao tentar fazer login. Por favor, tente novamente.', 'error');
    }

    reset();
  };

  return (
    <Box sx={{  display: 'flex', justifyContent: 'center', mt: 5 , alignItems: 'center'}}>

      {/* Card de apresentação */}
      <Box sx={{ width: 600, height:formCardHeight, display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ mr: -5, padding: 4, backgroundColor: '#eb832e', color: 'white', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <img src="src/assets/LogoReverse.svg" alt="Logo" style={{ width: '80px' }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Bem-vindo ao Quack()
          </Typography>
          <Typography variant="body1" align="center">
            Faça login para continuar.
          </Typography>
        </Card>
      </Box>

      {/* Formulário de Login */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f8f8f8', }} ref={formCardRef}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ padding: 4, mb: 4 }} >
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
                <Button sx ={{ color: '#ffffff', backgroundColor: '#eb832e'}} type="submit" variant="contained" fullWidth>
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Ainda não possui uma conta?
                  <a
                    href="/Cadastro"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/Cadastro');
                    }}
                    style={{ color: '#eb832e', textDecoration: 'none', marginLeft: '8px' }}
                  >
                    Clique aqui para Cadastrar-se
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="center" variant="body2">
                  <a
                    href="/EsqueciSenha"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/EsqueciSenha');
                    }}
                    style={{ color: '#eb832e', textDecoration: 'none', marginLeft: '8px' }}
                  >
                    Esqueci minha senha
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>
    </Box>
  );
}
