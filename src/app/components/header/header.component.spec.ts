import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component.auth.authState, 'subscribe').and.stub().and.resolveTo({ user: { displayName: 'Daniel' }});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    spyOn(component.auth, 'signInWithPopup').and.stub().and.resolveTo({ user: { displayName: 'Daniel' }});
    component.login();
  })

  it('should logout', () => {
    spyOn(component.auth, 'signOut').and.stub();
    component.logout();
  })
});
