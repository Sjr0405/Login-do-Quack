import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/lilita-one";
import "@fontsource/montserrat";
import "@fontsource/montserrat-alternates"; 

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;

}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyles