import { useRef, useEffect, useState } from 'react';
import { useForm, Controller,SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom'; 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import './Cadastro.css';
export { Cadastro }

function Cadastro() {
  return (
    <div>
      <h1> Cadastro </h1>
    </div>
  );
}

// Esquema de validação com Yup
const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
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

export default function CadastroData() {
  const [dataList, setDataList] = useState([]);
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

  interface FormData {
    name: string;
    phone: string;
    cpf: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Login realizado com sucesso.',
    }).then(() => {
      // Use o hook useNavigate para redirecionar
      navigate('/');
    });
    
    reset();
  };
  

  const handleDelete = (index: number) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
    Swal.fire({
      icon: 'success',
      title: 'Deletado!',
      text: 'Registro deletado com sucesso.',
    });
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>

      {/* Card de apresentação */}
      <Box sx={{ width: 700, mr: -20  , height: formCardHeight , display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ padding: 4, backgroundColor: '#eb832e', color: 'white', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 ,  mt: 30 }}>
            {/* Lugar para a logo */}
            <img src="src/assets/Quack-logo.svg" alt="Logo" style={{ width: '100px' }} />
          </Box>
          {/* Texto */}
          <Typography className='title' variant="h5" align="center" gutterBottom>
            Bem-vindo ao Quack()
          </Typography>
          {/* Subtexto */}
          <Typography className='subtitle' variant="body1" align="center" >
            Complete o Cadastro ao lado para começar.
            </Typography>
          <Typography variant="body1" align="center" >
          sua jornada de programacão
            </Typography>
        </Card>
      </Box>

      {/* Formulário */}
      <Box sx={{ flexGrow: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ padding: 4, mb: 4 }}>
            <Grid container spacing={2}>

              {/* Nome */}
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
              </Grid>

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

               {/* Link de Entrar */}
               <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Já possui uma conta?
                  <a
                    href="/react-teste=ing/src/Login.tsx"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/'); // Use the navigate function from useNavigate
                    }}
                    style={{ color: '#eb832e', textDecoration: 'none', marginLeft: '8px' }}
                  >
                    Clique aqui para Entrar
                  </a>
                </Typography>
              </Grid>

              {/* Link de-esqueci minha senha */}
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Lembrou a senha?{' '}
                  <a
                    href="/react-teste=ing/src/Login.tsx"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/EsqueciSenha'); // Use the navigate function from useNavigate
                    }}
                    style={{ color: '#eb832e', textDecoration: 'none', marginLeft: '8px' }}
                  >
                    Clique aqui para Esqueci a Senha
                  </a>
                </Typography>
              </Grid>

            </Grid>
          </Card>
        </form>
      </Box>

      {/* Lista de Dados */}
      {dataList.length > 0 && (
  <Box sx={{ flexGrow: 1, ml: 2 }}>
    <Card sx={{ padding: 4 }}>
      <Typography variant="h6" gutterBottom>
        Usuários Registrados
      </Typography>
      {dataList.map((data: { email: string; cpf: string; phone: string; name: string }, index: number) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="body1">
            Nome: {data.name}
          </Typography>
          <Typography variant="body1">
            Email: {data.email}
          </Typography>
          <Typography variant="body1">
            CPF: {data.cpf}
          </Typography>
          <Typography variant="body1">
            Telefone: {data.phone}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(index)}
            sx={{ mt: 1 }}
          >
            Deletar
          </Button>
        </Box>
      ))}
    </Card>
  </Box>
)}

    </Box>
  );
}

