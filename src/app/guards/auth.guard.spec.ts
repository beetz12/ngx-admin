import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NbAuthService } from '@nebular/auth';

describe('AuthGuard', () => {
  it('should create an instance', () => {
    const mockRouter = {} as Router; // Mocking Router
    const mockNbAuthService = {} as NbAuthService; // Mocking NbAuthService
    expect(new AuthGuard(mockRouter, mockNbAuthService)).toBeTruthy(); // Now passing a mock NbAuthService as well
  });
});
