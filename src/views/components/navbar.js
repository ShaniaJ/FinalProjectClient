import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";


const NavBar = (props) => {
    const homeLink = props.props.includes('HOME') ? <Link to={'/'}>Home</Link> : undefined;
    const tasksLink = props.props.includes('TASKS') ? <Link to={'/tasks/'}>Tasks</Link> : undefined;
    const employeesLink = props.props.includes('EMPLOYEES') ? <Link to={'/employees/'}>Employees</Link> : undefined;
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                    {homeLink}
                    {tasksLink}
                    {employeesLink}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;