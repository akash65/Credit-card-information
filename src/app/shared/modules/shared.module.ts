import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@layout/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        HeaderComponent,
        CommonModule,
        FormsModule,
        RouterModule
    ]
})

export class SharedModule { }