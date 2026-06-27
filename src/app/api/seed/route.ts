import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const payloads = [
    {
      title: "Drip (Prod. CeoxCam88)",
      cover_image: "/images/drip.jpg",
      text_content: `Cam got that drip, yeah
G-Wizz got that drip, yeah
I've been sliding on these beats, I've been feeling like this sht, yeah
I've been doing numbers four digits all in a day, btch
Me I gotta get it, I got no time to be wasting
Every single thing I do is motherfcking amazing
Btch I'm not from earth I was brought down by a spaceship
Knysna's where I landed so I made it my home base yeah
Baby I'm a beast nobody 'round me be safe, yeah
All I eat is pssy and beats 'til I'm constipated
Every single thing I do is motherfcking major
I've been running sht since I've been a baby in a manger
Call me Lil Lava Baby aka nice [Knysna's Saviour](40078611)
Yeah, I've been losing patience
With these nggas talking 'bout my name on some basic
Sht lately I've been deciphering who real and fake is
I can tell that you jealous by the look on your faces
That sht so outrageous, y'all nggas fcking shameless
I ain't got time for nggas unless it 'bout business
I've been on a mission for money power and bad btches
As long as I got Cam on the beat ngga we all winning
Cam got that drip, yeah
G-Wizz got that drip, yeah
I've been sliding on these beats, I've been feeling like this sht, yeah
I've been doing numbers four digits all in a day, btch
Me I gotta get it, I got no time to be wasting
Every single thing I do is motherfcking amazing
Btch I'm not from earth I was brought down by a spaceship
Knysna's where I landed so I made it my home base yeah
Baby I'm a beast nobody 'round me be safe, yeah
I've been down and out
But I'm so up right now
Used to be the one they hate but they sure love me now
Fcking disrespect on me and mine I won't allow
Test me ngga you gon' find out what I'm talking 'bout
I got grown men in their feelings now
I got your btch fcking sucking my genitals
I'm so determined to win I can't lose focus now
As long as Cam feed me beats I'ma hold us down
Cam got that drip, yeah
G-Wizz got that drip, yeah
I've been sliding on these beats, I've been feeling like this sht, yeah
I've been doing numbers four digits all in a day, btch
Me I gotta get it, I got no time to be wasting
Every single thing I do is motherfcking amazing
B*tch I'm not from earth I was brought down by a spaceship
Knysna's where I landed so I made it my home base yeah
Baby I'm a beast nobody 'round me be safe, yeah`
    },
    {
      title: "CX feat. Acidiq Truth, Icebergh & XXXceptional",
      cover_image: "/images/cx.jpg",
      text_content: `[Intro / Acidiq Truth]
CX nigga
Coming to ya live
CX nigga
Uh
Listen baby
CX
From the Southside in the Western Cape
Niggas wanna try us but you know I really got my cape
Not superman but I'm feeling superman
Going out the top of the dome I'm still with my niggas
Flying
Trying to get me something right
Really in the hood and we really rapping shit is light
Niggas keep on talking but you know they never get it right
I be with my niggas and we rapping out all night
Rapping out all day
Oh wait
It's 2025 he wrap me like it's 99
How many times he had to cry man a couple of times
In my city had to run it and I really had to represent CX
That's the best side West side
Niggas wanna try I
Nice try
I just wanna get me something I be rapping most the time
They thought I was deranged
Just listen I just arrange
These niggas just keep on talking but you know they fit the frame
Thinking they get the picture but they never seen a frame
I'm trying to get me something I be working every day
Yeah I be on the grind with my niggas most the time and we really trying to shine
It's that time my nigga
Real time my nigga
Real nigga time if you scared get out my nigga
I'm trying to get me something
Scared money don't make money so I just count it
I'm trying to get me something right

[G-Wizz, The Slayer]
Live from the 6570
Knysna that's the town where your nigga was born
I just spit hot fire you would think I got horns
I got niggas following me I'm praising me like the Lord
Yeah
When I'm on these beats I ain't got no remorse
I've been killing all these rappers make them wish they weren't born
All I ever wanted was peace but I'm so ready for war
Got these niggas just up
So I've been pressing them more
Yeah I just say what comes to mind I never get second thoughts
I wear my heart on my sleeve just like some Comme des Garçons
I've been getting money daily and I need me some more
I'm just trying to get me something that you cannot afford
Yeah a little peace of mind from here on forward
I just wanna make my mom proud and watch me evolve
Loyalty is everything I don't ask for more
Cause if I win we win big rewards
We be flexing on them boys got these niggas envious
Bitches wanna fuck us and make some porn videos
I've been on a money mission man I gotta get it yo
My portfolio diversified full of crypto
I've been running to the cash other niggas fucking slow
Haters say that they don't like me but they feel me on the low
All my niggas TTG nigga we be trained to go
Had to get Icebergh on this shit cause I'm too cold

[Icebergh]
Aan sy liggende
Rol my geen blinde
Man alleen koue skouers vir my koentendes
Dag in dag lewe ek lyk asof my laaste is
Jongens hules rappers maar hulle weet nie waarkom same dit
Klonge het nie gevra vir dit klonge is gemaak vir dit
Waar was al die jongens toe ek foken begin grind en shit
Almal se dis beste maar my mind kan foken staan vir dit
Regte koue spys op jou emosies foken kak op dit
Word my dag in in niggas na legal
Ek bly elke dag wug soos n eagle
Julle pass aan saam my nooit kan tref soos steven seagull
Sy vra pomp in real life en sy singel
'n piece op my ne piepie
Ek is n groot tier
Dra my hart op my arm soos 'n fcking trigger
Jou bitch is dieke fck a figure oes a figure
Sy lyk baie vrou mens en maak is vir die geil liewer
Klonge is 'n ngga wat die way maak
Sy sy tiepe ngga wat n jou bitch sal uit praat
Ek sy tiepe ngga wat vir jou moes die tyd maak en haar rug sak en haar slaan me bra ek is n draad
Ek het die game in a choke
Die ngga hoed foken oop oordruk die lewe is jou hoed
Julle dink mos julle is spotters hoor jy sê die woord vir my
Ek dink dit is seker f*ckol
My naam bly in jou bekke meer as hulle tande borsel

[XXXceptional]
Where do I begin
I'm looking for my purpose so the search starts within
Make peace with the fact that I wanna see us win
Spend a couple nights with the lions in the den
I am Daniel
But I'm looking for revenge
And I'm gonna make sure that you feel the pain through my pen
We just got here how the fuck are we fell off
Fuck talking nice
I'm about to go off
She say I act coy but she don't know that I'm Koi San plus we been here long time in this game son
And I'm still down ten toes with my day ones no need for introduction cause you know who we are
I love it when you tell me we will never get far
I came from the bottom now your boy is a star
They don't understand so I gotta make it clear
Came from the bottom so it's only up from here`
    },
    {
      title: "Taking Over Feat. Ace Mclein (Prod. G-Wizz, The Slayer)",
      cover_image: "/images/taking-over.jpg",
      text_content: `G-WIZZ THE SLAYER

Yeah, uh, I feel them takin' over
I can't sleep at night, monsters in my bed Every night takin' over
Evil spirits straight from hell I don't know, but they be takin' over
I be, I've been going through some shit that I don't know
I've been figuring it out as I go
I'm done fucking round with these trifling hoes
I got way too much shit going on right now
I got triple nine problems and none of it is a hound
I've been hustling stacking my papers straight up from the ground
I admit it I been down but I'm up right now Money is the mission I can't get distracted by bitches I hope you get the picture
I'm  trying to live better But sometimes the devil get me and that's when I act a menace I get it
Yeah I pray that God forgive me for every time that I pushed my limits me I'm just a fucking sinner
Yeah I'm trying to get it together But lately the life that I'm living got me fucking livid I'm so I'm so fed up
Yeah sometimes these bottled emotions that I have might get out
I might spaz the fuck the hell out
Yeah Nobody's safe around me when I aire some shit out

(ACE MCLEIN)
Can I get a hallelujah
All these fucking demons trying to get me Well I'm the one to get them
My nigga I'll be steady taking over
Fuck around I get it down
Transparency you see my soul
Flip a coin I'll sell your shit
Nigga you already sold
I be on my six six Add another six
G-Wizz making hits We'd be sick
Add another hit
Only get me on the telly Talking numbers Add another brick
I'm taking over Bitch get off my dick
I wanna do it sober
My liver full of liquor No do-overs Scoot over
My nigga I've been taking over

(G-WIZZ, THE SLAYER)
People follow me like I'm Jehovah
Even though I'm a bad influence, they love me still
I've been trying to be good but my demons, they won't let me go
I've been places in hell where you niggas never been before
All this fucking trauma I got turned my fucking heart so cold
I just say just how I feel, man, I don't give no fuck  no more
I got so much people from my past, I blatantly ignore
I swear I'm not a monster, I hope that you can forgive me lord
Cause sometimes I go overboard
And I say things and I do things with no remorse
And sometimes I feel bad for the shit that I do
But mostly I feel nothing at all
I can feel them taking over, I can feel them taking over
I can feel them taking over`
    },
    {
      title: "Metamorphosis Feat. HellRaizer (Prod. Chemist)",
      cover_image: "/images/metamorphosis.jpg",
      text_content: `[Chorus]
(HellRaizer)
Shed my skin, now I rise from the grave
No remorse, no soul left to save
They don’t know me, I ain’t made the same
Dark rebirth, I embrace the pain
Ghost in the wind, I drift through the mist
Cold as the night, I cease to exist
Buried my past, let the demons assist
Metamorphosis—ain’t no turnin’ from this
I took that dive, left my mind in the pit
Used to feel love, now all I feel is sick
Turned to a beast, I can’t be ignored
Speak my name, watch the blood hit the floor
Walked through hell to dance in the flames
No repentance, just let it rain
Ain’t no turnin, can't be saved
Metamorphosis bring on the change

[Verse]
(G-Wizz, The Slayer)
I've been going through some changes I am not the same
Nigga, that you used to know From back in the day
I don't even think the same I've been moving different ways
I've been grinding every day My mood changes every day
I've been lonely and depressed I've been chasing some happiness
I've been getting shit off my chest Niggas hate but I could care less
I'm too blessed to be stressed by shit I've been doing for me what's best
I've been focused on my assets I've been playing this game like chess
I've been fucking five moves ahead I hear voices all in my head
Sometimes I feel like I'm possessed I got demons all in my bed
People follow me like the fist They all see my fucking progress
I've been changing over the years I've been through metamorphosis Yeah

[Chorus]
(HellRaizer)
Shed my skin, now I rise from the grave
No remorse, no soul left to save
They don’t know me, I ain’t made the same
Dark rebirth, I embrace the pain
Ghost in the wind, I drift through the mist
Cold as the night, I cease to exist
Buried my past, let the demons assist
Metamorphosis—ain’t no turnin’ from this
I took that dive, left my mind in the pit
Used to feel love, now all I feel is sick
Turned to a beast, I can’t be ignored
Speak my name, watch the blood hit the floor
Walked through hell to dance in the flames
No repentance, just let it rain
Ain’t no turnin, can't be saved
Metamorphosis bring on the change

[Verse]
(G-Wizz, The Slayer)
Metamorphosis, metamorphosis Metamorphosis, metamorphosis
Yeah, metamorphosis, metamorphosis Metamorphosis, metamorphosis
Yeah, I've been on my shit I've been balling every year
I've been facing all my fears I've been out here taking risks
I'm the opposite of them I just can't seem to fit in
Man, you'll never comprehend All this shit that I've seen
All this shit that I've been Threw has turned me what Im in
Yeah, metamorphosis I've been changing over years
Yeah, I'm so fucking lit That they follow my shit
I've been morphing into something that isn't normal
Yeah, metamorphosis Metamorphosis, metamorphosis`
    }
  ];

  try {
    // 1. WAKE UP DB AND GUARANTEE TABLE EXISTS
    await sql`
      CREATE TABLE IF NOT EXISTS lyrics (
        id SERIAL PRIMARY KEY,
        track_slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        text_content TEXT NOT NULL,
        cover_image VARCHAR(255),
        genius_url VARCHAR(255),
        bg_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. SAFELY ADD THE NEW COLUMN IF IT WAS MISSING
    try { await sql`ALTER TABLE lyrics ADD COLUMN cover_image VARCHAR(255);`; } catch (e) { /* Column likely exists */ }

    // 3. INJECT THE PAYLOADS
    for (const track of payloads) {
      const track_slug = track.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      await sql`
        INSERT INTO lyrics (track_slug, title, text_content, cover_image)
        VALUES (${track_slug}, ${track.title}, ${track.text_content}, ${track.cover_image})
        ON CONFLICT (track_slug) 
        DO UPDATE SET title = EXCLUDED.title, text_content = EXCLUDED.text_content, cover_image = EXCLUDED.cover_image, created_at = CURRENT_TIMESTAMP;
      `;
    }
    return NextResponse.json({ message: "MASS INJECTION SUCCESSFUL. TABLE VERIFIED AND ALL TRACKS SAVED." }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "MASS INJECTION FAILED.", details: error.message }, { status: 500 });
  }
}
