import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios'

import { Typography, Button, TextField, Spacer } from 'londonmanager-legos'

import EyeIcon from '../components/icons/EyeIcon.jsx'
import './Login.scss'

const formSchema = {
  email: '',
  password: ''
}

const apiUrl = `${import.meta.env.VITE_LONDONMANAGER_URL}/auth/login`

export default function Login () {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({
    ...formSchema
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // Form Controls
  const toggleShowPassword = () => setShowPassword(prev => !prev)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...formSchema
    }
  })

  const onSubmit = async dataForm => {
    setLoading(true)

    try {
      const { data } = await axios.post(apiUrl, dataForm, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      })

      if (data) {
        window.sessionStorage.setItem('idToken', data.idToken.jwtToken)
        navigate('/profile')
      }
    } catch (err) {
      const errMessage = err?.response?.data?.error ?? err.message
      const errors = { ...err?.response?.data?.errors } || {}
      setErrors({
        general: errMessage,
        ...errors
      })
    }

    setLoading(false)
  }

  return (
    <>
      <Spacer height={10} />
      <Typography component='h1' type='title' size='xs'>
        Iniciar sesión
      </Typography>
      <Spacer height={4} />
      <div className='text-inline'>
        <Typography component='h2' size='sm'>
          ¿No tenés cuenta?
        </Typography>
        <Typography
          component='a'
          href='/signup'
          className='text-button'
          size='sm'
          aria-label='Registrarte es muy fácil'
        >
          Registrarte es muy fácil
        </Typography>
      </div>
      <Spacer height={25} />

      {/* Formulario */}
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {errors?.general && (
          <Typography className='text-error' component='h2' size='sm'>
            {errors?.general}
          </Typography>
        )}

        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Correo electrónico'
              errorMsg={errors.email}
            />
          )}
        />
        <Spacer height={8} />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Contraseña'
              type={showPassword ? 'text' : 'password'}
              icon={<EyeIcon aria-hidden />}
              iconAction={toggleShowPassword}
              errorMsg={errors.password}
            />
          )}
        />
        <Spacer height={16} />
        <Button
          type='submit'
          label='Iniciar sesión'
          fullWidth
          disabled={loading}
        />
      </form>
      {/* Fin del formulario */}

      <Spacer height={16} />
      <Typography
        component='a'
        href='reset-password'
        className='text-button margin-auto'
        size='sm'
      >
        No recuerdo mi contraseña
      </Typography>

      <Spacer height={27} />
      <div className='divider' />
      <Spacer height={27} />

      <Button
        label='Iniciar sesión con Google'
        hierarchy='secondary'
        fullWidth
        disabled={loading}
      />
    </>
  )
}
