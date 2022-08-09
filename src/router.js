import { createRouter, createWebHistory } from "vue-router";
import MainPage from './components/mainPage'
import IndividualPage from './components/individual'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainPage},
        { path: "/consultations", component: IndividualPage}
    ]
})