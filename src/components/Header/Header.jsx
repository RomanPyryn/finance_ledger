import { FaBookOpen } from 'react-icons/fa';
import { MainHeader, Container, Logo, GreenPartLogo, NavigationList, NavigationLink } from './Header.styled';

function Header() {
  return (
    <MainHeader>
      <Container className="container">
        <Logo href="./index.html">
          <FaBookOpen className='logo-icon' size={40}/>
          <GreenPartLogo>Finance</GreenPartLogo>
          Ledger
        </Logo>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink href="./index.html">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink href="#to-about">About</NavigationLink>
            </li>
            <li>
              <NavigationLink href="#to-cases">Cases</NavigationLink>
            </li>
            <li>
              <NavigationLink href="#to-blog">Blog</NavigationLink>
            </li>
            <li>
              <NavigationLink href="#to-contact">Contact</NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </Container>
    </MainHeader>
  );
}

export default Header;
