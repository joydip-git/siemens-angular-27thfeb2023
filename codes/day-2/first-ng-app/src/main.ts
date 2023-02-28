import { PlatformRef } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

console.log('journey begins')
const platform: PlatformRef = platformBrowserDynamic()
platform
  .bootstrapModule(AppModule)
  .catch(
    (err) => console.log(err)
  )