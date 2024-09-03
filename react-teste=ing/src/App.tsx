import { useRef, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import InputMask from "react-input-mask"; 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import './App.css';

// Esquema de validação com Yup
const schema = yup.object().shape({
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF inválido"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  confirmEmail: yup.string()
  .oneOf([yup.ref('email'), undefined], 'Os emails devem corresponder')
  .required("Confirmação de email é obrigatória"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password'), undefined], 'As senhas devem corresponder')
  .required("Confirmação de senha é obrigatória")
});

export default function MeuFormulario() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [formCardHeight, setFormCardHeight] = useState('auto');
  const formCardRef = useRef(null);

  useEffect(() => {
    if (formCardRef.current) {
      setFormCardHeight(`${(formCardRef.current as HTMLDivElement).offsetHeight}px`);
    }
  }, [formCardRef]);

  const onSubmit = (data: { [key: string]: string }) => {
    console.log(data); // Usa a "data" como parametro
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Todos os campos foram preenchidos corretamente.',
    });
    reset();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>

      {/* Card de apresentação */}
      <Box sx={{ width: 700, height: (parseFloat(formCardHeight)* 1.178), display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ padding: 4, backgroundColor: '#eb832e', color: 'white', height: '100%' }}>
          <Box sx={{ mt: 20, display: 'flex', justifyContent: 'center', mb: 3 }}>
            {/* Lugar para a logo */}
            <img src="\src\assets\Quack-logo.svg" alt="Logo" style={{ width: '80px' }} />
          </Box>
          {/* Texto */}
          <Typography variant="h5" align="center" gutterBottom>
            Bem-vindo Quack
          </Typography>
          {/* Subtexto */}
          <Typography variant="body1" align="center">
            Complete o formulário ao lado para começar.
          </Typography>
        </Card>
      </Box>
      
      {/* Formulário */}
      <Box sx={{ maxWidth: 500}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ padding: 4, mb: 4 }} ref={formCardRef}>
            <Grid container spacing={2}>
              {/* Telefone */}
              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask mask="(99) 99999-9999" value={field.value} onChange={field.onChange}>
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          label="Telefone"
                          fullWidth
                          error={!!errors.phone}
                          helperText={errors.phone ? errors.phone.message : ""}
                        />
                      )}
                    </InputMask>
                  )}
                />
              </Grid>

              {/* CPF */}
              <Grid item xs={12}>
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <InputMask mask="999.999.999-99" value={field.value} onChange={field.onChange}>
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          label="CPF"
                          fullWidth
                          error={!!errors.cpf}
                          helperText={errors.cpf ? errors.cpf.message : ""}
                        />
                      )}
                    </InputMask>
                  )}
                />
              </Grid>

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

              {/* Confirmar Email */}
              <Grid item xs={12}>
                <Controller
                  name="confirmEmail"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirmar Email"
                      fullWidth
                      error={!!errors.confirmEmail}
                      helperText={errors.confirmEmail ? errors.confirmEmail.message : ""}
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

              {/* Confirmar Senha */}
              <Grid item xs={12}>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirmar Senha"
                      type="password"
                      fullWidth
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                    />
                  )}
                />
              </Grid>

              {/* Botão de Enviar */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>

    </Box>
  );
}
