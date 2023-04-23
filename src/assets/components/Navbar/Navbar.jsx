import logo from '../../../images/icon1.png';
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled';

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título"></input>
        </InputSpace>
        <ImageLogo src={logo} alt="Logo Dev Mario Cesar" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}

