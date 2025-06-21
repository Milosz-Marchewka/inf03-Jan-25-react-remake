import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";
import Main from "./Main";
import Cost from "./Cost";
import Footer from "./Footer";
import Page404 from "./404";
import "./App.css";
function App(){
    return(
        <div className='app'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Main/>}/>
                        <Route path="main" element={<Main/>}/>
                        <Route path="cost" element={<Cost/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;