import { api } from "@/services/axios";
import { ROSEPRIMARY } from "@/styles/customThemes";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { z } from "zod";
import Success from "./Success";
import { Element, Link, scroller } from "react-scroll";
interface ResposneGetStates {
  id: number;
  nome: string;
  sigla: string;
}
interface DataOptionsSelect {
  id: number;
  name: string;
}

const optionsPeriod = [
  { id: 1, name: "Horário comercial" },
  { id: 2, name: "Manhã" },
  { id: 3, name: "Tarde" },
  { id: 4, name: "Noite" },
];
const optionsHours = [] as DataOptionsSelect[];
for (let i = 7; i <= 22; i++) {
  const name = `${i}:00`;
  const obj = { id: i, name: name };
  optionsHours.push(obj);
}

const registerFormSchema = z.object({
  name: z.string().min(5, {
    message: "O Nome precisa ter pelo menos 5 letras.",
  }),
  phone: z
    .string()
    .transform((value) => value.replace(/[^0-9]/g, ""))
    .refine((value) => value.length === 11, {
      message: "Numero de telenode invalido",
    }),
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
  start_contact_time: z
    .string()
    .optional()
    .transform((value) => (!!value ? value : "")),
  end_contact_time: z
    .string()
    .optional()
    .transform((value) => (!!value ? value : "")),
  contact_period: z
    .string()
    .transform((value) => {
      return !!value ? value : undefined;
    })
    .refine((value) => !!value, {
      message: "Selecione um periodo para contato.",
    }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;
interface FormRegisterFranchiseProps {
  slug: string;
}

export const FormRegisterFranchise = ({ slug }: FormRegisterFranchiseProps) => {
  const toast = useToast();

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isLoadingOptions, setIsLoadingOptions] = useState({
    state: false,
    city: false,
    profile: false,
  });
  const [optionsStates, setOptionsState] = useState<DataOptionsSelect[]>([]);
  const [optionsCity, setOptionsCity] = useState<DataOptionsSelect[]>([]);
  const selectedCityDisabled = !!getValues("uf_id");
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
  useEffect(() => {
    getState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollToElement = () => {
    scroller.scrollTo("formulario", {
      duration: 500,
      smooth: true,
      offset: -50, 
    });
  };
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const dataSend = {
        ...data,

        uf: optionsStates.find((item) => Number(data?.uf_id) === item.id)?.name,
        city: optionsCity.find((item) => Number(data?.city_id) === item.id)
          ?.name,
        contact_period: optionsPeriod.find(
          (item) => Number(data?.contact_period) === item.id
        )?.name,
        page: "franchise"
      };
      await api.post(
        `/franchise/create-interested-franchise/${slug}`,
        dataSend
      );
      setIsSubmitSuccessful(true);
      scrollToElement();
    } catch (error) {
      let err;
      if (isAxiosError(error)) {
        err = error.response?.data.message;
      } else {
        err = "Erro ao cadastrar, tente novamente";
      }
      toast({
        title: "Error",
        description: `${err}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
    }
  };
  return (
    <chakra.div  maxW={"7xl"} w={"md"} zIndex={2} mt={[16, 0]}>
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
        {isSubmitSuccessful ? (
            <Success />
        ) : (
          <>
            <>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Seja um franqueado:
              </Heading>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                    Nome completo
                  </FormLabel>
                  <Input
                    {...register("name")}
                    id="first-name"
                    placeholder="Nome completo"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="phone" fontWeight={"normal"}>
                    Telefone
                  </FormLabel>
                  <Input
                    as={ReactInputMask}
                    mask={"(99) 99999-9999"}
                    {...register("phone")}
                    id="phone"
                    placeholder="Telefone"
                  />
                </FormControl>
                <FormControl>
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
                    isDisabled={isLoadingOptions.city || !selectedCityDisabled}
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
                <Box>
                  <Heading
                    w="100%"
                    textAlign={"initial"}
                    size={"sm"}
                    fontWeight="bold"
                    mb="2%"
                  >
                    Melhor horário para contato:
                  </Heading>
                  <FormControl isInvalid={!!errors.contact_period}>
                    <FormLabel htmlFor="contact_period" fontWeight={"normal"}>
                      Selecione o período
                    </FormLabel>
                    <Controller
                      name="contact_period"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select placeholder="Selecione" {...field}>
                          {optionsPeriod.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                </Box>
                <Flex gap={6}>
                  <FormControl isInvalid={!!errors.start_contact_time}>
                    <FormLabel
                      htmlFor="start_contact_time"
                      fontWeight={"normal"}
                    >
                      Ou de:
                    </FormLabel>
                    <Controller
                      name="start_contact_time"
                      control={control}
                      render={({ field }) => (
                        <Select placeholder="Selecione" {...field}>
                          {optionsHours.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="end_contact_time" fontWeight={"normal"}>
                      Até:
                    </FormLabel>
                    <Controller
                      name="end_contact_time"
                      control={control}
                      render={({ field }) => (
                        <Select placeholder="Selecione" {...field}>
                          {optionsHours.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                </Flex>
              </Stack>
            </>
            <Button
              bg={ROSEPRIMARY}
              mt={8}
              color={"white"}
              w={"full"}
              type="submit"
              _hover={{
                bg: "pink.500",
              }}
              isLoading={isSubmitting}
            >
              {/* <Link to="success" smooth={true} duration={500}> */}
                Cadastrar
              {/* </Link> */}
            </Button>
          </>
        )}
      </Box>
    </chakra.div>
  );
};
