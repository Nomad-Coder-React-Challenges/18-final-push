import { useLocation } from 'react-router-dom';
import { Button, Container, Dot, Text } from './Header.styled';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Container>
      <Button>
        <Text to='/'>popular</Text>
        {pathname === '/' && <Dot layoutId='dot' />}
      </Button>
      <Button>
        <Text to='/coming-soon'>coming soon</Text>
        {pathname === '/coming-soon' && <Dot layoutId='dot' />}
      </Button>
      <Button>
        <Text to='/now-playing'>now playing</Text>
        {pathname === '/now-playing' && <Dot layoutId='dot' />}
      </Button>
    </Container>
  );
};

export default Header;
