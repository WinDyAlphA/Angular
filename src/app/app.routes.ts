import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { UserdetailsComponent } from "./userlist/userdetails/userdetails.component";
import { UseraddComponent } from "./userlist/useradd/useradd.component";
import { UsermodifComponent } from "./userlist/usermodif/usermodif.component";

export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'userlist', component: UserlistComponent },
    { path: 'userdetails/:id', component: UserdetailsComponent },
    { path: 'useradd', component: UseraddComponent },
    { path: 'usermodif/:id', component: UsermodifComponent }
    
];
