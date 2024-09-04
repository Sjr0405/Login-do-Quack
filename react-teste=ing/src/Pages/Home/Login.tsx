import { useRef, useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

// Função simulada para obter dados dos usuários
const fetchUserData = async () => {
  // Simulando uma chamada para uma API
  return [
    { email: 'Admin@gmail.com', password: 'Admin1' },
    { email: 'user1@example.com', password: '12345678' },
    { email: 'user2@example.com', password: '87654321' },
    { email: 'user3@example.com', password: '12345678' },
    { email: 'user4@example.com', password: '87654321' },
  ];
};

export default function LoginData() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [formCardHeight, setFormCardHeight] = useState('auto');
  const formCardRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (formCardRef.current) {
      const current = formCardRef.current as HTMLElement;
      setFormCardHeight(`${current.offsetHeight}px`);
    }
  }, [formCardRef]);

  type FormData = {
    email: string;
    password: string;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const users = await fetchUserData();
      const user = users.find(user => user.email === data.email && user.password === data.password);

      if (user) {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Login realizado com sucesso.',
        }).then(() => {
          navigate('/dashboard', { state: { email: data.email, password: data.password } });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Falha no Login',
          text: 'E-mail ou senha incorretos.',
          footer: `
            <a href="/Cadastro" onclick="event.preventDefault(); window.location.href='/Cadastro';" style="text-decoration: none; color: #eb832e;">Clique aqui para se cadastrar</a>
            <br />
            <a href="#" onclick="event.preventDefault(); window.location.reload();" style="text-decoration: none; color: #eb832e; margin-left: 15px;">Tentar novamente</a>
          `
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Houve um problema ao tentar fazer login. Por favor, tente novamente.',
      });
    }

    reset();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>

      {/* Card de apresentação */}
      <Box sx={{ width: 700, height: formCardHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ mr: -5, padding: 4, backgroundColor: '#eb832e', color: 'white', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 10 }}>
            <img src="src/assets/Quack-logo.svg" alt="Logo" style={{ width: '80px' }} />
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
      <Box sx={{ width: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ padding: 4, mb: 4 }}>
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
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
