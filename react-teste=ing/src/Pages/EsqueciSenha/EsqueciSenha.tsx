import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid, Box, Card, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import './EsqueciSenha.css';
import { useNavigate } from "react-router-dom";
export { EsqueciSenha }

function EsqueciSenha() {
  return (
    <div>
      <h1> EsqueciSenha </h1>
    </div>
  );
}

// Esquema de validação com Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

interface FormData {
  email: string;
}

export default function EsqueciSenhaData() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Login realizado com sucesso.',
    }).then(() => {
      // Use o hook useNavigate para redirecionar
      navigate('/Login');
    });
    
    reset();
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Box sx={{ width: 400 }}>
        <Card sx={{ padding: 4 , backgroundColor: '#eb832e'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            {/* Lugar para a logo */}
            <img src="src/assets/LogoReverse.svg" alt="Logo" style={{ width: '100px' }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Esqueci Minha Senha
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
                      label="Email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Grid>

              {/* Bot o de Enviar */}
              <Grid item xs={12}>
                <Button sx={{ mt: 2 ,  color: 'ffffff', backgroundColor: '#eb832e', '&:hover': { backgroundColor: '#eb832e' } }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                >
                  Enviar Link
                </Button>
              </Grid>

              

              {/* Link para voltar ao Login */}
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Lembrou a senha?{' '}
                  <a
                    href="/react-teste=ing/src/Login.tsx"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/Login'); // Use the navigate function from useNavigate
                    }}
                    style={{ color: '#eb832e', textDecoration: 'none', marginLeft: '8px' }}
                  >
                    Clique aqui para Entrar
                  </a>
                </Typography>
              </Grid>

            </Grid>
          </form>
        </Card>
      </Box>
    </Box>
  );
}
