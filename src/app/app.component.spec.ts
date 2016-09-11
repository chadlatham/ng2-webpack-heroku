import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Component: App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [ provideRoutes([]) ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  // it('should have an url', () => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.componentInstance.url).toEqual('https://github.com/preboot/angular2-webpack');
  // });
});
