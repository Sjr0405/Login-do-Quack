import { useRef, useEffect, useState } from 'react';
import { useForm, Controller,SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import './Login.css';

// Esquema de validação com Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

export default function LoginForm() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [formCardHeight, setFormCardHeight] = useState('auto');
  const formCardRef = useRef(null);

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
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Login realizado com sucesso.',
    });
    reset();
  };
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>

      {/* Card de apresentação */}
      <Box sx={{ width: 700, height: formCardHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ mr: -5, padding: 4, backgroundColor: '#eb832e', color: 'white', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            {/* Lugar para a logo */}
            <img src="src/assets/Quack-logo.svg" alt="Logo" style={{ width: '80px' }} />
          </Box>
          {/* Texto */}
          <Typography variant="h5" align="center" gutterBottom>
            Bem-vindo ao Quack()
          </Typography>
          {/* Subtexto */}
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
              
              {/* Email */}
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

              {/* Senha */}
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

              {/* Botão de Login */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Entrar
                </Button>
              </Grid>

                {/* Link de Criar conta */}
              <Grid item xs={12}>
                <Typography variant="body1" align="center" >
                    Ainda não Possui uma conta?
                    <a className = "manolo"  href="/src/login.tsx" >
                    Clique aqui para Cadastrar-se
                  </a>
                  </Typography>
              </Grid>

              {/* Link de-esqueci minha senha */}
              <Grid item xs={12}>
                <Typography className='manolo' align="center" variant="body2">
                  <a href="#">Esqueceu sua senha?</a>
                </Typography>
              </Grid>

            </Grid>
          </Card>
        </form>
      </Box>
    </Box>
  );
}
