import Vue from 'vue';
import Router from 'vue-router';

import Transcribe from '../pages/transcribe'
import Index from '../pages/index.vue'
import Project from '../pages/project.vue'
import Team from '../pages/team.vue'
import HTR from '../pages/htr.vue'
import Stats from '../pages/stats.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/transcribe',
            name: 'transcribe',
            component: Transcribe,
            children: [
                {
                    path: '/transcribe/:manuscript',
                    name: 'transcribe_ms',
                    component: Transcribe,
                    children: [
                        {
                            path: '/transcribe/:manuscript/:page/:line',
                            name: 'transcribe_page_line',
                            component: Transcribe
                        },
                    ]
                },
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: Project,
            children: [
                {
                    path: 'project',
                    name: 'the_project',
                    component: Project
                },
                {
                    path: 'team',
                    name: 'the_team',
                    component: Team
                },
                {
                    path: 'htr',
                    name: 'htr',
                    component: HTR
                },
                {
                    path: 'stats',
                    name: 'stats',
                    component: Stats
                }
            ]
        }
    ]
});

export default router