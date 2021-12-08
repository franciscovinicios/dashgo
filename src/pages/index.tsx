import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm} from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';


type SignInFormData = {
  email: string;
  password: string;
}

//yup
const signInFormSchema = yup.object().shape({
  email : yup.string().required('E-mail obrigatorio').email('E-mail Inválido'),
  password : yup.string().required('Senha obrigatoria'),
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  //pegando os erros
  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise( resolve => setTimeout(resolve,2000));

    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" //Padding 8 x 4 = 32px
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="name" 
            type="email" 
            label="E-mail" 
            error={errors.email }
            // precisamos tipar essa propriedade error no chakrainput
            {...register("email")} 
          />

          <Input 
            name="password" 
            type="password" 
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button 
          type="submit"
          size="lg" 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
          >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
