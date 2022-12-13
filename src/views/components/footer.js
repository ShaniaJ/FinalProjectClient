import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © Shania Joseph '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>
    );
};

export default Footer;