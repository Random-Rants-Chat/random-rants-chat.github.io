(function () {
  var randomFacts = [
    "Gvbvdxx Chat is what got me banned from Scratch.",
    "JavaScript is what most websites are written in.",
    "Random rants is basically Gvbvdxx Chat, but better.",
    "Random Rants is based off of Macre's Chat, which is then is based off of Gvbvdx Chat.",
    "Created mostly on chromebooks, for chromebooks!",
    "Random rants is mostly inactive at the time this was written.",
    "I don't really code in C++ or that, rather I code with Electron JS.",
    "Random Rants can be \"installed\" onto your device. Keep in mind that you will still need internet to use, and open it.",
    "About 1200 and more files have been uploaded, and it keeps going!", 
    "WebRTC is cool, but difficult to impliment to Random Rants.",
    "The original Random Rants, Gvbvdxx Chat, had a security problem within its message system... But dont worry much about Random Rants, its security is slighty better.",
    "Helicopter, helicopter!",
    "I have limited or no internet access, so don't expect Random Rants to be updated all the time when I'm at home.",
    "I know more than JavaScript, but JavaScript is the programming language I best succeed in.",
    "Type ;commands in the chat for a list of cool commands you can do.",
    "Elementary school was better, in kindness.",
    "Clickity Clackity! (Its keyboard sounds)",
    "Commands where inspired from a \"hacker\" that took over Gvbvdxx Chat tempomarily.",
    "No sign up required!",
    "You can make your text bold by surrounding it with [bold] and [/bold].",
    "You can make your text colorful by surrounding it with [color css=green] and [/color]. You can replace green with any color name, or even a color hex code!",
    "You can make your text blurred by surrounding it with [blur] and [/blur]. If you click the blurred text, it would unblur it.",
    "I can't spell certian words sometimes...",
    "Although I do write alot of code for things, ChatGPT is quite handy sometimes.",
    "Some images are made with the Scratch 3.0 paint editor.",
    "It's difficult to debug things, because I mostly make Random Rants in class with a mostly locked down district chromebook.",
    "WebRTC has problems sometimes.",
    "The internet is my world!",
    "The \"ultimate\" unblocked chatting program!",
    "I would probally spend 24 hours on a computer, if I could.",
    "I get grounded commonly, how could I possibly ever know why?",
    "Random Rants is somewhat open source, but not documented much.",
    "I usually would have 20 or more tabs open if I run into a lot of programming issues.",
    "If you are having problems with Screensharing, or anything else, try going to your loading settings and changing the WebRTC server.",
    "My username \"gvbvdxx\" was just me pressing random keys on my keyboard to get my username, it was not thought out when being typed.",
    "I don't get paid to make these websites.",
    "I have ADHD... I might be becoming autistic soon...",
    "When I was transitioning between 5th grade into 6th, what I actually did on break was just me on my PC for most of the day and night. Also ate a bunch of square party pizza and stuff.",
    "It's not a good idea to reload a bunch of times.",
    "I learned JavaScript from writing Internet Explorer pages, then it went to Google Chrome.",
    "Computers are amazing!",
    "I rather code for my schoolwork.",
    "console.log('This is amazing!');",
    "I used to have a Scratch account, the username for it is \"gvbvdxx\", but it was deleted.",
    "If glitch.com did not exist, Random Rants would not exist!",
    "I like computers, a little too much?",
    "My Roblox username is catc232.",
    "Jason Evans was here.",
    "Although it might not seem true, I actually do make Roblox games.",
    "Although I seem like a bad person, I can actually be useful sometimes.",
    "Some of my own facts about me... Offend me a little too much...",
    "Eli does not own this site, but rather suggested me to make it.",
    "School grades are just a number......right?",
    "Time for some Super Sonic speed!",
    "I am proud of my websites, and everything I created.",
    "Just because my websites are mostly written using vanillia JavaScript, does not mean their terrible.",
    "I don't spend money to make my websites.",
    "Who needs sports, when you can just play a competitive computer game?",
    "Who needs discord, when you got this?",
    "This may although not be as secure as you think.",
    "Files are secured... Right?",
    "Don't throw me into water! I can't swim!",
    "AFK people can sometimes get annoying. If you are gonna be AFK for a long time, just leave Random Rants. Random Rants won't leave you.",
    "Don't forget you can use ;mute if somebody becomes annoying, but only if you know the special password to get special commands",
    "These websites where blocked at once, but I somehow requested the blocker's help email, and they unblocked these websites for everyone (in my school). Weird am I right?",
    "Hint: the special commands password is located in chat.js file, to see the file replace the last / with /chat.js in the url.",
    "Powered by glitch.com!",
    "If Random Rants breaks randomly, don't panic. It could just mean im editing the code.",
    "Unlike the older versions before Random Rants, your username and everything else are auto saved onto your web browser.",
    "It's not a great idea to reload every time you want to see a new fact.",
    "Random Rants is not dead, stop asking me.",
    "You can type status.html at the end of the Random Rants URL to test the servers from your device, its not a complete diagnoser but it works for seeing what might have problems.",
    "You can make and share your own themes for Random Rants.",
    "4176 and more lines of code!",
    "You can see who is in diffrent rooms by selecting the room list dropdown.",
    "Windows 11 or Windows 10... Oh wait! They are the same thing!",
    "You can unlock more commands, although you must dig through this websites code to find the special password.",
    "I am more diffrent on the internet, than in real life.",
    "Using the user pallete colors means that anyone can change your user color.",
    "You where able to view any file uploaded to the server, but now it's a bit more secured.",
    "People can beleive anything these days...",
    "I can almost litterally form chunks of code, in my brain!",
    "Uh oh... Stinky!",
    "Random Rants is not actually the first chatting program I made, though it is based on the source code of my first chatting program.",
    "I used to invite scratchers (people on the scratch website) to my chatting program (like Random Rants). This also adds to the reason why my Scratch account was banned and deleted.",
    "Random Rants is updated mostly when I am at school.",
    "Random Rants + is going to be somewhat a better version of Random Rants",
    "You might notice that Random Rants takes a lot of requests to load.",
    "You can stack bracket codes to do things like bold and colored text at the same time. Like this: [bold][color css=green]Bold green text[/color][/bold]",
    "WAKE UP ITS TIME TO LEAVE DREAMLAND!",
    "Ballz!",
    "I wonder what Goombas taste like.",
    "Was I sleeping with my eyes open again?",
    "2036, the heat death of the universe. 2036, the heat death of the universe. 2036, the heat death of the universe. 2036, the heat death of the universe.",
    "Rehehehehehehehehehehehehehehehehehehehe"
  ];
  
  function getRandomFact() {
    return randomFacts[Math.round(Math.random()*(randomFacts.length-1))];
  }
  function setRandomFactSpan(span) {
    span.textContent = getRandomFact();
  }
  setRandomFactSpan(document.getElementById('randomfacttext'));
})();