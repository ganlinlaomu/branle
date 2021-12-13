import Identicon from 'identicon.js'

export function displayName(state) {
  return pubkey => {
    let {metadata = {}} = state.profilesCache[pubkey] || {}
    if (metadata.name) return metadata.name
    return pubkey.slice(0, 3) + '...' + pubkey.slice(-4)
  }
}

export function avatar(state) {
  return pubkey => {
    let {metadata = {}} = state.profilesCache[pubkey] || {}
    if (metadata.picture) return metadata.picture
    let data = new Identicon(pubkey, 40).toString()
    return 'data:image/png;base64,' + data
  }
}