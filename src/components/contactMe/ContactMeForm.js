import { useCallback, useEffect } from "react";

import { Grid, styled, TextField, Typography, Paper } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [state, handleSubmit] = useForm("xrgvkjwg");

  const validate = useCallback((values) => {
    const errors = {};

    if (!values.name) {
      errors.name = t('contact.form.validation.nameRequired');
    }

    if (!values.lastName) {
      errors.lastName = t('contact.form.validation.lastNameRequired');
    }

    if (!values.email) {
      errors.email = t('contact.form.validation.emailRequired');
    } else if (!Yup.string().email().isValidSync(values.email)) {
      errors.email = t('contact.form.validation.emailInvalid');
    }

    if (!values.message) {
      errors.message = t('contact.form.validation.messageRequired');
    }

    return errors;
  }, [t]);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      message: ''
    },
    validate,
    validateOnMount: true
  });

  const { values, errors, isSubmitting, isValid, submitCount, getFieldProps, resetForm, validateForm } = formik;

  useEffect(() => {
    validateForm();
  }, [i18n.language, validateForm]);

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
      validateForm();
      enqueueSnackbar(t('contact.form.successMessage'));
    }
  }, [enqueueSnackbar, resetForm, state.succeeded, t, validateForm]);

  return(
    <PaperStyled elevation={10}>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title>{t('contact.form.personalInfo')}</Title>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                label={t('contact.form.fields.name')} 
                size="small"
                fullWidth
                {...getFieldProps('name')}
                error={Boolean(submitCount > 0 && errors.name)}
                helperText={(submitCount > 0 && errors.name) || ' '}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                label={t('contact.form.fields.lastName')} 
                size="small"
                fullWidth
                {...getFieldProps('lastName')}
                error={Boolean(submitCount > 0 && errors.lastName)}
                helperText={(submitCount > 0 && errors.lastName) || ' '}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label={t('contact.form.fields.email')} 
                size="small"
                fullWidth
                {...getFieldProps('email')}
                error={Boolean(submitCount > 0 && errors.email)}
                helperText={(submitCount > 0 && errors.email) || ' '}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label={t('contact.form.fields.message')} 
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
                {t('contact.form.submit')}
              </ButtonSend>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </PaperStyled>
  );
};
