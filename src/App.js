import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import React, {useState} from "react";

import Home from "./components/Home";
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import ErrorPage from "./pages/error-page";
import Root from "./components/Root";

const App = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: '1st post',
            datetime: '27 February 2023',
            body: '1st body'
        },
        {
            id: 2,
            title: '2nd post',
            datetime: '26 February 2023',
            body: '2nd body'
        },
        {
            id: 3,
            title: '3rd post',
            datetime: '26 February 2023',
            body: '3rd body'
        },
        {
            id: 5,
            title: '4th post',
            datetime: '26 February 2023',
            body: '4th body'
        }
    ]);

    const [search, setSearch] = useState('');

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root state={{search:search}} setSearch={setSearch}/> } errorElement={ErrorPage} >
                <Route index={true} path="/" element={<Home />} />,
                <Route path="about" element={<About />} />,
                <Route exact path="posts">
                    <Route path="new" element={<NewPost />} />,
                    <Route path=":id" element={<PostPage posts={posts} setPosts={setPosts}/>} />,
                </Route>,
                <Route path="*" element={<Missing />} />,
            </Route>,
        ));

    return (<RouterProvider router={router}/>);
}
export default App;
