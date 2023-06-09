/* eslint-disable no-extra-boolean-cast */
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Stack,
  chakra,
  Flex,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@chakra-ui/react";
import { ROSEPRIMARY } from "../../styles/customThemes";
import { CenterContainer } from "../../styles/CenterContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { api } from "../../services/axios";
import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { useRouter } from "next/router";

interface ResposneGetStates {
  id: number;
  nome: string;
  sigla: string;
}

interface DataOptionsSelect {
  id: number;
  name: string;
}
const registerFormSchema = z.object({
  name: z.string().min(5, {
    message: "O Nome precisa ter pelo menos 5 letras.",
  }),
  cpf: z
    .string()
    .transform((value) => value.replace(/[^0-9]/g, ""))
    .refine((value) => value.length === 11, { message: "CPF INVALIDO" }),
  email: z.string().email({ message: "Email Invalido" }),

  uf_id: z
    .string()
    .transform((value) => {
      return !!value ? value : undefined;
    })
    .refine((value) => !!value, { message: "Selecione um Estado." }),
  city_id: z
    .string()
    .transform((value) => {
      return !!value ? value : undefined;
    })
    .refine((value) => !!value, { message: "Selecione uma Cidade." }),
  profile_indicate: z
    .string()
    .transform((value) => {
      return !!value ? value : undefined;
    })
    .refine((value) => !!value, { message: "Selecione um Perfil." }),
  date_of_birth: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    { message: "Data de nascimento inválida" }
  ),
});
type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function ToStart() {
  const [optionsStates, setOptionsState] = useState<DataOptionsSelect[]>([]);
  const [optionsCity, setOptionsCity] = useState<DataOptionsSelect[]>([]);
  const [optionsProfile, setOptionsProfile] = useState<DataOptionsSelect[]>([]);
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const [isLoadingOptions, setIsLoadingOptions] = useState({
    state: false,
    city: false,
    profile: false,
  });
  const getState = async () => {
    setIsLoadingOptions((old) => ({ ...old, state: true }));

    try {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      const data: ResposneGetStates[] = response.data;
      const formattedData = data.map((item) => ({
        id: item.id,
        name: `${item.sigla} - ${item.nome} `,
      }));
      setOptionsState(formattedData);
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
    } finally {
      setIsLoadingOptions((old) => ({ ...old, state: false }));
    }
  };
  const getCitys = async (id: string) => {
    try {
      setIsLoadingOptions((old) => ({ ...old, city: true }));
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
      );
      const dataFormatted = response.data.map(
        (item: { id: string; nome: string }) => ({
          id: item.id,
          name: item.nome,
        })
      );
      setOptionsCity(dataFormatted);
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
    } finally {
      setIsLoadingOptions((old) => ({ ...old, city: false }));
    }
  };

  const handleSelectState = (id: string) => {
    getCitys(id);
  };

  const getProfileOptions = async () => {
    try {
      setIsLoadingOptions((old) => ({ ...old, profile: true }));

      const response = await api.get("/franchise/profile-indicate");
      setOptionsProfile(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
    } finally {
      setIsLoadingOptions((old) => ({ ...old, profile: false }));
    }
  };

  useEffect(() => {
    getProfileOptions();
    getState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const toast = useToast();
  const onSubmit = async ({
    cpf,
    date_of_birth,
    email,
    name,
    city_id,
    profile_indicate,
    uf_id,
  }: RegisterFormData) => {
    try {
      const response = await api.post("/franchise/create-indicate", {
        cpf,
        date_of_birth,
        email,
        name,
        city_id,
        profile_indicate,
        uf_id,
        uf: optionsStates.find((item) => item.id === Number(uf_id))?.name,
        city: optionsCity.find((item) => item.id === Number(city_id))?.name,
      });
      toast({
        title: "Cadastro realizado.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      await router.push(`/cadastro-realizado/${response.data.slug}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Acessar a propriedade response do erro
        if (error?.response?.data?.message) {
          error?.response?.data?.message.map((item: string) => {
            toast({
              title: item,
              description: "Verifique as informações e tente novamente",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          });
          return;
        }
        toast({
          title: "Verifique as informações e tente novamente",
          description: `${error}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  return (
    <>
      <CenterContainer zIndex={2} overflowX={"hidden"}>
        <PinkBackgroud />
        <chakra.div maxW={"7xl"} w={"full"} zIndex={2} mt={[16, 0]}>
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="base"
            maxWidth={500}
            p={6}
            m="10px auto"
            as="form"
            mt={8}
            onSubmit={handleSubmit(onSubmit)}
            bg={"white"}
          >
            <>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Cadastro
              </Heading>
              <Stack spacing={4}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                    Nome
                  </FormLabel>
                  <Input
                    {...register("name")}
                    id="first-name"
                    placeholder="Nome completo"
                  />
                </FormControl>

                <FormControl isInvalid={!!errors.cpf}>
                  <FormLabel htmlFor="cpf" fontWeight={"normal"}>
                    CPF
                  </FormLabel>
                  <Input
                    as={InputMask}
                    mask={"999.999.999-99"}
                    {...register("cpf")}
                    id="cpf"
                    placeholder="CPF"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email
                  </FormLabel>
                  <Input
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                  />
                  <FormHelperText>
                    Nunca compartilharemos seu e-mail.
                  </FormHelperText>
                </FormControl>
                <FormControl isInvalid={!!errors.date_of_birth}>
                  <FormLabel htmlFor="date_of_birth" fontWeight={"normal"}>
                    Data de nascimento
                  </FormLabel>
                  <Input
                    type="date"
                    id="date_of_birth"
                    {...register("date_of_birth", { required: true })}
                    placeholder="Data de nascimento"
                  />
                </FormControl>
                <Flex gap={6}>
                  <FormControl
                    isInvalid={!!errors.uf_id}
                    isDisabled={isLoadingOptions.state}
                  >
                    <FormLabel htmlFor="uf_id" fontWeight={"normal"}>
                      Estado
                    </FormLabel>
                    <Controller
                      name="uf_id"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleSelectState(e.target.value);
                          }}
                          placeholder="Selecione"
                        >
                          {optionsStates.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.city_id}
                    isDisabled={isLoadingOptions.city}
                  >
                    <FormLabel htmlFor="city_id" fontWeight={"normal"}>
                      Cidade
                    </FormLabel>
                    <Controller
                      name="city_id"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select placeholder="Selecione" {...field}>
                          {optionsCity.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                </Flex>

                <FormControl isInvalid={!!errors.profile_indicate}>
                  <FormLabel htmlFor="profile_indicate" fontWeight={"normal"}>
                    Perfil de indicador
                  </FormLabel>
                  <Controller
                    name="profile_indicate"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select placeholder="Selecione" {...field}>
                        {optionsProfile.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </Stack>
            </>

            <Button
              bg={ROSEPRIMARY}
              mt={8}
              color={"white"}
              w={"full"}
              type="submit"
              isLoading={isSubmitting}
              // onClick={() => {
              //   toast({
              //     title: "Account created.",
              //     description: "We've created your account for you.",
              //     status: "success",
              //     duration: 3000,
              //     isClosable: true,
              //   });
              // }}
            >
              Cadastrar
            </Button>
          </Box>
        </chakra.div>
      </CenterContainer>
    </>
  );
}
