<p align="center">
<img src="public/assets/logo.png" alt="logo" width="200">
</p>

# Landing Page - A Principal Bebê e Mamãe

Este projeto é uma landing page com um fluxo que direciona os usuários para diferentes páginas, incluindo o cadastro de influenciadores, informações adicionais e o formulário de interesse em se tornar um franqueado.

## Tecnologias Utilizadas

- [@chakra-ui/next-js](https://www.npmjs.com/package/@chakra-ui/next-js): ^2.1.3
- [@chakra-ui/react](https://www.npmjs.com/package/@chakra-ui/react): ^2.6.1
- [@emotion/react](https://www.npmjs.com/package/@emotion/react): ^11.11.0
- [@emotion/styled](https://www.npmjs.com/package/@emotion/styled): ^11.11.0
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers): ^3.1.0
- [@next/font](https://www.npmjs.com/package/@next/font): 13.1.6
- [@types/node](https://www.npmjs.com/package/@types/node): 20.2.4
- [@types/react](https://www.npmjs.com/package/@types/react): 18.2.7
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): 18.2.4
- [axios](https://www.npmjs.com/package/axios): ^1.4.0
- [eslint](https://www.npmjs.com/package/eslint): 8.41.0
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 13.1.6
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^10.12.16
- [next](https://www.npmjs.com/package/next): 13.1.6
- [next-seo](https://www.npmjs.com/package/next-seo): ^6.0.0
- [nprogress](https://www.npmjs.com/package/nprogress): ^0.2.0
- [react](https://www.npmjs.com/package/react): 18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): 18.2.0
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): ^7.43.9
- [react-icons](https://www.npmjs.com/package/react-icons): ^4.8.0
- [react-input-mask](https://www.npmjs.com/package/react-input-mask): ^2.0.4
- [react-scroll](https://www.npmjs.com/package/react-scroll): ^1.8.9
- [react-slick](https://www.npmjs.com/package/react-slick): ^0.29.0
- [typescript](https://www.npmjs.com/package/typescript): 5.0.4
- [zod](https://www.npmjs.com/package/zod): ^3.21.4

## Fluxo de Páginas

### Página Inicial

A página inicial é a primeira página que os usuários acessam. Ela apresenta uma breve descrição do projeto e oferece duas opções para os usuários: "Cadastre-se como Influenciador" e "Saiba Mais".

- Ao clicar em "Cadastre-se como Influenciador", os usuários serão redirecionados para a página de "Cadastro de Influenciadores".
- Ao clicar em "Saiba Mais", os usuários serão redirecionados para a página de "Informações Adicionais".

### Página de Informações Adicionais

A página de "Informações Adicionais" fornece mais detalhes sobre o projeto, seus benefícios e oportunidades. Nesta página, os usuários têm a opção de retornar à página de "Cadastro de Influenciadores" caso queiram prosseguir com o cadastro.

- Ao clicar no botão "Cadastre-se como Influenciador", os usuários serão redirecionados novamente para a página de "Cadastro de Influenciadores".

### Página de Cadastro de Influenciadores

A página de "Cadastro de Influenciadores" contém um formulário que os usuários devem preencher com suas informações pessoais. Após preencher o formulário, os usuários podem enviar os dados e serão redirecionados para a página de "Confirmação de Cadastro".

- Após enviar o formulário, os usuários serão redirecionados para a página de "Confirmação de Cadastro".

### Página de Confirmação de Cadastro

A página de "Confirmação de Cadastro" exibe uma mensagem confirmando o sucesso do cadastro. Nesta página, os usuários também encontrarão um link para acessar a página do "Influenciador da Franquia".

- Ao clicar no link "Influenciador da Franquia", os usuários serão redirecionados para a página do "Influenciador da Franquia".

### Página do Influenciador da Franquia

A página do "Influenciador da Franquia" é dedicada aos interessados em se tornar um franqueado. Nesta página, os usuários encontrarão um formulário para preencher com seus dados de interesse em se tornar um franqueado.

## Executando o Projeto

Siga as etapas abaixo para executar o projeto em sua máquina local:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu ambiente de desenvolvimento.
3. Navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
6. Acesse o projeto em seu navegador usando o URL fornecido após a inicialização do servidor de desenvolvimento.

Certifique-se de configurar corretamente as variáveis de ambiente necessárias para o projeto, como as informações de conexão com o banco de dados e

outras configurações específicas do projeto.

## Conclusão

Este projeto de landing page oferece um fluxo simples e intuitivo para os usuários, permitindo que eles se cadastrem como influenciadores, obtenham informações adicionais e expressem interesse em se tornar franqueados. As tecnologias utilizadas, incluindo Next.js, Chakra UI e React Hook Form, garantem uma experiência de desenvolvimento moderna e eficiente.
