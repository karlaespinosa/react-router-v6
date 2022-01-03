import { lazy, LazyExoticComponent } from "react";
import NoLazyLoad from "../01-lazyload/pages/NoLazyLoad";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// LAZYLOAD - CARGA PERESOSA POR MODULOS (CON RUTAS HIJAS)
const LazyLayout = lazy(() => import(/* webpackChunckName: LazyLayoutPage */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazylayout/',
    path: '/lazylayout/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyLoad,
    name: 'No-LazyLoad'
  },
]

// LAZYLOAD - CARGA PERESOSA POR COMPONENTES

// const Lazy1 = lazy(() => import(/* webpackChunckName: LazyPage1 */ '../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunckName: LazyPage2 */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunckName: LazyPage3 */ '../01-lazyload/pages/LazyPage3'));

/* export const routes: Route[] = [
  {
    id: 1,
    to: '/lazy1',
    path: '/lazy1',
    Component: Lazy1,
    name: 'Lazy-01'
  },
  {
    id: 2,
    to: '/lazy2',
    path: '/lazy2',
    Component: Lazy2,
    name: 'Lazy-02'
  },
  {
    id: 3,
    to: '/lazy3',
    path: '/lazy3',
    Component: Lazy3,
    name: 'Lazy-03'
  }
] */
