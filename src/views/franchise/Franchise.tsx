import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";

import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { WellcomePage } from "./components/WellcomePage";
import ReactInputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";
import { ROSEPRIMARY } from "@/styles/customThemes";
interface FranchiseProps {
  slug: string;
}

export const Franchise = ({ slug }: FranchiseProps) => {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <PinkBackgroud h={370} />
      <WellcomePage />
      <Container as={Flex} maxW={"7xl"} h={"100vh"}>
        <Flex flex={1}></Flex>
        <Flex>
          <chakra.div flex={1} maxW={"7xl"} w={"full"} zIndex={2} mt={[16, 0]}>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="base"
              maxWidth={500}
              p={6}
              m="10px auto"
              as="form"
              mt={8}
              // onSubmit={handleSubmit(onSubmit)}
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
                  <FormControl>
                    <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                      Nome
                    </FormLabel>
                    <Input
                      // {...register("name")}
                      id="first-name"
                      placeholder="Nome completo"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="cpf" fontWeight={"normal"}>
                      CPF
                    </FormLabel>
                    <Input
                      as={ReactInputMask}
                      mask={"999.999.999-99"}
                      // {...register("cpf")}
                      id="cpf"
                      placeholder="CPF"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email" fontWeight={"normal"}>
                      Email
                    </FormLabel>
                    <Input
                      // {...register("email", { required: true })}
                      id="email"
                      type="email"
                    />
                    <FormHelperText>
                      Nunca compartilharemos seu e-mail.
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="date_of_birth" fontWeight={"normal"}>
                      Data de nascimento
                    </FormLabel>
                    <Input
                      type="date"
                      id="date_of_birth"
                      // {...register("date_of_birth", { required: true })}
                      placeholder="Data de nascimento"
                    />
                  </FormControl>
                  <FormControl
                  // isInvalid={!!errors.uf_id}
                  // isDisabled={isLoadingOptions.state}
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
                            // handleSelectState(e.target.value);
                          }}
                          placeholder="Selecione"
                        >
                          {/* {optionsStates.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))} */}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.city_id}
                    // isDisabled={isLoadingOptions.city}
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
                          {/* {optionsCity.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))} */}
                        </Select>
                      )}
                    />
                  </FormControl>
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
                          {/* {optionsProfile.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))} */}
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
                // isLoading={isSubmitting}
              >
                Cadastrar
              </Button>
            </Box>
          </chakra.div>
        </Flex>
      </Container>
    </>
  );
};
