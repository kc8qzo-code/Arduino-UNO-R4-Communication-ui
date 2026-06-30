import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LatestSensorReadingComponent } from './components/latest-sensor-reading/latest-sensor-reading.component';
import { SensorReadingComponent } from './components/sensor-reading/sensor-reading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'latest-sensor-reading', component: LatestSensorReadingComponent },
  { path: 'sensor-reading', component: SensorReadingComponent },
  { path: '**', component: NotFoundComponent }
];
