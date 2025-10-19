# SpaceApp

O **SpaceApp** é um projeto desenvolvido durante o curso de React com Vite e Styled Components, com o objetivo de praticar conceitos fundamentais de criação de interfaces modernas utilizando **React**, **CSS-in-JS** e **boas práticas de componentização**.

O projeto simula uma aplicação de galeria espacial com imagens e legendas, incluindo uma **NavBar**, **banner principal**, **galeria de fotos**, **barra lateral de imagens populares** e **footer** estilizados com **Styled Components**.

---

## Objetivos de Aprendizado

- Utilizar **styled-components** para criação de uma **NavBar** e estilização de um **banner**.
- Projetar e implementar **componentes React reutilizáveis** para exibir imagens e legendas.
- Aplicar **estilos personalizados e acessíveis** a uma galeria de fotos.
- Adicionar uma **barra lateral de imagens populares** e um **footer funcional**.

---

## Tecnologias Utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Styled Components**
- **HTML5 / CSS3**

---

## Instalação e Execução

Siga os passos abaixo para executar o projeto localmente.

1. Clone este repositório:
   ```bash
   git clone https://github.com/asilva-dev/space-app.git
   ```

Acesse a pasta do projeto:

```bash
cd space-app
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse a aplicação no navegador:

```bash
http://localhost:5173/
```

Styled Components

O projeto utiliza Styled Components para criar componentes estilizados de forma modular e reutilizável. Essa abordagem traz o conceito de CSS-in-JS, permitindo que estilos sejam aplicados diretamente dentro do arquivo do componente React.

Exemplo de uso:

```bash
import styled from "styled-components";

const Titulo = styled.h1`  font-size: 24px;
  color: #ffffff;`;

function Banner() {
return <Titulo>Space App</Titulo>;
}
```

Licença
Este projeto é apenas para fins educacionais, você pode usar para estudos ou compartilhar com sua comunidade. 💜

👩🏾‍💻 Autora

[Amanda Silva](https://www.linkedin.com/in/amanda-silva-dev/)

Front-end Software Engineer [@iFood](https://www.instagram.com/ifoodbrasil/)

Coordenadora Técnica [@pretalab](https://www.instagram.com/pretalab_/)

Mãe | Palestrante | Professora | Ativista
