import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, Grid, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Swal from 'sweetalert2';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Dashboard.css'; // Certifique-se de importar o CSS

interface User {
  email: string;
  cpf: string;
  phone: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o useNavigate
  const { user } = useAuth();
  const [dataList, setDataList] = useState<User[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const isAdmin = user?.email === 'Admin@gmail.com';

  useEffect(() => {
    const sampleData: User[] = [
      { email: 'Admin@gmail.com', cpf: '123.456.789-00', phone: '(11) 99999-9999', name: 'Administrator1' },
      { email: 'user1@example.com', cpf: '111.222.333-44', phone: '(21) 98888-8888', name: 'User One' },
      { email: 'user2@example.com', cpf: '555.666.777-88', phone: '(31) 97777-7777', name: 'User Two' },
      { email: 'user3@example.com', cpf: '999.888.777-66', phone: '(41) 96666-6666', name: 'User Three' },
    ];

    if (isAdmin) {
      setDataList(sampleData);
    } else {
      const filteredData = sampleData.filter(data => data.email === user?.email);
      setDataList(filteredData);
    }
  }, [isAdmin, user]);

  const handleDelete = (index: number) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
    Swal.fire({
      icon: 'success',
      title: 'Deletado!',
      text: 'Registro deletado com sucesso.',
    });
  };

  const handleEdit = (index: number) => {
    setEditUser(dataList[index]);
    setEditIndex(index);
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editUser && editIndex !== null) {
      const newDataList = [...dataList];
      newDataList[editIndex] = editUser;
      setDataList(newDataList);
      setEditDialogOpen(false);
      Swal.fire({
        icon: 'success',
        title: 'Salvo!',
        text: 'Dados atualizados com sucesso.',
      });
    }
  };

  const handleEditChange = (field: keyof User, value: string) => {
    if (editUser) {
      setEditUser({ ...editUser, [field]: value });
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Card sx={{ padding: 4, mt: 5 , backgroundColor: "#e0e0e0"}}>
          <Typography variant="h6" className='dados'>
            {isAdmin ? 'Todos os Usuários Registrados' : 'Seus Dados'}
          </Typography>

          {/* Adiciona um botão para voltar à página inicial */}
          <Button
            variant="contained"
          
            onClick={() => navigate('/Login')} // Navega para a página inicial
            sx={{ mb: 2, display: 'flex', alignItems: 'center', color: 'black', backgroundColor: '#eb832e', '&:hover': { backgroundColor: '#eb832e' } }}
            startIcon={<img src="https://img.icons8.com/ios/50/000000/left.png" height={20} width={20} />} // Adiciona um ícone de seta
          >
            Voltar
          </Button>

          {dataList.map((data, index) => (
            <Box key={index} sx={{mb: 2, padding: 2 , display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
              <Card sx={{ width: 500 , padding: 2, backgroundColor: '#b9b9b9', alignItems: 'center', justifyContent: 'center', marginBottom: 2}}>
                <Card sx={{ ml : 8,padding: 2, backgroundColor: '#e0e0e0', alignItems: 'center', justifyContent: 'center', width:350}}>
                  <Typography className='dados'> Nome: {data.name}</Typography>
                  <Typography className='dados'> Email: {data.email}</Typography>
                  <Typography className='dados'> CPF: {data.cpf}</Typography>
                  <Typography className='dados'> Telefone: {data.phone}</Typography>
                </Card>
                {isAdmin && (
                <Box sx={{ mt: 1 }}>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => handleEdit(index)}
                  sx={{
                    class: "Editar",
                    color: "#004921",
                    backgroundColor: "#eb832e",
                    mr: 1,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    transform: 'trasition: all 0.3s ease',
                    "&:hover": {
                      color: "#002b13",
                      backgroundColor: "#eb832e",
                    },
                  }}
                  startIcon={<img src="https://img.icons8.com/ios/50/000000/edit.png" height={15} width={15} />}
                >
                  Editar
                </Button>
                <Button
                  color='error'
                  variant="outlined"
                  onClick={() => handleDelete(index)}
                  sx={{
                    class:"Deletar",
                    color: '#860b00',
                    backgroundColor: '#eb832e',
                    mr: 1,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    transform: 'trasition: all 0.3s ease',
                    "&:hover": {
                      color: "#460600",
                      backgroundColor: "#eb832e",
                    }, 
                  }}
                  startIcon={<img src="https://img.icons8.com/ios/50/000000/trash.png" height={15} width={15}/>}
                >
                  Delete
                </Button>
              </Box>
              )}
              </Card>

              
            </Box>
          ))}
        </Card>
      </Box>

      <Dialog className='cardado' open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle >Editar Usuário</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} >
            <Grid mt={2} item xs={12}>
              <TextField
                label="Nome"
                fullWidth
                value={editUser?.name || ''}
                onChange={(e) => handleEditChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={editUser?.email || ''}
                onChange={(e) => handleEditChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CPF"
                fullWidth
                value={editUser?.cpf || ''}
                onChange={(e) => handleEditChange('cpf', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Telefone"
                fullWidth
                value={editUser?.phone || ''}
                onChange={(e) => handleEditChange('phone', e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: '#860b00',
                backgroundColor: '#eb832e' ,
                fontFamily: 'Montserrat, sans-serif',
                transform: 'trasition: all 0.3s ease',
                "&:hover": {
                  color: "#460600",
                  backgroundColor: "#eb832e",}, }} 
                variant="outlined" 
                onClick={() => setEditDialogOpen(false)} 
                color='error'>
            Cancelar
          </Button>
          <Button sx={{ color: '#004921',
                backgroundColor: '#eb832e' ,
                fontFamily: 'Montserrat, sans-serif',
                transform: 'trasition: all 0.3s ease',
                "&:hover": {
                  color: "#002b13",
                  backgroundColor: "#eb832e",}, }} 
                variant="outlined" 
                onClick={handleSaveEdit} 
                color='success' >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
