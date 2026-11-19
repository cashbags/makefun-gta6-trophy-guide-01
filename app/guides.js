// Per-trophy strategy notes for Leonida Legend, written for this
// guide on 19 November 2026, launch day. Every note is our own
// wording; the facts it states come from the sources it names, and
// the status field says how solid the method is:
//
//   confirmed   — the method is confirmed by a launch-day guide, or
//                 follows straight from the official description.
//   reported    — one launch-day report names a method, and no second
//                 guide has confirmed it yet. Treat it as a lead.
//   unconfirmed — no guide has pinned the method down yet. The note
//                 says what the description hints at and nothing more.
//
// The official names, descriptions and grades live only in
// data/trophies.json. This file carries no copy of them — no name,
// no description, no grade, no hidden flag — only strategy, keyed
// by trophy id. The app joins the two files by id at run time, so
// the list can stay official while the guidance stays original.
//
// Each entry answers five questions in order: what to do, the route
// and sequence, what to have ready before you start, when to do it,
// and what can go wrong. A note that cannot answer one of those
// honestly says so instead of inventing an answer.

export const STRATEGIES = [
  {
    id: 1,
    status: 'confirmed',
    strategy: 'There is no shortcut to this one: it arrives the moment ' +
      'the other 54 are done, so treat it as a finish line rather than ' +
      'a task. Play the campaign through, clear the side strands and ' +
      'the activities, then sweep the collectibles and the money goals, ' +
      'and check the in-game 100% Completion list last.',
    route: 'Story first, then the stranger strands, then the activity ' +
      'counts, then the collectibles and money, then the completion ' +
      'checklist. A Long Road is the trophy that usually lands just ' +
      'before this one, so when it pops, the platinum is one step away.',
    prep: 'Keep a manual save at the start of every chapter and one ' +
      'more before the final mission, using the game’s 15 save slots. ' +
      'Those saves are the only way back, since there is no mission replay.',
    timing: 'Last, after everything else. Nothing about it can be missed, ' +
      'since every other trophy can be earned in free roam after the story.',
    pitfalls: 'Do not leave the full-set goals for the end: all 42 Shooting ' +
      'Range gold medals are needed for 100% completion, and they are ' +
      'the slowest single item on the list. Chip away at them mid-game.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 2,
    status: 'confirmed',
    strategy: 'Play the mission that opens the game, Gone Fishing, ' +
      'through to its end. It is the first mission you are given, so ' +
      'there is nothing to unlock first, no gear to gather, and no way ' +
      'to skip past it.',
    route: 'Start a new playthrough and follow the opening mission ' +
      'wherever it leads. The trophy lands when the mission wraps up.',
    prep: 'Nothing is needed before you start. This is the game’s ' +
      'first step, and it teaches the controls as it goes.',
    timing: 'At the very start of a playthrough, in the first minutes.',
    pitfalls: 'There is nothing to miss here. If you are used to open-world ' +
      'games, resist wandering off mid-mission: the trophy only pops ' +
      'when the mission itself finishes.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 3,
    status: 'confirmed',
    strategy: 'Play Chapter 1 to its end, and handle the balcony ' +
      'meditation before the chapter closes. After the mission Down to ' +
      'Earth, look for Lucia at Jason’s house in the morning and follow ' +
      'her out when she brings up meditating. That moment does not come ' +
      'back, and the game has no mission replay.',
    route: 'Down to Earth first, then the morning scene at Jason’s house, ' +
      'then the balcony, then the rest of the chapter. Do the balcony ' +
      'step the first morning it is offered, not the last.',
    prep: 'Make a manual save at the start of Chapter 1 and another one ' +
      'just before Down to Earth. If the morning scene passes without ' +
      'the meditation, those saves are the only way back.',
    timing: 'Before Chapter 1 ends — the one missable step in the whole ' +
      'list sits inside this chapter.',
    pitfalls: 'This is the only trophy on the list that can be missed. ' +
      'Rushing through Chapter 1 without checking on Lucia in the ' +
      'morning is the one mistake that costs a full replay.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 4,
    status: 'confirmed',
    strategy: 'Play Chapter 2 to its end. This is the chapter where ' +
      'Jason and Lucia are both playable, which is also the point where ' +
      'most of the open-world list opens up — activities, strangers ' +
      'and free-roam feats become available from here.',
    route: 'Follow the chapter’s missions in story order. Between ' +
      'missions, start trying the activities that have just unlocked ' +
      'instead of saving them all for after the credits.',
    prep: 'No special gear is needed. A save at the start of the ' +
      'chapter is still worth making, as it is for every chapter.',
    timing: 'Story order; nothing here can be missed.',
    pitfalls: 'None. The only waste here is leaving the chapter without ' +
      'sampling the newly opened activities — the nine-activity trophy ' +
      'is cheap to start now.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 5,
    status: 'confirmed',
    strategy: 'Play Chapter 3 to its end. By now the map is wide open, ' +
      'so use the travel between missions to start the long counts — ' +
      'WAiNK scans, vehicle discoveries and stunt attempts — instead ' +
      'of leaving them all for after the credits.',
    route: 'Missions in story order, with the long counts folded into ' +
      'the travel between them. Scan every new vehicle you pass and ' +
      'attempt stunts on roads you are driving anyway.',
    prep: 'Keep the WAiNK app in mind from the first mission of the ' +
      'chapter. No purchase is needed; the habit is the preparation.',
    timing: 'Story order; a good chapter to start the long grinds in passing.',
    pitfalls: 'Saving every count for the post-story clean-up turns a ' +
      'steady trickle into a long grind. The counts are painless only ' +
      'while the story is still giving you reasons to travel.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 6,
    status: 'confirmed',
    strategy: 'Play Chapter 4 to its end. This chapter also holds the ' +
      'optional mission “That’s Where The Money Is…”, which opens the ' +
      'eight large bank vaults — leave the last vaults alone until that ' +
      'mission has run, so the vault count is not wasted early.',
    route: 'Story missions first, then the optional vault mission when ' +
      'it appears, then the vault robberies. Robbing vaults before the ' +
      'optional mission runs can leave you short of the full set later.',
    prep: 'Hold off on bank vaults until the optional mission unlocks ' +
      'them. A manual save before the optional mission is cheap insurance.',
    timing: 'Story order. Hold off on the final bank vaults until the ' +
      'optional mission unlocks them.',
    pitfalls: 'Burning vault attempts before the optional mission is the ' +
      'trap here. Five vaults earn the trophy, but 100% completion ' +
      'wants all eight, so every early vault is a vault spent twice.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 7,
    status: 'confirmed',
    strategy: 'Play the final mission to its end. Before you start it, ' +
      'make a manual save: the game offers no mission replay and no ' +
      'new game plus, so that save is the only way to return to the ' +
      'finale later, for example to re-watch it or to test a different ' +
      'approach.',
    route: 'Save manually, then start the final mission and play it ' +
      'through. The trophy lands when the mission closes and the ' +
      'credits roll.',
    prep: 'One manual save slot, made just before the final mission. ' +
      'Check that it is a fresh slot, not an overwrite of your ' +
      'chapter-start save.',
    timing: 'End of the story. Save manually just before it.',
    pitfalls: 'Starting the finale on your only recent save and then ' +
      'wanting to replay it is the mistake. After the credits, free ' +
      'roam continues, but the finale itself does not replay.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 8,
    status: 'confirmed',
    strategy: 'Play the mission Breakfast Run through to its end. Like ' +
      'the other mission trophies, it lands when the mission wraps up — ' +
      'no extra objective is needed beyond finishing it.',
    route: 'Follow the mission marker when the story offers it and ' +
      'play it straight through. There is no detour worth taking ' +
      'inside it for this trophy.',
    prep: 'Nothing special. Arrive with whatever the story has given ' +
      'you so far; the mission is tuned for that point in the game.',
    timing: 'Story order.',
    pitfalls: 'None. Mission trophies cannot be missed, and this one ' +
      'asks for nothing beyond a finish.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 9,
    status: 'confirmed',
    strategy: 'Play the mission The Cartel Heist through to its end. ' +
      'It is a heist set-piece, so expect a longer mission; the trophy ' +
      'lands when the crew gets clear and the mission closes.',
    route: 'Play the heist in story order and stay with the crew’s ' +
      'plan rather than improvising. The closing escape is part of ' +
      'the mission, not an afterthought.',
    prep: 'Set aside a longer session than a normal mission takes. ' +
      'Heist set-pieces run long, and quitting midway wastes the run-up.',
    timing: 'Story order.',
    pitfalls: 'None for the trophy itself. The only cost of failing ' +
      'mid-heist is replaying the mission, since there is no checkpoint ' +
      'shopping around it.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 10,
    status: 'confirmed',
    strategy: 'Play the mission Child’s Play through to its end. The ' +
      'trophy is tied to finishing the mission, not to any optional ' +
      'objective inside it, so a clean finish is all it asks.',
    route: 'Take the mission when the story offers it and play it ' +
      'through to the results screen.',
    prep: 'Nothing special is needed before you start.',
    timing: 'Story order.',
    pitfalls: 'None. Optional objectives inside the mission do not ' +
      'gate this trophy, so do not chase them for its sake.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 11,
    status: 'confirmed',
    strategy: 'Play the mission Headliners through to its end. Finish ' +
      'it and the trophy follows at the mission results screen.',
    route: 'Follow the story to Headliners and play it straight through.',
    prep: 'Nothing special is needed before you start.',
    timing: 'Story order.',
    pitfalls: 'None. Like the other mission trophies, a finish is enough.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 12,
    status: 'confirmed',
    strategy: 'Play the mission VCIA Takedown through to its end. The ' +
      'airport setting is also worth remembering later: the ' +
      'unscheduled-departure trophy, Catch Me If You Can, happens at ' +
      'this same airport in free roam.',
    route: 'Play the mission at Vice City International Airport in ' +
      'story order, then note the airport’s layout for later — the ' +
      'runways and the departing planes matter again after the story.',
    prep: 'Nothing special. Use the mission itself to learn where the ' +
      'runways and the parked aircraft are.',
    timing: 'Story order.',
    pitfalls: 'None for this trophy. The only loss is forgetting the ' +
      'airport afterwards, when the free-roam departure trophy is ' +
      'far easier with the layout already in mind.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 13,
    status: 'confirmed',
    strategy: 'Play the mission Operation Savage Glory through to its ' +
      'end. It is one of the later named missions, so it lands well ' +
      'into the campaign, and a finish is all it asks.',
    route: 'Follow the story into the later chapters and take the ' +
      'mission when it appears.',
    prep: 'Arrive with the weapons and gear the later story has given ' +
      'you; the mission is tuned for that stage of the game.',
    timing: 'Story order, later in the campaign.',
    pitfalls: 'None. Mission trophies cannot be missed.',
    sources: ['official', 'planetgta6'],
  },
  {
    id: 14,
    status: 'confirmed',
    strategy: 'Open Progress, then Stats, then 100% Completion and work ' +
      'down the list it shows. Most entries ask for only part of a ' +
      'total — 300 of 397 stunts, 70 of 80 challenges, 15 of 18 card ' +
      'sets — while a few demand the full set, such as all 42 Shooting ' +
      'Range gold medals. KeenGamer puts a platinum run at around 200 ' +
      'hours, and this is the trophy that eats most of them.',
    route: 'Work the checklist in the order it is cheapest: finish the ' +
      'partial totals first, then the full-set items, then the last ' +
      'few stragglers. Keep the Progress menu open between sessions ' +
      'so you always know what is left.',
    prep: 'Start the long counts during the story, not after it: ' +
      'stunts, challenges, card sets and range medals all build ' +
      'faster while you are travelling between missions anyway.',
    timing: 'Last, after the story. It is the hardest trophy on the ' +
      'list and the usual gate before the platinum.',
    pitfalls: 'Leaving the 42 range golds for the end is the classic ' +
      'mistake — there is no partial credit for them. The second is ' +
      'stopping the stunt count at 250, when 100% wants 300.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 15,
    status: 'confirmed',
    strategy: 'Attempt stunts until 250 are complete. The game counts ' +
      '397 stunts in total, so this trophy needs just over three-fifths ' +
      'of them — and 100% completion asks for 300, so do not stop at ' +
      '250. Stunt jumps, airtime and near-miss driving all feed the ' +
      'count; keep a fast car and a bike handy and fold stunt attempts ' +
      'into travel.',
    route: 'Fold attempts into ordinary travel first, then sweep the ' +
      'remaining stunt spots once the story is done. Use the Progress ' +
      'menu to see which kinds of stunt are lagging behind.',
    prep: 'Keep both a fast car and a bike available. Jumps favour ' +
      'speed, airtime favours ramps, and near-misses favour traffic — ' +
      'different tools for different stunts.',
    timing: 'Start early and chip away; the last 50 toward the 300 ' +
      'needed for 100% take the longest.',
    pitfalls: 'Grinding stunts in one sitting burns out fast and teaches ' +
      'nothing. The count is designed to grow across a whole ' +
      'playthrough, so spread it out.',
    sources: ['official', 'pushsquare', 'keengamer'],
  },
  {
    id: 16,
    status: 'confirmed',
    strategy: 'Sample one of each of the nine activity types. The ' +
      'trophy only asks that you try them, so a single attempt at each ' +
      'is enough — no wins, medals or high scores are needed for this ' +
      'one. It is cheap to clear early, while you are still learning ' +
      'what the game offers.',
    route: 'Work through the activity list as each type unlocks, one ' +
      'attempt at a time. Do not linger on any single activity yet; ' +
      'the deeper activity trophies come later.',
    prep: 'Nothing is needed. The point of this trophy is to learn ' +
      'where each activity lives, so treat it as a tour.',
    timing: 'Early: one of each, then move on. The deeper activity ' +
      'trophies come later.',
    pitfalls: 'Trying to master an activity on the first visit wastes ' +
      'the tour. One attempt each is the whole ask — mastery belongs ' +
      'to the gold-medal and race-win trophies.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 17,
    status: 'confirmed',
    strategy: 'Earn a gold medal in all 42 Shooting Range challenges. ' +
      'This is one of the few activities 100% completion wants in full ' +
      '— 42 of 42 — so there is no partial-credit shortcut. Practise ' +
      'a range until the gold threshold is comfortable before moving ' +
      'to the next, and return with better weapons as they unlock.',
    route: 'Clear one range at a time rather than sampling all 42 at ' +
      'once. Finish a range, bank the gold, and move on; the Progress ' +
      'menu shows which challenges still lack gold.',
    prep: 'Wait until the weapon roster is fuller before the serious ' +
      'attempts. Early weapons make gold thresholds harder than they ' +
      'need to be.',
    timing: 'Mid-game onwards, once the weapon roster is fuller. Expect ' +
      'this to be one of the last activity trophies.',
    pitfalls: 'Starting all 42 before any weapon upgrades is the trap: ' +
      'bronze and silver attempts teach the courses, but gold needs ' +
      'the right tools. Come back with better gear.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 18,
    status: 'confirmed',
    strategy: 'Win a Top Fun Drone Race at each of the 14 locations — ' +
      'one win per location, not one win total. The 42 Drone Time ' +
      'Trials at the same locations are a separate 100% completion ' +
      'requirement, so learn the courses while racing; the time-trial ' +
      'runs reuse the same routes.',
    route: 'Visit the 14 locations in any order, win the race at each, ' +
      'and run that location’s time trial while the course is still ' +
      'fresh in mind. One trip per location does both jobs.',
    prep: 'No purchase is needed, but patience is: drone handling ' +
      'rewards smooth lines over raw speed, so learn a course before ' +
      'racing it hard.',
    timing: 'Mid-game; pair each race win with its time trial while ' +
      'you are there.',
    pitfalls: 'Winning one race fourteen times counts once. The trophy ' +
      'wants a win at every location, so check the list after each ' +
      'win instead of replaying a favourite course.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 19,
    status: 'confirmed',
    strategy: 'Win 20 different races. Distinct races count, not repeat ' +
      'wins, so rotate through the race list instead of replaying a ' +
      'favourite. 100% completion wants 30 of 40 unique races, so this ' +
      'trophy is the first half of that longer grind — keep racing ' +
      'past 20.',
    route: 'Rotate through the race list in order, ticking off each ' +
      'new win. Keep a note of which races are already won, and do ' +
      'not return to a won race until the unwon ones are done.',
    prep: 'Keep a fast, well-handling car ready for race days. ' +
      'Different races favour different vehicles, so do not marry ' +
      'one car for the whole list.',
    timing: 'Mid-game; keep going to 30 unique wins for 100% completion.',
    pitfalls: 'Replaying a favourite race feels productive and counts ' +
      'for nothing. The counter only moves on a race you have never ' +
      'won before.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 20,
    status: 'confirmed',
    strategy: 'Beat Cal in a fishing challenge. Fishing is one of the ' +
      'activities the story introduces, so the challenge opens up once ' +
      'that introduction has happened. Out-fish Cal head to head; the ' +
      'trophy is about beating him, not about the size of any single catch.',
    route: 'Wait for the story to introduce fishing, then take the ' +
      'challenge against Cal when it is offered. Fish steadily rather ' +
      'than chasing one big catch.',
    prep: 'No special tackle is named by the guides. Arrive with the ' +
      'fishing basics the story has already taught you.',
    timing: 'After the story introduces fishing.',
    pitfalls: 'Chasing the biggest fish instead of the best total is ' +
      'the mistake. This is a head-to-head challenge, so consistency ' +
      'beats one lucky catch.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 21,
    status: 'confirmed',
    strategy: 'Play any one arcade game through to its end. Any game ' +
      'counts and any machine counts, so pick the shortest one you ' +
      'enjoy and finish it — the trophy asks for a completion, not a ' +
      'high score.',
    route: 'Find an arcade machine, pick the shortest game on it, ' +
      'and play it through to the end in one sitting.',
    prep: 'Nothing is needed. If you are short on time, scout the ' +
      'machines first and choose the game with the shortest run.',
    timing: 'Any time after arcades are reachable; a quick win early on.',
    pitfalls: 'Quitting halfway through a long game wastes the run. ' +
      'Pick short, finish it, and leave the long games for fun.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 22,
    status: 'confirmed',
    strategy: 'Play Andy’s mission strand through its final mission. ' +
      'Stranger strands unlock as you explore, so keep an eye on the ' +
      'map for Andy’s marker between story missions and follow the ' +
      'strand to its end.',
    route: 'Spot Andy’s marker, take the first mission, then follow ' +
      'each follow-up as it appears. The trophy lands on the last ' +
      'mission of the strand, not on the first meeting.',
    prep: 'No gear is needed. The only preparation is watching the ' +
      'map for stranger markers while you travel.',
    timing: 'Mid-game, alongside the story; strands can be played ' +
      'between chapters.',
    pitfalls: 'Meeting Andy once and assuming the strand is done is ' +
      'the mistake. A strand is several missions; the trophy only ' +
      'pops at the end of the last one.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 23,
    status: 'confirmed',
    strategy: 'Play Kenton’s mission strand through its final mission. ' +
      'As with the other fixer strands, the trophy lands on the last ' +
      'mission of the strand, not on the first meeting.',
    route: 'Follow Kenton’s marker through the strand’s missions in ' +
      'order, finishing each one before the next appears.',
    prep: 'No gear is needed. Keep an eye on the map between story ' +
      'missions for the next marker.',
    timing: 'Mid-game, alongside the story.',
    pitfalls: 'Stopping after the first Kenton mission leaves the ' +
      'trophy unearned. Strands only count when their final mission closes.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 24,
    status: 'confirmed',
    strategy: 'Play Billy’s mission strand through its final mission. ' +
      'Follow the strand’s missions in order; the trophy pops when ' +
      'the last one closes.',
    route: 'Take Billy’s missions as they appear and play them in ' +
      'order to the strand’s end.',
    prep: 'No gear is needed before you start.',
    timing: 'Mid-game, alongside the story.',
    pitfalls: 'None beyond the usual strand trap: the first mission ' +
      'is not the last, and the trophy waits for the final one.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 25,
    status: 'confirmed',
    strategy: 'Finish eight mission strands for strangers across the ' +
      'state. There are more than eight strands in the game, so pick ' +
      'the ones whose markers you meet while exploring — the state ' +
      'outside Vice City counts too, and the fixer strands (Andy, ' +
      'Kenton, Billy, Randy, Tyrone) are part of the same pool. Eight ' +
      'done is the line; the rest are optional.',
    route: 'Clear strands as you meet them, starting with the fixer ' +
      'strands and adding whichever stranger markers appear on your ' +
      'travels. Count as you go, and stop chasing new strands once ' +
      'the eighth closes.',
    prep: 'No gear is needed. Exploration is the preparation: the ' +
      'more of the state you cover, the more strands appear.',
    timing: 'Spread across the game; strands keep appearing as you explore.',
    pitfalls: 'Staying inside Vice City is the trap — several strands ' +
      'live out in the state. And a half-finished strand counts for ' +
      'nothing, so finish each one you start.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 26,
    status: 'confirmed',
    strategy: 'Play Randy’s mission strand through its final mission. ' +
      'Randy’s strand is the one that teaches the Key Cloner: the ' +
      'Chapter 3 mission “Clonin’ Keys, Makin’ Gs” has you steal the ' +
      'Zorrusso for him, and the Key Cloner it unlocks is also the ' +
      'tool Capital Offense needs.',
    route: 'Play Randy’s strand in order, take the Chapter 3 Key ' +
      'Cloner mission when it appears, steal the Zorrusso, then ' +
      'finish the strand’s final mission after that.',
    prep: 'Do not put off the Chapter 3 mission: the Key Cloner it ' +
      'gives you gates a second trophy, so unlock it early and keep it.',
    timing: 'Chapter 3 for the Key Cloner mission; the strand’s final ' +
      'mission after that.',
    pitfalls: 'Finishing Randy’s strand without noticing the Key ' +
      'Cloner mission is easy to do — and then Capital Offense stays ' +
      'locked until you go back for it.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 27,
    status: 'confirmed',
    strategy: 'Play Tyrone’s mission strand through its final mission. ' +
      'Follow the strand to its end; the trophy lands on the last ' +
      'mission, as it does for the other fixer strands.',
    route: 'Take Tyrone’s missions in order from the first marker to ' +
      'the final mission.',
    prep: 'No gear is needed before you start.',
    timing: 'Mid-game, alongside the story.',
    pitfalls: 'None beyond the strand rule: only the final mission ' +
      'pops the trophy.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 28,
    status: 'confirmed',
    strategy: 'Meditate at all 18 spots across Leonida. The first one ' +
      'is the missable step: after the mission Down to Earth, Lucia ' +
      'is at Jason’s house in the morning — when she brings up ' +
      'meditating, follow her to the balcony and accept, before ' +
      'Chapter 1 ends. The other 17 spots can be visited at any point ' +
      'afterwards, and 15 of 18 is the count 100% completion wants, ' +
      'so the trophy itself asks for three more than the checklist does.',
    route: 'Balcony first, in Chapter 1, then the other 17 spots in ' +
      'any order across the state. Keep a tally as you go, and check ' +
      'the Progress menu for the spots still missing.',
    prep: 'A manual save at the start of Chapter 1 and another before ' +
      'Down to Earth. Those two saves are the whole insurance policy ' +
      'for the one missable trophy.',
    timing: 'The balcony step must happen in Chapter 1, in the morning ' +
      'after Down to Earth. The rest can wait until after the story.',
    pitfalls: 'Missing the balcony is the only way to fail this list ' +
      'outright, and it costs a full replay. Everything else about ' +
      'this trophy is forgiving — the other 17 spots never expire.',
    sources: ['official', 'outputlag', 'keengamer'],
  },
  {
    id: 29,
    status: 'confirmed',
    strategy: 'Take Bret’s hunting work and bring down the unique ' +
      'animal he names. Bret’s Target Deck objectives also feed the ' +
      '100% completion list, so the hunting strand does double duty — ' +
      'finish his targets and the completion checklist moves with it.',
    route: 'Meet Bret, take the target he names, hunt that animal, ' +
      'then work through the Target Deck objectives in turn.',
    prep: 'Bring a weapon suited to hunting rather than a street ' +
      'fight, and be ready to track rather than chase: the unique ' +
      'animal is a target, not a random encounter.',
    timing: 'Mid-game, alongside the story; the Target Deck work ' +
      'overlaps with 100% completion.',
    pitfalls: 'Hunting random animals instead of Bret’s named target ' +
      'wastes the trip. The trophy wants the specific animal he names.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 30,
    status: 'confirmed',
    strategy: 'Finish three full Collectible Card sets. Cards are ' +
      'scattered across Leonida, and 100% completion wants 15 of 18 ' +
      'sets, so three sets is only the opening stretch — keep ' +
      'collecting past this trophy and use the Progress menu to see ' +
      'which sets are close to complete.',
    route: 'Collect as you travel, finishing the sets that are ' +
      'nearest to complete first. Once three sets are done, keep ' +
      'going: the same habit carries you toward 15 sets.',
    prep: 'No gear is needed. The preparation is a habit: check the ' +
      'Progress menu between sessions for the sets closest to done.',
    timing: 'Late game; card hunting continues well past this trophy ' +
      'toward 15 sets.',
    pitfalls: 'Scattering effort across all 18 sets at once finishes ' +
      'none of them. Focus on the nearest sets first and the trophy ' +
      'comes sooner.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 31,
    status: 'confirmed',
    strategy: 'Use the WAiNK app to scan at 100 locations. Scan ' +
      'vehicles and landmarks as you meet them from the very start ' +
      'and the count builds on its own — it is a habit trophy, not ' +
      'a grind, if the app is used whenever something new appears. ' +
      'The same app feeds the vehicle-discovery trophy, so one ' +
      'scanning habit serves both.',
    route: 'Scan everything new from the first hour: every vehicle, ' +
      'every landmark, every time. The count reaches 100 without a ' +
      'dedicated sweep if the habit holds.',
    prep: 'Learn the WAiNK app early and keep it a tap away. The ' +
      'only cost is remembering to use it.',
    timing: 'From the start: scan as you go, and the count reaches ' +
      '100 without a dedicated sweep.',
    pitfalls: 'Forgetting the app for the first half of the game turns ' +
      'a habit into a sweep. If the count lags, a dedicated scanning ' +
      'tour of Vice City closes the gap fastest.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 32,
    status: 'confirmed',
    strategy: 'Finish 50 of the game’s challenges. 100% completion ' +
      'wants 70 of 80, so this trophy is the first two-thirds — clear ' +
      'the approachable ones first and skip the hardest ten, coming ' +
      'back to them only if the completion checklist needs them.',
    route: 'Work the challenge list from easiest to hardest, banking ' +
      'the approachable 50 first. Leave the hardest ten untouched ' +
      'until the trophy is already yours.',
    prep: 'Check the Progress menu for the challenge list before each ' +
      'session, and pick the three easiest unfinished ones as the ' +
      'session’s goal.',
    timing: 'Across the game; the last 20 toward 70 are the hardest.',
    pitfalls: 'Starting with the hardest challenges stalls the count ' +
      'for hours. Easy first is not laziness here — it is the route ' +
      'the numbers reward.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 33,
    status: 'confirmed',
    strategy: 'Build a four-star wanted level while your partner is ' +
      'with you, then lose the cops and escape. Break line of sight, ' +
      'get out of the search area and stay out of it until the stars ' +
      'clear — a fast car and a quiet corner of the map beat a ' +
      'shootout, since the trophy wants an escape, not a fight.',
    route: 'Raise the heat with your partner alongside, then drive ' +
      'for the edge of the search area, break line of sight, and ' +
      'hold still in a quiet corner until the stars clear.',
    prep: 'Have a fast car ready and know a quiet corner of the map ' +
      'before you start. Do not begin the chase in a dead end.',
    timing: 'Once partner free roam is available; do it when a ' +
      'four-star chase starts naturally.',
    pitfalls: 'Fighting the police instead of escaping is the trap: ' +
      'every minute in a shootout is a minute the wanted level ' +
      'stays high. Run, hide, wait.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 34,
    status: 'confirmed',
    strategy: 'Rob three shops in a row with your partner alongside, ' +
      'without letting the wanted level clear between them. The chain ' +
      'is the point: move to the next shop fast after each robbery ' +
      'and keep the heat alive the whole run. Plan the route before ' +
      'the first shop so no time is lost choosing the next one.',
    route: 'Pick three shops close together, rob the first, drive ' +
      'straight to the second, then the third, without stopping. ' +
      'The wanted level must stay alive across all three.',
    prep: 'Scout the three shops and the roads between them before ' +
      'the first robbery, and have a fast getaway car parked facing ' +
      'out of the first shop.',
    timing: 'Once partner free roam is available. Pick three shops ' +
      'close together.',
    pitfalls: 'Pausing to choose the next shop lets the heat die and ' +
      'breaks the chain. The route is decided before the first shop, ' +
      'never during the run.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 35,
    status: 'confirmed',
    strategy: 'Discover 100 vehicles with the WAiNK app. Scan every ' +
      'new vehicle you find — the app logs the discovery — and 100% ' +
      'completion wants 200 of 277 base models, so keep scanning past ' +
      '100. The eight garages from Little Boxes give you somewhere to ' +
      'keep the finds worth holding on to.',
    route: 'Scan every new vehicle from the first hour, in traffic, ' +
      'in car parks and on the road. The count grows with the same ' +
      'habit as the 100-location trophy.',
    prep: 'Keep the WAiNK app ready and buy garages as funds allow, ' +
      'so the vehicles worth keeping have somewhere to live.',
    timing: 'From the start; the count keeps building toward 200 for ' +
      '100% completion.',
    pitfalls: 'Passing new vehicles without scanning is the slow leak ' +
      'here. A vehicle seen and not scanned is a vehicle you will ' +
      'have to find again.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 36,
    status: 'confirmed',
    strategy: 'Trigger Combat Focus with at least five enemies in range ' +
      'and take all five down before it ends. Pick a firefight with a ' +
      'group, not a lone enemy — a mission or gang shootout with a ' +
      'cluster of opponents is the natural place, and the trophy counts ' +
      'only the five dropped inside one use.',
    route: 'Find a grouped fight, wait until five enemies are in ' +
      'range together, trigger Combat Focus, and drop all five before ' +
      'it ends. Do not trigger it on a lone enemy.',
    prep: 'Go in with a full weapon and a clear line on the group. ' +
      'Combat Focus is short, so the shooting starts the moment it ' +
      'is triggered.',
    timing: 'Once Combat Focus is available; wait for a grouped fight ' +
      'rather than forcing it.',
    pitfalls: 'Triggering Combat Focus on two or three enemies wastes ' +
      'the use. Patience for a real group is the whole skill here.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 37,
    status: 'confirmed',
    strategy: 'Steal a departing passenger aircraft from Vice City ' +
      'International Airport and take off in it. Watch the runway for ' +
      'a plane lining up to leave, board it and get airborne — the ' +
      'trophy is about the unscheduled departure itself, so leaving ' +
      'the airport by air is the trigger.',
    route: 'Go to VCIA, watch the runway for a plane lining up to ' +
      'depart, board it, and take off. The mission VCIA Takedown ' +
      'already taught you the airport’s layout — use it.',
    prep: 'Arrive on foot and unhurried, with a clear runway in ' +
      'view. The plane you want is the one about to leave, not one ' +
      'parked at a gate.',
    timing: 'Any time after the airport is reachable; the planes come ' +
      'and go, so wait for a departure.',
    pitfalls: 'Boarding a parked plane and sitting on the tarmac ' +
      'counts for nothing. The trigger is the departure, so only a ' +
      'plane lining up to leave will do.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 38,
    status: 'confirmed',
    strategy: 'Steal a Rhino military tank and put it to use in combat. ' +
      'Military hardware is guarded, so expect a wanted level the ' +
      'moment you take it — drive it somewhere the fight can happen ' +
      'and use it there rather than trying to park it quietly.',
    route: 'Take the Rhino where it is stationed, then drive it to ' +
      'a place with enemies and use it in combat there. The trophy ' +
      'wants the tank used, not just stolen.',
    prep: 'Expect the wanted level the moment you take it, and plan ' +
      'the drive to the fight before you climb in.',
    timing: 'Any time after military vehicles are reachable.',
    pitfalls: 'Stealing the Rhino and hiding it earns nothing. The ' +
      'tank has to see combat, so drive it toward a fight, not away ' +
      'from one.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 39,
    status: 'confirmed',
    strategy: 'Rob a jewelry store without being detected. Plan the ' +
      'approach before going in: stay out of sight lines, move ' +
      'quietly, take what you came for and leave before anyone raises ' +
      'the alarm. Detection is the fail state, so a slow, unseen run ' +
      'beats a fast, loud one.',
    route: 'Scout the store first, enter quietly, take the goods, ' +
      'and leave the way you came before the alarm goes up.',
    prep: 'Scout the store and its sight lines before the attempt, ' +
      'and pick a quiet moment. Speed is not the plan here — ' +
      'silence is.',
    timing: 'Any time; scout the store first and pick a quiet moment.',
    pitfalls: 'Rushing is the fail state. One raised alarm ends the ' +
      'attempt, so a slow run that stays unseen beats a fast one ' +
      'that gets spotted.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 40,
    status: 'confirmed',
    strategy: 'Rob five bank vaults and escape cleanly each time. 100% ' +
      'completion wants all eight vaults, and they open up through the ' +
      'Chapter 4 optional mission “That’s Where The Money Is…” — so ' +
      'hold the last vaults until that mission has run, and escape ' +
      'after each robbery before starting the next.',
    route: 'Run the Chapter 4 optional mission first, then rob the ' +
      'vaults one at a time, escaping cleanly after each before the ' +
      'next. Five earns the trophy; all eight earn the completion credit.',
    prep: 'A fast getaway car and a planned escape route per vault. ' +
      'The robbery is half the job — the escape is the other half.',
    timing: 'Chapter 4 onwards. Do five for the trophy, then all ' +
      'eight for 100% completion.',
    pitfalls: 'Robbing vaults before the optional mission runs wastes ' +
      'the count, and chaining vaults without escaping between them ' +
      'turns a clean run into a chase. One vault, one escape, then ' +
      'the next.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 41,
    status: 'confirmed',
    strategy: 'Hit an armored truck and get away with the take. Armored ' +
      'trucks run set routes, so watch for one, stop it, take the cash ' +
      'and escape before the response arrives — the escape is part of ' +
      'the trophy, not just the robbery.',
    route: 'Watch traffic for a truck on its route, stop it, take ' +
      'the cash, and leave before the response arrives.',
    prep: 'Know the truck routes and have a getaway car ready. The ' +
      'window between stopping the truck and the response arriving ' +
      'is short.',
    timing: 'Any time; watch traffic for a truck and strike when the ' +
      'road is clear.',
    pitfalls: 'Lingering at the truck after the cash is taken is the ' +
      'mistake. The trophy wants a robbery and an escape, so leave ' +
      'while the road is still clear.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 42,
    status: 'confirmed',
    strategy: 'Cover all 52 areas of Leonida and uncover the whole map. ' +
      'The map fills in as you travel, so this mostly finishes itself ' +
      'if you explore widely instead of fast-travelling everywhere — ' +
      'drive the back roads, visit the small towns, and check the map ' +
      'for dark patches left uncovered.',
    route: 'Drive the state rather than fast-travelling through it, ' +
      'taking back roads and small towns as you go. Check the map ' +
      'between sessions for the dark patches still left.',
    prep: 'No gear is needed. The preparation is a habit: choose the ' +
      'long road over the fast travel whenever time allows.',
    timing: 'Across the game; it finishes naturally with wide exploration.',
    pitfalls: 'Fast-travelling everywhere is the trap — the map only ' +
      'fills in where you actually travel. The last few areas are ' +
      'always the small, out-of-the-way ones.',
    sources: ['official'],
  },
  {
    id: 43,
    status: 'confirmed',
    strategy: 'Rob one Illegal Operation belonging to each of the nine ' +
      'gangs. One per gang is the trophy; 100% completion wants all ' +
      '39 gang operations, so this is the first pass over that list — ' +
      'note which gang each operation belongs to and keep a tally as ' +
      'you go.',
    route: 'Work through the operations gang by gang, ticking off one ' +
      'per gang first. Once all nine are ticked, keep going: the ' +
      'same list carries you toward all 39.',
    prep: 'Keep a tally of which gangs are already done. Without a ' +
      'tally, it is easy to rob a second operation for a gang you ' +
      'have already covered.',
    timing: 'Late game; the full 39 operations are a 100% completion goal.',
    pitfalls: 'Robbing two operations for one gang and none for another ' +
      'is the waste here. One per gang first, then the rest.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 44,
    status: 'reported',
    strategy: 'Have a cocktail somewhere with a view over Ocean Beach. ' +
      'PowerPyx still lists this trophy’s method as unknown, and one ' +
      'launch-day list says to order a cocktail at the Ocean Beach ' +
      'spot — treat that as a lead, not a confirmed step: try the ' +
      'beachfront bars on Ocean Beach and see whether the trophy pops. ' +
      'The “Ocean Beach” mission in Chapter 4 shares the name, so the ' +
      'spot may only make sense once that part of the story has run.',
    route: 'Finish the Chapter 4 Ocean Beach mission first, then try ' +
      'the beachfront bars on Ocean Beach, ordering a cocktail at ' +
      'each in turn.',
    prep: 'Do not grind this one early. Wait until after Chapter 4, ' +
      'and treat the first visit as a test, not a certainty.',
    timing: 'Unconfirmed — try it after the Chapter 4 Ocean Beach ' +
      'mission; if it does not pop, wait for guides to confirm the spot.',
    pitfalls: 'Treating the single report as a confirmed method is the ' +
      'mistake. If the cocktail does not pop the trophy, the spot is ' +
      'still unconfirmed — stop and wait for a second guide.',
    sources: ['official', 'planetgta6', 'keengamer', 'powerpyx', 'ofzen'],
  },
  {
    id: 45,
    status: 'confirmed',
    strategy: 'Steal the blue Banshee from the vehicle showroom in the ' +
      'south of Vice City and drive it straight through the showroom ' +
      'window. Two conditions gate it: the Key Cloner is needed first, ' +
      'which comes from the Chapter 3 mission “Clonin’ Keys, Makin’ ' +
      'Gs” (steal the Zorrusso for Randy), and the trophy only unlocks ' +
      'from this blue Banshee — no other car counts. Hack into the car, ' +
      'drive forward through the window, and keep driving: the pop is ' +
      'slightly delayed and lands once you are further down the street. ' +
      'PowerPyx confirmed the method on launch day; it is a nod to the ' +
      'Banshee from GTA III.',
    route: 'Chapter 3 first: finish “Clonin’ Keys, Makin’ Gs” and ' +
      'take the Key Cloner. Then go to the showroom in the south of ' +
      'Vice City, hack the blue Banshee, and drive forward through ' +
      'the window without stopping.',
    prep: 'The Key Cloner is the whole preparation — without it, the ' +
      'showroom trip is wasted. Confirm you hold it before you go.',
    timing: 'Chapter 3 or later, after the Key Cloner is obtained. ' +
      'Only the blue Banshee works.',
    pitfalls: 'Two traps: trying it without the Key Cloner, and ' +
      'stealing the wrong car. Only the blue Banshee in that showroom ' +
      'counts — and do not stop after the window, since the pop lands ' +
      'further down the street.',
    sources: ['official', 'planetgta6', 'keengamer', 'powerpyx'],
  },
  {
    id: 46,
    status: 'confirmed',
    strategy: 'At the Kolt & Associates bowling alley, steal the three ' +
      'key valuables and get out. The description’s “follow-through” ' +
      'is the bowling-alley job: three valuables, taken and carried ' +
      'off, and the trophy lands once the job is done.',
    route: 'Enter the bowling alley, take the three valuables in ' +
      'turn, and leave with them. The job is done when the third ' +
      'valuable is carried off.',
    prep: 'Know the alley’s layout before the attempt, and have a ' +
      'getaway ready: three valuables are a slow carry if you have ' +
      'no exit planned.',
    timing: 'Any time the alley is reachable.',
    pitfalls: 'Leaving with two valuables and assuming the job is done ' +
      'is the mistake. All three are needed, so count them as you go.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 47,
    status: 'confirmed',
    strategy: 'Max out the Strength stat for both Jason and Lucia. ' +
      'Strength grows through the activities that train it, so work ' +
      'on both protagonists rather than one — the trophy wants the ' +
      'pair at maximum, and a partnership with mass appeal is the result.',
    route: 'Train Strength with both characters in turn, switching ' +
      'between Jason and Lucia so neither lags behind. Check each ' +
      'character’s stat between sessions.',
    prep: 'No purchase is needed — the activities that train Strength ' +
      'are the preparation. Start early, since the stat grows slowly.',
    timing: 'Across the game; train both characters, not just one.',
    pitfalls: 'Maxing one character and forgetting the other is the ' +
      'trap. The trophy wants the pair, so a single maxed stat earns ' +
      'nothing on its own.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 48,
    status: 'confirmed',
    strategy: 'Rack up 500 actions that feed your Criminal Profile. ' +
      'The profile grows as you make choices and act in the world, so ' +
      'this builds across a normal playthrough rather than needing a ' +
      'dedicated grind — robberies, crimes, choices in missions and ' +
      'open-world trouble all feed it. Check the profile now and then ' +
      'to see the count climb.',
    route: 'Play normally and let the count grow: missions, robberies ' +
      'and open-world trouble all feed it. If the count stalls late, ' +
      'add robberies and crimes between story missions.',
    prep: 'No preparation is needed. The only habit worth building ' +
      'is checking the profile now and then, so a stall is noticed ' +
      'early rather than at the end.',
    timing: 'Across the game; it accumulates on its own.',
    pitfalls: 'Playing too cleanly is the only way to stall this one. ' +
      'If the count is short late in the game, it is because the ' +
      'playthrough avoided trouble — add some.',
    sources: ['official', 'planetgta6', 'keengamer'],
  },
  {
    id: 49,
    status: 'unconfirmed',
    strategy: 'No launch-day guide has confirmed the trigger. The ' +
      'description — “Second time’s the charm” — points at succeeding ' +
      'on a second attempt at something, and one launch-day list ' +
      'classes it as a story trophy that unlocks during the campaign. ' +
      'Do not chase it: play the story and it should surface, and this ' +
      'guide will update the method once a guide confirms it.',
    route: 'There is no route yet, because no guide has pinned the ' +
      'trigger down. The best lead is the story itself: play the ' +
      'campaign and watch for a moment that only works on a second attempt.',
    prep: 'No preparation is possible for an unconfirmed trigger. ' +
      'Do not spend money or time setting up a guess.',
    timing: 'Unconfirmed. Keep playing; a second-attempt moment in ' +
      'the story is the lead.',
    pitfalls: 'Grinding a guess is the mistake this entry exists to ' +
      'prevent. Until a guide confirms the trigger, any method is ' +
      'speculation — play on and wait.',
    sources: ['official', 'planetgta6', 'keengamer', 'ofzen'],
  },
  {
    id: 50,
    status: 'reported',
    strategy: 'One launch-day report ties this trophy to a UFO random ' +
      'encounter in Kelly County after 2am: a car with flickering ' +
      'lights waits at the roadside, the UFO shows up further up the ' +
      'road, you talk to the stranger, then go back to her car. That ' +
      'report cites video evidence, but no second guide has confirmed ' +
      'it yet — treat the encounter as a lead and try Kelly County ' +
      'after 2am, watching for a roadside car with flickering lights.',
    route: 'Go to Kelly County after 2am and drive the roads slowly, ' +
      'watching for a roadside car with flickering lights. If the car ' +
      'is there, talk to the stranger, then follow the encounter up ' +
      'the road and back to her car.',
    prep: 'Go at night, after 2am, with time to spare: random ' +
      'encounters do not run to a timetable, and the wait is part of ' +
      'the attempt.',
    timing: 'Reported, not yet confirmed by a second guide. Try it at ' +
      'night in Kelly County.',
    pitfalls: 'Treating one video-backed report as a confirmed method ' +
      'is the risk. If the car is not there after several night ' +
      'drives, stop: the encounter may need a story trigger nobody ' +
      'has named yet.',
    sources: ['official', 'planetgta6', 'keengamer', 'gtasix'],
  },
  {
    id: 51,
    status: 'unconfirmed',
    strategy: 'No launch-day guide has confirmed the trigger. The ' +
      'description asks for a melee drive-by — knocking someone down ' +
      'with a melee attack from a moving vehicle — and PowerPyx notes ' +
      'a belief that it comes from kicking enemies while riding a ' +
      'motorcycle, which is still a guess rather than a confirmed ' +
      'method. Try melee attacks from a moving bike if the opportunity ' +
      'arises, but do not grind it: the method is still being pinned down.',
    route: 'There is no confirmed route. The only lead is a melee ' +
      'attack from a moving vehicle — a motorcycle, per the current ' +
      'guess — so try it opportunistically when a bike and a target ' +
      'line up.',
    prep: 'Keep a motorcycle handy if you ride one anyway, but do ' +
      'not buy or build around a guess.',
    timing: 'Unconfirmed. A melee attack from a moving vehicle is the ' +
      'description’s own hint.',
    pitfalls: 'Grinding motorcycle kicks for hours on a guess is the ' +
      'mistake. If it does not pop opportunistically, wait for a ' +
      'guide to confirm the trigger.',
    sources: ['official', 'planetgta6', 'keengamer', 'powerpyx'],
  },
  {
    id: 52,
    status: 'confirmed',
    strategy: 'Fence marked bills through your contacts until $250,000 ' +
      'is laundered. The same $250,000 counts for 100% completion, so ' +
      'the work pays twice — launder as you earn, rather than ' +
      'stockpiling bills for one big session at the end.',
    route: 'Launder in small amounts as the bills come in, through ' +
      'your contacts, until the total reaches $250,000. The running ' +
      'total is the goal, not any single transaction.',
    prep: 'Keep the contacts that fence bills in mind from the first ' +
      'robbery. Laundering little and often beats one big session.',
    timing: 'Across the game; launder as you go.',
    pitfalls: 'Stockpiling marked bills for one endgame session is ' +
      'the trap: the bills sit useless while the count stays at zero. ' +
      'Launder as you earn and the total takes care of itself.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 53,
    status: 'confirmed',
    strategy: 'Spend $100,000 in shops across the game. Weapons, ' +
      'clothes, food and gear all count, so the total climbs through ' +
      'ordinary play — buy the equipment you actually use and the ' +
      'trophy follows without a dedicated spending spree.',
    route: 'Buy what you use, when you use it: weapons, clothes, ' +
      'food and gear, across the whole game. The total is a by-product ' +
      'of playing, not a shopping list.',
    prep: 'No preparation is needed. The only habit is buying gear ' +
      'you will actually use, rather than hoarding cash for the end.',
    timing: 'Across the game; ordinary purchases add up to $100,000.',
    pitfalls: 'Hoarding cash and then buying $100,000 of junk at the ' +
      'end wastes money that could have bought useful gear all along. ' +
      'Spend as you go.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 54,
    status: 'confirmed',
    strategy: 'Buy all eight purchasable garages. They also give you ' +
      'somewhere to keep the vehicles you discover for Whip It Good, ' +
      'so buy garages as the money allows and store the finds worth keeping.',
    route: 'Buy garages as funds allow, starting with the ones near ' +
      'the vehicles you actually drive. Eight bought is the line; ' +
      'there is no ninth to chase.',
    prep: 'Keep money aside for garages instead of spending every ' +
      'dollar on gear. The first garages are cheap; the last ones ' +
      'are the ones that need planning.',
    timing: 'Across the game, as funds allow.',
    pitfalls: 'Spending everything on gear and leaving no money for ' +
      'garages stalls this trophy at seven of eight. Keep a garage ' +
      'fund separate from the spending money.',
    sources: ['official', 'keengamer'],
  },
  {
    id: 55,
    status: 'confirmed',
    strategy: 'Register ten vehicles through the Scooter Bros app. Any ' +
      'vehicles you drive count once registered, so register each new ' +
      'ride as you take it rather than saving the paperwork for later ' +
      '— ten registrations is a quick job once the app is open to you.',
    route: 'Register each new vehicle the moment you take it, through ' +
      'the Scooter Bros app. Ten registrations is the line, and the ' +
      'habit gets you there without a dedicated session.',
    prep: 'Open the Scooter Bros app the first time it is available ' +
      'and learn where registration lives in it. The rest is habit.',
    timing: 'Any time after the app is available; register as you go.',
    pitfalls: 'Driving ten vehicles and registering none of them is ' +
      'the trap — unregistered rides do not count. Register as you ' +
      'go, not at the end.',
    sources: ['official', 'keengamer'],
  },
];

// Look a strategy up by trophy id; returns undefined when the id is
// not in the list, so the caller can fall back to the JSON guide.
export function strategyFor(id) {
  return STRATEGIES.find((s) => s.id === id);
}

// How many strategies carry each status — the app shows the split so
// a reader sees at a glance how much of the guide is confirmed.
export function statusCounts() {
  const counts = { confirmed: 0, reported: 0, unconfirmed: 0 };
  for (const s of STRATEGIES) counts[s.status] += 1;
  return counts;
}
