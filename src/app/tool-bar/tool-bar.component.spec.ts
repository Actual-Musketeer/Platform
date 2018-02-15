import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
import { AvatarComponent } from './avatar/avatar.component';
import { ToolBarComponent } from './tool-bar.component';

describe('ToolBarComponent', () => {
    let component: ToolBarComponent;
    let fixture: ComponentFixture<ToolBarComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ToolBarComponent, AvatarComponent],
                imports: [MaterialModule, StoreModule.forRoot({})],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
