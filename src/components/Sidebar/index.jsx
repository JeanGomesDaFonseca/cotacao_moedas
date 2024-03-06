// Sidebar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCoins, faWallet, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import { LogoContainer, SidebarContainer, SidebarItem } from './styles';
import Logo  from '../../assets/RZK_Digital.png'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <LogoContainer>
                <img src={Logo} alt="Logo RZK Digital" />
            </LogoContainer>
            <SidebarItem>
                <FontAwesomeIcon icon={faTachometerAlt} />
                Dashboard
            </SidebarItem>
            <SidebarItem isColor="#091D42" isFontWeight="700" >
                <FontAwesomeIcon icon={faCoins}  />
                Rastreador de Moedas
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faWallet} />
                Carteira
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faEnvelope} />
                Mensagens
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faCog} />
                Configurações da Conta
            </SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;
