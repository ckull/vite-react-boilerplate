import About from "./About/loadable";
import Home from "./Home/loadable";  


const pagesData = [
    {
        path: '',
        element: <Home />,
        title: 'Home',
    },
    {
        path: 'about',
        element: <About />,
        title: 'About',
    },
]

export default pagesData