import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {

  const [{basket ,user}, dispatch] = useStateValue();
  const handleAuthentication =()=>{
    if(user){
      auth.signOut();
    }
  }
 
  return (
    <div className="header">
      <Link to='/'>
      <img className="header__logo"
        src="https://mui.com/static/branding/companies/amazon-dark.svg"
        alt="amazon"
      />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
      <Link style={{textDecoration: 'none'}} to={!user && '/login'}>
        <div className="header__option" onClick={handleAuthentication}>
          <span className="header__optionLineOne" >{user? `Hello ${user.email}`:'Hello Guest'}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        
          <Link style={{textDecoration: 'none'}} to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
          </Link>
           

      </div>
    </div>
  );
};

export default Header;
