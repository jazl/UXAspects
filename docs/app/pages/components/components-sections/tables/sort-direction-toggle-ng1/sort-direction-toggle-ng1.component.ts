import { Component } from '@angular/core';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { ICodePenProvider } from '../../../../../interfaces/ICodePenProvider';
import { ICodePen } from '../../../../../interfaces/ICodePen';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';

@Component({
    selector: 'uxd-components-sort-direction-toggle',
    templateUrl: './sort-direction-toggle-ng1.component.html'
})
@DocumentationSectionComponent('ComponentsSortDirectionToggleNg1Component')
export class ComponentsSortDirectionToggleNg1Component extends BaseDocumentationSection implements ICodePenProvider {
    
    htmlCode = this.snippets.compiled.sampleHtml;
    jsCode = this.snippets.compiled.sampleJs;

    codepen: ICodePen = {
        html: this.snippets.raw.sampleHtml,
        htmlAttributes: {
            'ng-controller': 'SortToggleCtrl as vm'
        },
        js: [this.snippets.raw.sampleJs]
    };
    
    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }
}