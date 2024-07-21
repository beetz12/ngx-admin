import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FigAppComponent } from './app.component';

describe('FigAppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [FigAppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FigAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'fig-angular-frontend'`, () => {
  //   const fixture = TestBed.createComponent(FigAppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('fig-angular-frontend');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(FigAppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('fig-angular-frontend app is running!');
  // });
});
