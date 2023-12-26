import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import ArticleContent from './Services';
import Offres from './Entre';
import Root from './Root';
import Error from './Error';

const router = createBrowserRouter([
    {path:'/', 
    element:<Root/>,
    errorElement:<Error/>,
    children: [
        {path: '/', element: <Home/> },
        {path: '/services', element: <ArticleContent/>, errorElement:<Error/> },
        {path: '/offres', element: <Offres/>, errorElement:<Error/> },
        ],
    },
]);

function App(){

    return <RouterProvider router={router} />

}

export default App;
