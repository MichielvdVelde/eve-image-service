'use strict'

import bent from 'bent'

const { name, version } = require('../package')
const userAgent = `${name}@${version}`

const request = bent('https://images.evetech.net', 'buffer', {
  'User-Agent': userAgent
})

function isPowerOfTwo (size: number) {
  return size % 2 === 0
}

/**
 * Fetch alliance logo.
 * @param  allianceId The alliance ID
 * @param  size       The requested image size
 * @param  tenant     The tenant (defaults to tranquility)
 * @return            A `Buffer` (node.js) or `ArrayByffer` (browser)
 */
export async function fetchAllianceLogo (
  allianceId: string,
  size: number,
  tenant: 'tranquility' | 'singularity' = 'tranquility'
): Promise<Buffer | ArrayBuffer> {
  if (!size || !isPowerOfTwo(size)) {
    throw new TypeError('size must be a power of two')
  }

  return request(`/alliances/${allianceId}/logo?size=${size}&tenant=${tenant}`)
}

/**
 * Fetch character portrait.
 * @param  characterId The character ID
 * @param  size       The requested image size
 * @param  tenant     The tenant (defaults to tranquility)
 * @return            A `Buffer` (node.js) or `ArrayByffer` (browser)
 */
export async function fetchCharacterPortrait (
  characterId: string,
  size: number,
  tenant: 'tranquility' | 'singularity' = 'tranquility'
): Promise<Buffer | ArrayBuffer> {
  if (!size || !isPowerOfTwo(size)) {
    throw new TypeError('size must be a power of two')
  }

  return request(`/characters/${characterId}/portrait?size=${size}&tenant=${tenant}`)
}

/**
 * Fetch corporation logo.
 * @param  corporationId The corporation ID
 * @param  size       The requested image size
 * @param  tenant     The tenant (defaults to tranquility)
 * @return            A `Buffer` (node.js) or `ArrayByffer` (browser)
 */
export async function fetchCorporationLogo (
  corporationId: string,
  size: number,
  tenant: 'tranquility' | 'singularity' = 'tranquility'
): Promise<Buffer | ArrayBuffer> {
  if (!size || !isPowerOfTwo(size)) {
    throw new TypeError('size must be a power of two')
  }

  return request(`/corporations/${corporationId}/logo?size=${size}&tenant=${tenant}`)
}

/**
 * Fetch inventory type icon.
 * @param  typeId The type ID
 * @param  size       The requested image size
 * @param  tenant     The tenant (defaults to tranquility)
 * @return            A `Buffer` (node.js) or `ArrayByffer` (browser)
 */
export async function fetchTypeIcon (
  typeId: string,
  size: number,
  tenant: 'tranquility' | 'singularity' = 'tranquility'
): Promise<Buffer | ArrayBuffer> {
  if (!size || !isPowerOfTwo(size)) {
    throw new TypeError('size must be a power of two')
  }

  return request(`/types/${typeId}/icon?size=${size}&tenant=${tenant}`)
}

/**
 * Fetch inventory type render.
 * @param  typeId The type ID
 * @param  size       The requested image size
 * @param  tenant     The tenant (defaults to tranquility)
 * @return            A `Buffer` (node.js) or `ArrayByffer` (browser)
 */
export async function fetchTypeRender (
  typeId: string,
  size: number,
  tenant: 'tranquility' | 'singularity' = 'tranquility'
): Promise<Buffer | ArrayBuffer> {
  if (!size || isPowerOfTwo(size)) {
    throw new TypeError('size must be a power of two')
  }

  return request(`/types/${typeId}/render?size=${size}&tenant=${tenant}`)
}
