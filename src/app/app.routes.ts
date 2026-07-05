import { CanMatchFn, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LatestSensorReadingComponent } from './components/latest-sensor-reading/latest-sensor-reading.component';
import { LatestSensorReadingMobileComponent } from './components/latest-sensor-reading-mobile/latest-sensor-reading-mobile.component';
import { SensorReadingComponent } from './components/sensor-reading/sensor-reading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const mobileWidthQuery = '(max-width: 760px)';
const mobileDevicePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const isMobileDevice: CanMatchFn = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }

  return window.matchMedia(mobileWidthQuery).matches || mobileDevicePattern.test(navigator.userAgent);
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'latest-sensor-reading', component: LatestSensorReadingMobileComponent, canMatch: [isMobileDevice] },
  { path: 'latest-sensor-reading', component: LatestSensorReadingComponent },
  { path: 'sensor-reading', component: SensorReadingComponent },
  { path: '**', component: NotFoundComponent }
];
