import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { LatestSensorReadingComponent } from '../latest-sensor-reading/latest-sensor-reading.component';
import { LatestSensorReadingMobileComponent } from '../latest-sensor-reading-mobile/latest-sensor-reading-mobile.component';

const mobileWidthQuery = '(max-width: 760px)';

@Component({
  selector: 'app-latest-sensor-reading-responsive',
  imports: [LatestSensorReadingComponent, LatestSensorReadingMobileComponent],
  templateUrl: './latest-sensor-reading-responsive.component.html'
})
export class LatestSensorReadingResponsiveComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly isMobile = toSignal(
    this.breakpointObserver.observe(mobileWidthQuery).pipe(map((result) => result.matches)),
    { initialValue: this.breakpointObserver.isMatched(mobileWidthQuery) }
  );
}
