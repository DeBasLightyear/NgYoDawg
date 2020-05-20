import { Component, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

type bundles = 'bootstrap3' | 'bootstrap4'

const bootstrapBundles = {
  bootstrap3: { js: 'bootstrap3-js', style: 'bootstrap3-css' },
  bootstrap4: { js: 'bootstrap4-js', style: 'bootstrap4-css' },
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yo-dawg'

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadThemes(version: bundles) {
    const elements = [
      { id: 'bootstrap-css', type: 'link' },
      { id: 'bootstrap-js', type: 'script' },
      { id: 'jquery-js', type: 'script' },
    ]

    const head = this.document.getElementsByTagName('head')[0]
    const body = this.document.getElementsByTagName('body')[0]
    const styleLink = this.document.createElement('link')
    const bootstrapScriptLink = this.document.createElement('script')
    const jqueryScriptLink = this.document.createElement('script')

    // if (themeLink) {
    //   themeLink.href=
    // }

  }
}
