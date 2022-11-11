import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlightsView from '../views/FlightsView.vue'
import RecommendedCitiesView from '../views/RecommendedCitiesView.vue'
import CarRentalsView from '../views/CarRentalsView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hotels',
      component: HomeView
    },
    {
      path: '/flights',
      name: 'flights',
      component: FlightsView
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: RecommendedCitiesView
    },
    {
      path: '/car-rentals',
      name: 'car-rentals',
      component: CarRentalsView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router