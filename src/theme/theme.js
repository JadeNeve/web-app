import { createTheme } from "@mui/material"

export default theme = createTheme({
    navbar: {
        backgroundColor: "#3f51b5",
        height: "64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
    },
    logo: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#fff",
        textDecoration: "none",
    },
    menuButton: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#fff",
        textDecoration: "none",
        marginLeft: "16px",
    },
    activeLink: {
        color: "#fff",
        borderBottom: "2px solid #fff",
    },
})