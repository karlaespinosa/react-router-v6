import { Suspense } from 'react'
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "./routes";
import Logo from '../logo.svg';

const addClass = (activeState: boolean): string => {
  return activeState ? 'nav-active' : '';
}

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={Logo} alt='React Logo'/>
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to}className={({ isActive }) => addClass(isActive)}>
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
