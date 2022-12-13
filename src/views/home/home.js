import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Footer from "../components/footer";
import NavBar from "../components/navbar";


const theme = createTheme();

const Home = () => {

    return (
        <ThemeProvider theme={theme}>
            <NavBar props={['EMPLOYEES', 'TASKS']}></NavBar>
            <Container component="main" maxWidth="xs" className="task">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: {xs: 233, md: 167},
                            maxWidth: {xs: 350, md: 250},
                        }}
                        alt=""
                        src="dancing-banana.gif"
                    />
                    <p>Shania Joseph CSCI 39548 Final Project.</p>
                    <p>Built with React/Redux/React-Router, Express, Sequelize, and PostgreSQL.</p>
                </Box>
            </Container>
            <Footer></Footer>
        </ThemeProvider>
    );

};

export default Home;