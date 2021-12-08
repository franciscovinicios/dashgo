import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError; //  passar o error aqui
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
//passa aqui como null pq ele comecma como nul
  = ({ name, label, error = null, ...rest }, ref) => {

    return (
      // formControl pode receber uma propriedade chamada isInvalid, que diz se o input tem erro ou nao
      // aqui ele vai estar com erro , caso exista algo dentro da variavel error, usamos para retornar
      // um valor boleano, se tiver true, se n tiver false
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name} id={name + label}>{label}</FormLabel>}  {/* se label existir */}

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900',
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);