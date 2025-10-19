import { styled } from "styled-components";

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const IconeContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const RodapeTexto = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

function Rodape() {
  return (
    <RodapeEstilizado>
      <IconeContainer>
        <li>
          <a
            href="https://www.linkedin.com/in/amanda-silva-dev/"
            target="_blank"
          >
            <img src="/imagens/sociais/linkedin.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mandysporai/" target="_blank">
            <img src="/imagens/sociais/instagram.svg" alt="" />
          </a>
        </li>
      </IconeContainer>
      <RodapeTexto>Desenvolvido por Amanda Silva</RodapeTexto>
    </RodapeEstilizado>
  );
}

export default Rodape;
