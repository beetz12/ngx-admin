import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxLoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NbAuthService, NbAuthModule } from '@nebular/auth';
import { NbInputDirective, NbInputModule, NbThemeModule } from '@nebular/theme';

describe('NgxLoginComponent', () => {
  let component: NgxLoginComponent;
  let fixture: ComponentFixture<NgxLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLoginComponent ],
      imports: [
        FormsModule, // Add FormsModule here
        NbInputModule,
        NbThemeModule.forRoot(),
        NbAuthModule.forRoot({
          strategies: [],
        }),
      ],
      providers: [
        { provide: NbAuthService, useValue: {} }, // Mock NbAuthService as needed
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
