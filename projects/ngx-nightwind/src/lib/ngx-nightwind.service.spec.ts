import { TestBed } from '@angular/core/testing';

import { NgxNightwind } from './ngx-nightwind.service';
import { provideNgxNightwind } from './ngx-nightwind.provider';

describe('NgxNightwindService', () => {
  let service: NgxNightwind;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNgxNightwind()]
    });
    service = TestBed.inject(NgxNightwind);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should toggle between light and dark mode', () => {
    service.enableLight();
    expect(document.documentElement.classList).toContain('light');
    
    service.toggle();
    expect(document.documentElement.classList).toContain('dark');
    
    service.toggle();
    expect(document.documentElement.classList).toContain('light');
  });
  
  it('should enable light mode', () => {
    service.enableLight();
    expect(document.documentElement.classList).toContain('light');
  });
  
  it('should enable dark mode', () => {
    service.enableDark();
    expect(document.documentElement.classList).toContain('dark');
  });
  
  it('should return current mode', () => {
    service.enableLight();
    expect(service.currentMode).toEqual('light');
    
    service.enableDark();
    expect(service.currentMode).toEqual('dark');
  });
  
  it('should return true for dark mode', () => {
    service.enableDark();
    expect(service.isDark).toBeTruthy();
  });
  
  it('should return true for light mode', () => {
    service.enableLight();
    expect(service.isLight).toBeTruthy();
  });
  
});
