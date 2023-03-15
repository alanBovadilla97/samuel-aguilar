import { useEffect } from "react";

import { Grid, styled, TextField, Typography, Paper } from "@mui/material";
import { LoadingButton } from '@mui/lab';

import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from "formik";
import { useForm } from "@formspree/react";
import { useSnackbar } from 'notistack';

// -------------------------------------------------------------------------

const PaperStyled = styled(Paper)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: 2,
  padding: theme.spacing(4)
}));

const Title = styled(Typography)(() => ({
  fontWeight: 600
}));

const ButtonSend = styled(LoadingButton)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4), 
  fontWeight: 600,
  background: theme.palette.grey[700],
  '&:hover': {
    background: theme.palette.grey[800]
  }
}));

// -------------------------------------------------------------------------

export default function ContactMeForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [state, handleSubmit] = useForm("xrgvkjwg");
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Nombre es requerido'),
      lastName: Yup.string().required('Apellido es requerido'),
      email: Yup.string().email('Una direccion de correo valida es requerida').required('Correo es requerido'),
      message: Yup.string().required('Mensaje es requerido')
    }),
    validateOnMount: true
  });

  const { values, errors, isSubmitting, isValid, submitCount, getFieldProps, resetForm, validateForm } = formik;

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
      validateForm(values);
      enqueueSnackbar('Gracias por ponerse en contacto \n Nos pondremos en contacto con usted a la brevedad');
    }
  }, [enqueueSnackbar, resetForm, state.succeeded, validateForm]); // eslint-disable-line

  return(
    <PaperStyled elevation={10}>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title>Informacion personal</Title>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                label="Nombre" 
                size="small"
                fullWidth
                {...getFieldProps('name')}
                error={Boolean(submitCount > 0 && errors.name)}
                helperText={(submitCount > 0 && errors.name) || ' '}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                label="Apellido" 
                size="small"
                fullWidth
                {...getFieldProps('lastName')}
                error={Boolean(submitCount > 0 && errors.lastName)}
                helperText={(submitCount > 0 && errors.lastName) || ' '}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Correo" 
                size="small"
                fullWidth
                {...getFieldProps('email')}
                error={Boolean(submitCount > 0 && errors.email)}
                helperText={(submitCount > 0 && errors.email) || ' '}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Mensaje" 
                size="small"
                fullWidth
                multiline
                rows={5}
                {...getFieldProps('message')}
                error={Boolean(submitCount > 0 && errors.message)}
                helperText={(submitCount > 0 && errors.message) || ' '}
              />
            </Grid>
            <Grid item sx={{ width: '100%', textAlign: 'center' }}>
              <ButtonSend variant="contained" type="submit" loading={isSubmitting} disabled={!isValid}>
                Enviar
              </ButtonSend>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </PaperStyled>
  );
};