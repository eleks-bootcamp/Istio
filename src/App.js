import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./Layouts/MainLayout/MainLayout";
import {Dashboard} from "./Layouts/Dashboard/Dashboard";
import {Goals} from "./Layouts/Goals/Goals";


function App() {
    return (
        <MainLayout>
            <Routes>
                <Route index path="dashboard" element={<Dashboard/>}/>
                <Route path="goals" element={<Goals/>}/>
                <Route path="*" element={<Navigate to="dashboard" replace/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
