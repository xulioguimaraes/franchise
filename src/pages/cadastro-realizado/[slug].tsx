import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { RegistrationPerformed } from "@/views/registration-performed/RegistrationPerformed";
interface CadastroRealizadoPageProps {
  slug: string;
}

const CadastroRealizadoPage = ({ slug }: CadastroRealizadoPageProps) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return <RegistrationPerformed slug={slug} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params || {};

  // Aqui você pode fazer uma requisição para buscar os dados com base no slug
  // e passá-los como props para o componente

  return {
    props: {
      slug: slug || null,
    },
  };
};

export default CadastroRealizadoPage;
