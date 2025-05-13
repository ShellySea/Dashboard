import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="search-icon" />
        </div>
        <div className="nav-icons">
          <div className="language">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <DarkModeOutlinedIcon className="icon" />
          <FullscreenExitOutlinedIcon className="icon" />
          <div className="notifications">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="messages">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <ListOutlinedIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
