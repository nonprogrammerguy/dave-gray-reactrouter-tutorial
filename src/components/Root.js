import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const Root = ({setSearch}) => {
    return (
        <>
            <Header title={"ReactJs Blog"}/>
            <Nav setSearch={setSearch}/>
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;
