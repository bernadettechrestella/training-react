import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import MenuBar from './components/MenuBar'
import SiteFooter from './components/SiteFooter'
import PageNotFound from './pages/PageNotFound'

function Layout() {
    return (
        <>
            <MenuBar />
            <main>
                <Outlet />
            </main>
            <SiteFooter />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default App
