import { Outlet } from "react-router-dom"
import MainNavigations from "../components/MainNavigations"
export default function Root()
{
    return(
        <div>
            <MainNavigations/>
            <main className="classes.content">
                <Outlet/>
            </main>
          
        </div>
    )
}