import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Typography, IconButton, Card } from "@mui/material";
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom'; 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import styled from 'styled-components';
import "./Cadastro.css";

const schema = yup.object().shape({
  name: yup.string().required("Nome completo é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  username: yup.string().required("Nome de usuário é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório").min(14, "Telefone inválido"),
  cpf: yup.string().required("CPF é obrigatório").min(14, "CPF inválido"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});

interface FormData {
  name: string;
  email: string;
  username: string;
  phone: string;
  cpf: string;
  password: string;
}

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  background: #FFFFFFFF;
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0.1, 0.1, 0.1, 0);
  transition: box-shadow 300ms ease, transform 300ms ease;
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
    background-color: #f8f9fa;
  }
`;

const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Cadastro-svgs/1.svg");
  background-repeat: no-repeat;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Lilita One", sans-serif;
  position: relative;
`;

const StyledTypography = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 24px;

  h3 {
    text-decoration: none;
    font-size: 24px;
    font-family: "Lilita One", sans-serif;
    margin-top: 30%;
  }

   h4 {
    text-decoration: none;
    font-size: 35px;
    font-family: "Montserrat Alternates", sans-serif;
    text-align: left;
    font-weight: 500;
    margin-top: -20%;
  }

  p {
    color: #ffffff;
    text-decoration: none;
    font-family: "Montserrat Alternates", sans-serif;
  }
`;

const CadastroContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
`;

export default function CadastroData() {
  const [dataList, setDataList] = useState<FormData[]>([]); // Armazena os usuários cadastrados
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setDataList([...dataList, data]);

    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Cadastro realizado com sucesso.',
    }).then(() => {
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

  return (
    <CadastroContainer sx={{ display: 'flex',height: '100vh'}}>
      {/* Seção Esquerda com Fundo Laranja e Imagem */}
      <ImageSection sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Box>
          <StyledTypography>
            <h4>
              Faltam poucos passos<br/> para<br/> se tornar um Dev!
            </h4>
          </StyledTypography>
          {/* Imagem */}
          <img src="src/assets/Personagem.svg" alt="Ilustração" style={{ width: '80%' }} />
        </Box>
      </ImageSection>

      {/* Seção Direita com o Formulário */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 5%' }}>
        <Box sx={{ width: '100%', maxWidth: 400 }}>

          {/* Formulário */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Título */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <IconButton onClick={() => navigate(-1)} aria-label="voltar">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5" sx={{ marginLeft: 1 }}>
              Olá Dev!
            </Typography>
          </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome Completo"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Endereço de E-mail"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nome de Usuário"
                      fullWidth
                      error={!!errors.username}
                      helperText={errors.username ? errors.username.message : ""}
                    />
                  )}
                />
              </Grid>

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
                <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#6C63FF', color: 'white',  }}>
                  Registrar-se
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography align="center" sx={{ marginY: 2 }}>
                  ou
                </Typography>

                <GoogleButton>
                <img src="/src/Icons/Google.svg" alt="Google" style={{height: '20px',fontFamily: 'Montserrat Alternates', marginRight: '10px' }} />
                Iniciar sessão com o Google
              </GoogleButton>
              </Grid>
            </Grid>
          </Form>

          {/* Lista de usuários registrados */}
          {dataList.length > 0 && (
            <Box sx={{ marginTop: 4 }}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Usuários Registrados
                </Typography>
                {dataList.map((data, index) => (
                  <Box key={index} sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">
                      Nome: {data.name}
                    </Typography>
                    <Typography variant="body1">
                      E-mail: {data.email}
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
                      sx={{ marginTop: 1 }}
                    >
                      Deletar
                    </Button>
                  </Box>
                ))}
              </Card>
            </Box>
          )}
        </Box>
      </Box>
    </CadastroContainer>
  );
}
