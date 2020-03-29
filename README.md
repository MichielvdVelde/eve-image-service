# Eve images

Easily fetch Eve Online logos, character portraits, type icons, and type renders
from the official image service. Works in node.js and in the browser.

All methods return a `Buffer` in node.js, and an `ArrayBuffer` in the browser.

[See this blog post for more information on the image service](https://developers.eveonline.com/blog/article/from-image-server-to-a-whole-new-image-service-1).

### API

#### `fetchAllianceLogo(allianceId: string, size: number[, tenant: 'tranquility' | 'singularity' = 'tranquility'])`

Fetch the alliance logo.

* ***allianceId***: The ID of the alliance to fetch the logo for
* ***size***: The requested image size. Needs to be a power of two
* ***tenant***: The tenant, defaults to `tranquility`

#### `fetchCharacterPortrait(characterId: string, size: number[, tenant: 'tranquility' | 'singularity' = 'tranquility'])`

Fetch the character's portrait.

* ***characterId***: The ID of the character to fetch the portrait for
* ***size***: The requested image size. Needs to be a power of two
* ***tenant***: The tenant, defaults to `tranquility`

#### `fetchCorporationLogo(corporationId: string, size: number[, tenant: 'tranquility' | 'singularity' = 'tranquility'])`

Fetch the corporation logo.

* ***corporationId***: The ID of the corporation to fetch the logo for
* ***size***: The requested image size. Needs to be a power of two
* ***tenant***: The tenant, defaults to `tranquility`

#### `fetchTypeIcon(typeId: string, size: number[, tenant: 'tranquility' | 'singularity' = 'tranquility'])`

Fetch the inventory type icon.

* ***typeId***: The type ID to fetch the icon for
* ***size***: The requested image size. Needs to be a power of two
* ***tenant***: The tenant, defaults to `tranquility`

#### `fetchTypeRender(typeId: string, size: number[, tenant: 'tranquility' | 'singularity' = 'tranquility'])`

Fetch the inventory type render.

* ***typeId***: The type ID to fetch the render for
* ***size***: The requested image size. Needs to be a power of two
* ***tenant***: The tenant, defaults to `tranquility`

### Example (node.js)

The following node.js example fetches the corporation logo for
[Eve University](https://www.eveuniversity.org/) and writes it to file.

```ts
import { fetchCorporationLogo } from './index'

import { resolve } from 'path'
import { writeFile } from 'fs'

const path = resolve(__dirname, './Eve-University.png')

fetchCorporationLogo('917701062', 256).then(buf => {
  writeFile(path, buf, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`Image written to ${path}`)
    }
  })
})
```
