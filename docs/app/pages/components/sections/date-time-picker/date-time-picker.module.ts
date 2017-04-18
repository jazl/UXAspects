import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentationComponentsModule } from '../../../../components/components.module';
import { ResolverService } from '../../../../services/resolver/resolver.service';
import { DocumentationCategoryComponent } from '../../../../components/documentation-category/documentation-category.component';

import { ComponentsDatePickerNg1Component } from './date-picker-ng1/date-picker-ng1.component';
import { ComponentsIntegratedDatePickerNg1Component } from './integrated-date-picker-ng1/integrated-date-picker-ng1.component';
import { ComponentsDateRangePickerNg1Component } from './date-range-picker-ng1/date-range-picker-ng1.component';
import { ComponentsTimePickerNg1Component } from './time-picker-ng1/time-picker-ng1.component';
import { WrappersModule } from '../../../../wrappers.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

const SECTIONS = [
    ComponentsDatePickerNg1Component,
    ComponentsIntegratedDatePickerNg1Component,
    ComponentsDateRangePickerNg1Component,
    ComponentsTimePickerNg1Component
];

const ROUTES = [
    {
        path: '**',
        component: DocumentationCategoryComponent,
        data: {
            category: {
                'title': 'Date & Time Pickers',
                'link': 'date-time-picker',
                'sections': [
                    {
                        'title': 'Date Picker',
                        'component': 'ComponentsDatePickerNg1Component',
                        'version': 'AngularJS'
                    },
                    {
                        'title': 'Integrated Date Picker',
                        'component': 'ComponentsIntegratedDatePickerNg1Component',
                        'version': 'AngularJS'
                    },
                    {
                        'title': 'Date Range Picker',
                        'component': 'ComponentsDateRangePickerNg1Component',
                        'version': 'AngularJS'
                    },
                    {
                        'title': 'Time Picker',
                        'component': 'ComponentsTimePickerNg1Component',
                        'version': 'AngularJS'
                    }
                ]
            }
        }
    }
];

@NgModule({
    imports: [
        WrappersModule,
        TabsModule,
        DocumentationComponentsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: SECTIONS,
    declarations: SECTIONS,
    entryComponents: SECTIONS
})
export class ComponentsDateTimePickerModule {

    constructor(componentFactoryResolver: ComponentFactoryResolver, resolverService: ResolverService) {
        resolverService.registerResolver(componentFactoryResolver);
    }
}