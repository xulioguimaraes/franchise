import { GetServerSideProps } from "next";
import { RegistrationPerformed } from "@/views/registration-performed/RegistrationPerformed";
import { Franchise } from "@/views/franchise/Franchise";
interface FranquiaPageProps {
  slug: string;
}

const FranquiaPage = ({ slug }: FranquiaPageProps) => {


  return <Franchise slug={slug} />;
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

export default FranquiaPage;
