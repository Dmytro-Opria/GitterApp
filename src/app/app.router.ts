import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ChatpageComponent } from './component/chatpage/chatpage.component';

const AppRoutes:Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'chatpage',
        component: ChatpageComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);