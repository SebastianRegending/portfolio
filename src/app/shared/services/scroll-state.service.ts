import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {
  private previousScrollPositionSource = new BehaviorSubject<number>(0);
  previousScrollPosition$ = this.previousScrollPositionSource.asObservable();

  setPreviousScrollPosition(position: number): void {
    this.previousScrollPositionSource.next(position);
  }
}