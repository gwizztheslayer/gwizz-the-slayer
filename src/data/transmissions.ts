export interface Transmission {
  id: string;
  slug: string;
  title: string;
  status: "CLASSIFIED" | "DECRYPTED";
  releaseStatus: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: string;
}

export const transmissions: Transmission[] = [
  {
    id: "tx-01",
    slug: "knysnas-saviours-impending-storm",
    title: "TRANSMISSION 01 // THE IMPENDING STORM OF KNYSNA'S SAVIOURS",
    status: "CLASSIFIED",
    releaseStatus: "UNRELEASED",
    date: "2026-06-15",
    metaTitle: "G-Wizz, The Slayer - Knysna's Saviours Album Intel",
    metaDescription: "The true architects of the Western Cape's dark trap scene prepare for Knysna's Saviours, the highly anticipated album by G-Wizz, The Slayer and Icebergh.",
    keywords: ["Knysna underground hip-hop", "Western Cape trap scene", "G-Wizz The Slayer new album", "Icebergh", "Ceoxcam88 production"],
    excerpt: "The true architects of the Western Cape's dark trap scene are preparing to drop a masterpiece. Prepare for Knysna's Saviours.",
    content: `The underground is bracing for a tectonic shift. While the masses consume algorithmic noise, the true architects of the Western Cape's dark trap scene are preparing to drop a masterpiece: Knysna's Saviours.

This unreleased project is a heavy-hitting collaborative album between G-Wizz, The Slayer and Icebergh. To ensure the sonic architecture matches the grim reality of the streets, the entire project is executive produced by the legendary Ceoxcam88.

The visual identity of this upcoming release perfectly encapsulates the audio-visual horror aesthetic of the Syndicate. The cover art juxtaposes extreme violence with local South African serenity—featuring a decapitated man in a formal suit, a medieval sword driven entirely down the stump of his neck, all seated calmly at a wooden desk against the breathtaking backdrop of the Knysna waters at sunset. It is a statement: blood has been spilled to conquer this territory in the South African hip-hop underground, and the Saviours have arrived. Keep your eyes on the Vault—when this drops, the landscape changes forever.`
  },
  {
    id: "tx-02",
    slug: "heaven-is-what-you-make-it-descent",
    title: "TRANSMISSION 02 // DESCENT INTO THE ABYSS: HEAVEN IS WHAT YOU MAKE IT",
    status: "DECRYPTED",
    releaseStatus: "RELEASED",
    date: "2026-05-20",
    metaTitle: "Inside the Audio-Visual Horror of Heaven Is What You Make It",
    metaDescription: "Explore the macabre audio-visual horror of Heaven Is What You Make It And Hell Is What You Go Through, the defining dark trap album by G-Wizz, The Slayer.",
    keywords: ["Dark trap album", "audio-visual horror rap", "distorted 808s", "South African underground rap", "G-Wizz The Slayer discography"],
    excerpt: "Explore the macabre audio-visual horror of Heaven Is What You Make It And Hell Is What You Go Through, the defining dark trap album.",
    content: `For those who have fully immersed themselves in the audio-visual horror experience, the album Heaven Is What You Make It And Hell Is What You Go Through stands as a monument to the macabre.

This project strips away any remaining light, dragging the listener into a pure, unadulterated nightmare of dark trap production. The thematic duality of the title is perfectly reflected in the terrifying cover art, which features a central, demonic entity with piercing, fiery orange eyes grinning menacingly from the darkness. Surrounding this central figure is a vortex of screaming, ethereal spirits and ghosts rendered in a ghostly, toxic blue-green hue.

This album isn't just a collection of underground rap tracks; it is a psychological gauntlet. It explores the extreme polarity of the human experience through the lens of distorted 808s and intricate, dark lyricism. It is the definitive soundtrack for the demons that don't sleep.`
  },
  {
    id: "tx-03",
    slug: "syndicate-singles-archive-four-horsemen",
    title: "TRANSMISSION 03 // THE FOUR HORSEMEN: SYNDICATE SINGLES ARCHIVE",
    status: "DECRYPTED",
    releaseStatus: "RELEASED",
    date: "2026-04-12",
    metaTitle: "G-Wizz, The Slayer - Underground Singles Vault Analysis",
    metaDescription: "Dive into the Vault's singles archive. Discover the heavy trap production and dark collaborations behind BOZZA, CX, DRIP, and DROWNING.",
    keywords: ["G-Wizz The Slayer singles", "Acidiq Truth", "XXXceptional", "Dash Maejor", "Lac Didit trap beats", "Knysna rap collaborations"],
    excerpt: "Dive into the Vault's singles archive. Discover the heavy trap production and dark collaborations behind BOZZA, CX, DRIP, and DROWNING.",
    content: `Before the major albums reshape the foundation, the path was paved in blood by a ruthless run of underground trap singles. These four drops highlight the collaborative power and evolving visual aesthetic of G-Wizz, The Slayer:

• BOZZA: A lethal collaboration between G-Wizz, The Slayer and Icebergh. Stripping away the chaotic horror for a moment, this single relies on a minimalist, premium aesthetic, featuring a sleek, gold-embossed insignia against a pure black background, signaling a shift toward hip-hop kingpin status.

• CX: Expanding on the decapitation lore of Knysna's Saviours, the artwork for \"CX\" places the same sword-pierced, headless man in a suit deep within a suffocating, dark forest, accompanied by a lone bird and a chalice. This track expands the Syndicate's network, bringing in high-level features from Acidiq Truth and XXXceptional.

• DRIP: A chaotic, frantic visual representation of modern trap energy. The cover art utilizes a raw, black-and-white sketch style of a figure adjusting a cap, surrounded by manic, blood-red graffiti repeating the word \"DRIP\", with heavy production ties to Ceoxcam88.

• DROWNING: The ultimate culmination of the horror trap aesthetic. Featuring verses from Dash Maejor and Icebergh, and backed by the heavy production of Lac Didit. The visual is apocalyptic, showcasing a charred, demonic hand reaching desperately out of a literal lake of fire and molten lava.`
  }
];