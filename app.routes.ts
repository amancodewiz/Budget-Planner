import { Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';

export const routes: Routes = [
    {path:"", component: LoginComponent},
    {path:'budget-planner',loadChildren:()=> import('./budget-planner/budget-planner.module').then(m=> m.BudgetPlannerModule)}
];
