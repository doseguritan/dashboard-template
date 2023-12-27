import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.menu.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple component={Link} to={"/"}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
