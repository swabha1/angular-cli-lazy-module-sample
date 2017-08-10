import {Routes, RouterModule} from "@angular/router";
import {LazyComponent} from "./lazy.component";

const routes: Routes = [
    {path: '', component:LazyComponent}
];


export const LazyRoutes = RouterModule.forChild(routes);