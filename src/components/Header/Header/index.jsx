import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { Container, Menu, Li } from './styles'


function Header() {
    const {pathname} = useLocation()

    window.onscroll = () => {
        
    }
    return (
        <Container>
            <img src={Logo} />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>

                <Li isActive={pathname. includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                    <Link to="/Séries">Séries</Link>
                </Li>
            </Menu>

        </Container>
    )
}


export default Header
