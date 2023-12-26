
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";



function Root(){return<div>
<MainNavigation/>
<Outlet/>
</div>}

export default Root;