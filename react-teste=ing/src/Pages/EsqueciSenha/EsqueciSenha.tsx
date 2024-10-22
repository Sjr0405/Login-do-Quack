import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Esquema de validação com Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

interface FormData {
  email: string;
  conmfirmaremail: string;
}

// Container do layout para dividir a imagem e o formulário
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ImageSection = styled(Box)`
  background-image: url("/src/svgs/Cadastro-svgs/1.svg");
  background-repeat: no-repeat;
  display: flex;
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

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled(Box)`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function EsqueciSenhaData() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: "Login realizado com sucesso.",
    }).then(() => {
      navigate("/Login");
    });

    reset();
  };

  const navigate = useNavigate();

  return (
    <Container style={{ display: 'flex', height: '100vh' }}>
      <ImageSection sx={{ flex: 2 }}>
        <Box>
          <StyledTypography>
            <h4>
              Faltam poucos passos<br /> para<br /> se tornar um Dev!
            </h4>
          </StyledTypography>
          <img src="src/assets/Personagem.svg" alt="Ilustração" style={{ width: '80%' }} />
        </Box>
      </ImageSection>

      {/* Painel da Direita */}
      <RightPanel>
        <FormWrapper>
          <Typography variant="h5" align="center" gutterBottom>
            Olá Dev!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Insira seu email abaixo e enviaremos um link para redefinir sua senha.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* Email */}
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Endereço de Email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="conmfirmaremail"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirme Endereço de Email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>

              {/* Botão de Enviar */}
              <Grid item xs={12}>
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "#eb832e",
                    "&:hover": { backgroundColor: "#d06b2a" },
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Verificar seu Email
                </Button>
              </Grid>

              {/* Link para voltar ao Login */}
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Lembrou a senha?{" "}
                  <a
                    href="/Login"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/Login");
                    }}
                    style={{ color: "#eb832e", textDecoration: "none", marginLeft: "8px" }}
                  >
                    Clique aqui para Entrar
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </FormWrapper>
      </RightPanel>
    </Container>
  );
}
