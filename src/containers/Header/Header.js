import './Header.css';

import HeaderNav from '../HeaderNav/HeaderNav';

const Header = ({ areas }) => {

    return (
        <header>
            
            <HeaderNav areas={areas}/>
        </header>
    )
}

export default Header;