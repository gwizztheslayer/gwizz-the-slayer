import { type SchemaTypeDefinition } from "sanity"
import album from "./album"
import track from "./track"
import digitalAsset from "./digitalAsset"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [album, track, digitalAsset],
}