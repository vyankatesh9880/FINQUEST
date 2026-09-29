// Comprehensive data for 5th to 7th Grade Modules
// 5 Foundational Modules: Comic-style theory, real-life examples, video placeholder, 10 MCQs with 2-line explanations

export const JUNIOR_MODULES = [
  {
    id: 1,
    title: "The Magic of Money & History",
    subtitle: "From Barter & Cowrie Shells to Modern Paper Bills & Digital Coins",
    badge: "Module 1",
    themeColor: "#FFA502",
    icon: "🪙",
    comicIntro: {
      headline: "How Did Humans Invent Money?",
      story: "Imagine living 3,000 years ago! If you had 10 apples 🍎 and wanted a cozy woolen blanket 🐑, you had to find a shepherd who specifically craved apples! This was called the **Barter System**.",
      painPoint: "What if the shepherd was allergic to apples? You were totally stuck in the cold! Brrr! 🥶",
      breakthrough: "So, ancient adventurers invented money! First, they traded rare **Cowrie shells**, salt blocks, and shiny bronze coins. Today, money acts as a magical universal token accepted everywhere.",
      realLifeExample: "When you pay $2 for a notebook at the school store, the shopkeeper accepts it because everyone agrees that bill can later buy bread, toys, or bus rides!"
    },
    illustrations: [
      { emoji: "🍎 ⇄ 🐑", label: "Ancient Barter Headache", bg: "rgba(255, 165, 2, 0.15)" },
      { emoji: "🐚 ➔ 🪙", label: "Shells & First Coins", bg: "rgba(108, 92, 231, 0.15)" },
      { emoji: "💵 ➔ 📱", label: "Paper Cash & Tap-to-Pay", bg: "rgba(0, 184, 148, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: The 3-Minute Epic History of Money",
      duration: "3:15 min",
      summary: "Follow Max the Time-Traveling Beaver as he barters wooden logs for prehistoric fish, and discovers why coins changed civilization forever!"
    },
    quiz: [
      {
        id: 1,
        question: "What was the system of trading goods directly without using money called?",
        options: ["The Credit Network", "The Barter System", "The Stock Exchange", "Digital Banking"],
        correctIndex: 1,
        explanation: "The barter system was trading items directly (like apples for grain).\nIt required a 'coincidence of wants', meaning both people had to want each other's goods."
      },
      {
        id: 2,
        question: "Why did people stop relying only on the barter system?",
        options: [
          "People got tired of walking to the market",
          "It was hard to find someone who wanted exactly what you had",
          "Governments banned trading altogether",
          "Apples were declared illegal currency"
        ],
        correctIndex: 1,
        explanation: "Bartering failed when people didn't need what you were offering.\nMoney solved this by acting as a universal medium that anyone will accept."
      },
      {
        id: 3,
        question: "Which of the following items was once widely used as early money in ancient trade?",
        options: ["Plastic toy blocks", "Cowrie seashells", "Cardboard tickets", "Ice cubes"],
        correctIndex: 1,
        explanation: "Cowrie shells were durable, scarce, and easy to carry across continents.\nThis made them one of the most successful early forms of money in world history!"
      },
      {
        id: 4,
        question: "What is a major reason precious metals like gold and silver were turned into coins?",
        options: [
          "They melted easily in your pockets",
          "They were scarce, durable, and didn't rot like fruit",
          "They weighed nothing at all",
          "Everyone had infinite amounts in their gardens"
        ],
        correctIndex: 1,
        explanation: "Gold and silver do not rot or spoil over time, unlike food or animals.\nTheir natural scarcity made them trusted and valuable for trading everywhere."
      },
      {
        id: 5,
        question: "What does money actually represent in modern society?",
        options: [
          "A piece of magical paper that creates unlimited goods",
          "A universally accepted measure of value and exchange",
          "A coupon only valid on Saturday mornings",
          "A government secret code"
        ],
        correctIndex: 1,
        explanation: "Money represents stored value that everyone agrees to honor.\nIt allows you to trade your work, time, or goods for anything you choose later."
      },
      {
        id: 6,
        question: "If Leo paints a fence for his neighbor and earns $15, what has happened?",
        options: [
          "Leo traded his effort and skill for stored monetary value",
          "The neighbor lost money for zero benefit",
          "Leo used bartered sheep wool",
          "Leo made an illegal transaction"
        ],
        correctIndex: 0,
        explanation: "Earning money means exchanging your labor and time for spendable value.\nLeo can now choose to save those dollars or spend them on school supplies."
      },
      {
        id: 7,
        question: "Why can't you use fresh strawberry milk cartons as a reliable form of money?",
        options: [
          "It's too tasty and would spoil and rot quickly",
          "It's too heavy and cannot preserve value over months",
          "People wouldn't accept old spoiled milk as payment",
          "All of the above"
        ],
        correctIndex: 3,
        explanation: "Good money must be durable and maintain its value over time.\nPerishable items like milk spoil, smell, and lose all trade value very quickly!"
      },
      {
        id: 8,
        question: "Who prints and guarantees the legal value of modern national paper currencies?",
        options: ["Any local grocery store manager", "A country's Central Bank or Government", "Private video game companies", "School principals"],
        correctIndex: 1,
        explanation: "Governments and central banks regulate and guarantee national currency.\nTheir official backing ensures shops and citizens trust the bills to buy goods."
      },
      {
        id: 9,
        question: "Which of the following describes 'Digital Money' (like debit cards or UPI)?",
        options: [
          "Fake game money that can't buy real groceries",
          "Real money recorded and moved electronically between bank accounts",
          "Magic coins found inside computers",
          "Money that disappears when your phone turns off"
        ],
        correctIndex: 1,
        explanation: "Digital money is genuine money stored electronically in secure bank databases.\nWhen you tap a card, money moves directly from your account to the store."
      },
      {
        id: 10,
        question: "What is the biggest superpower that money gives to people who understand it?",
        options: [
          "Buying every toy immediately without thinking",
          "The freedom to plan ahead, save for dreams, and handle unexpected emergencies",
          "Flexing on your classmates",
          "Never needing to do any school homework again"
        ],
        correctIndex: 1,
        explanation: "Financial wisdom turns money into a tool for long-term security and freedom.\nIt protects you against tough times and helps turn big dreams into reality!"
      }
    ]
  },
  {
    id: 2,
    title: "Needs vs. Wants",
    subtitle: "Master the Detective Skill of Smart Spending Before You Tap Pay",
    badge: "Module 2",
    themeColor: "#FD79A8",
    icon: "🕵️",
    comicIntro: {
      headline: "The Supermarket Mind Game!",
      story: "You walk into a mall with $20 in your pocket. To your left: healthy warm winter boots your old pair has a big hole in 🥾. To your right: a glowing, neon-pink robotic dinosaur with sunglasses that burps confetti 🦖✨!",
      painPoint: "Your brain yells: 'I WANT THE DINO RIGHT NOW!' But if you buy it, your socks will freeze in the snow tomorrow!",
      breakthrough: "Smart money ninjas categorize every single expense into two camps: **NEEDS** (things required to survive, learn, and stay healthy) and **WANTS** (things that are super fun, but you can live comfortably without).",
      realLifeExample: "Clean water, nutritious lunches, and school textbooks are NEEDS. Triple chocolate milkshakes and premium video game character skins are WANTS!"
    },
    illustrations: [
      { emoji: "🍞 🏠 🩺", label: "NEEDS: Survival & Health", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "⚡ VS ⚡", label: "The Mind Dilemma", bg: "rgba(253, 121, 168, 0.15)" },
      { emoji: "🎮 🍦 🛹", label: "WANTS: Fun & Luxuries", bg: "rgba(255, 165, 2, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: Detective Penny & The Case of The Sneaky Want",
      duration: "2:50 min",
      summary: "See how marketing tricks trick your brain into feeling like a toy is an emergency need, and how the 24-Hour Wait Rule saves your allowance!"
    },
    quiz: [
      {
        id: 1,
        question: "Which of the following is the best definition of a financial 'NEED'?",
        options: [
          "Something you crave after seeing a cool YouTube advertisement",
          "An essential item necessary for health, safety, and basic living",
          "The newest model of a smartphone with 4 camera lenses",
          "Anything that costs more than $100"
        ],
        correctIndex: 1,
        explanation: "Needs are survival essentials like food, clean water, shelter, and medicines.\nWithout them, your health, safety, or education are directly compromised."
      },
      {
        id: 2,
        question: "Which of these is a pure 'WANT' rather than a basic need?",
        options: ["Nutritious vegetables for dinner", "A winter coat in freezing weather", "The newest wireless gaming headset", "Basic prescription eyeglasses"],
        correctIndex: 2,
        explanation: "A gaming headset is awesome entertainment, but you don't need it to survive.\nWinter coats, healthy food, and prescription glasses are genuine everyday needs."
      },
      {
        id: 3,
        question: "Is it wrong or forbidden to buy 'WANTS'?",
        options: [
          "Yes, smart people never spend a single penny on fun",
          "No, but your essential needs must always be paid and secured first",
          "Yes, buying wants is punished by law",
          "Only if your friends disapprove"
        ],
        correctIndex: 1,
        explanation: "Wants bring joy, hobbies, and relaxation to our lives!\nThe key is balance: make sure your bills and needs are covered before treating yourself."
      },
      {
        id: 4,
        question: "What is the '24-Hour Rule' used by savvy shoppers?",
        options: [
          "Wait 24 hours before buying an impulse want to see if you still actually care",
          "Spend all your allowance within 24 hours of receiving it",
          "Return everything you bought yesterday",
          "Only shop between 2 AM and 3 AM"
        ],
        correctIndex: 0,
        explanation: "Waiting 24 hours gives your emotional brain time to cool down.\nOften, you realize you didn't really need or want that item as much as you thought!"
      },
      {
        id: 5,
        question: "Maya has $30. Her math textbook is $25, and a cool cinema ticket is $15. What should she do?",
        options: [
          "Buy the cinema ticket and skip math class forever",
          "Buy the textbook first (need), then save up for the movie later (want)",
          "Tear the textbook in half to save money",
          "Borrow $100 with massive interest"
        ],
        correctIndex: 1,
        explanation: "School tools directly empower Maya's education and future (Need).\nDelaying gratification for the cinema ticket is the hallmark of financial maturity."
      },
      {
        id: 6,
        question: "How can an item be both a need and a want at the same time?",
        options: [
          "Shoes are a need for foot protection, but $250 limited-edition sneakers are a want",
          "Items cannot ever change categories",
          "Only toys can be both",
          "Only adults know the difference"
        ],
        correctIndex: 0,
        explanation: "Basic functionality is the need (sturdy shoes to protect feet).\nThe brand prestige, flashing lights, or designer hype represent the want."
      },
      {
        id: 7,
        question: "What do clever commercials and store displays try to make you believe?",
        options: [
          "That you don't need anything at all",
          "That their product is an absolute URGENT need you can't live without",
          "That saving money is the best thing ever",
          "That their products are completely useless"
        ],
        correctIndex: 1,
        explanation: "Advertisers use bright colors, catchy tunes, and FOMO (fear of missing out).\nKnowing their tactics helps you pause and make conscious spending choices!"
      },
      {
        id: 8,
        question: "Which of the following is considered an essential need for a student?",
        options: ["Daily candy bars at recess", "A safe backpack and school notebooks", "Custom digital stickers in a chat app", "A private limousine ride to school"],
        correctIndex: 1,
        explanation: "A durable backpack and basic notebooks support daily learning.\nCandy, digital stickers, and fancy limousines are clearly luxuries and wants."
      },
      {
        id: 9,
        question: "What happens if a family spends all their monthly money on 'wants' before paying 'needs'?",
        options: [
          "They unlock a special bonus level",
          "They won't be able to pay for electricity, rent, or groceries",
          "Their bank doubles their balance for free",
          "Nothing, wants are always free"
        ],
        correctIndex: 1,
        explanation: "Neglecting needs leads to financial stress, unpaid bills, and emergencies.\nAlways pay for food, rent, and utility bills before splurging on entertainment."
      },
      {
        id: 10,
        question: "What is the best feeling that comes from mastering the Needs vs. Wants rule?",
        options: [
          "Being bored all weekend",
          "Confidence that your money is safe, bills are paid, and your savings are growing",
          "Never talking to your classmates again",
          "Having an empty bedroom"
        ],
        correctIndex: 1,
        explanation: "Mastering this distinction creates peace of mind and true financial freedom.\nYou get to enjoy your earned rewards guilt-free because your essentials are covered!"
      }
    ]
  },
  {
    id: 3,
    title: "The Superpower of Saving & Piggy Banks",
    subtitle: "Turn Tiny Coins into Mountainous Vaults with the Habit of Paying Yourself First",
    badge: "Module 3",
    themeColor: "#6C5CE7",
    icon: "🐷",
    comicIntro: {
      headline: "The Legend of the Golden Piggy Bank!",
      story: "Meet Leo and Mia. Both get $10 allowance every week. Leo runs straight to the arcade and candy shop and spends all $10 in 15 minutes! Mia does something legendary: she drops $3 into her Piggy Bank, and enjoys the other $7.",
      painPoint: "At the end of 6 months, a sudden chance comes along: their favorite school science camp trip to the Space Planetarium costs $75! Leo has exactly $0. He cries as the bus leaves.",
      breakthrough: "Mia unlocks her piggy bank and counts $78! She pays for her seat, buys a glow-in-the-dark astronaut helmet, and still has change left over! That is the secret superpower: **Pay Yourself First**.",
      realLifeExample: "Saving isn't about being stingy. Saving is paying your FUTURE self so you can do epic things without asking for emergency handouts!"
    },
    illustrations: [
      { emoji: "💸 ➔ 💨", label: "Leo: Instant Spend = $0", bg: "rgba(255, 118, 117, 0.15)" },
      { emoji: "🪙 ➔ 🐷", label: "Mia: Pay Yourself First", bg: "rgba(108, 92, 231, 0.15)" },
      { emoji: "🚀 🪐 ⭐", label: "Big Goals Unlocked!", bg: "rgba(0, 184, 148, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: The Three Jars Rule: Spend, Save, Give",
      duration: "3:40 min",
      summary: "Discover the famous 3-Jar system! Learn why dividing every dollar into Spend, Save, and Give makes you feel like a billionaire in training."
    },
    quiz: [
      {
        id: 1,
        question: "What does the golden rule 'Pay Yourself First' really mean?",
        options: [
          "Buy yourself a candy bar before giving anything to your parents",
          "Put a portion of your money into savings before you spend on anything else",
          "Keep all your money in your pocket instead of in a safe place",
          "Refuse to ever pay for school supplies"
        ],
        correctIndex: 1,
        explanation: "'Pay yourself first' means saving a set amount immediately when you receive money.\nIf you only save 'whatever is left over', there is usually zero dollars left!"
      },
      {
        id: 2,
        question: "Why is a physical piggy bank or savings jar great for young students?",
        options: [
          "It turns money into gold automatically",
          "It makes your savings visible, tangible, and fun to watch grow",
          "It prevents banks from existing",
          "It has a built-in alarm that shocks anyone who touches it"
        ],
        correctIndex: 1,
        explanation: "Seeing coins and bills accumulate inside a jar reinforces positive habits.\nWatching the stash rise gives a tangible boost of pride and achievement!"
      },
      {
        id: 3,
        question: "If Sam saves $2 every single day, how much will Sam have saved in 100 days?",
        options: ["$20", "$50", "$200", "$1,000"],
        correctIndex: 2,
        explanation: "$2 per day multiplied by 100 days = $200!\nConsistency beats intensity: small everyday habits build giant financial results."
      },
      {
        id: 4,
        question: "What is an 'Emergency Stash' used for?",
        options: [
          "Buying the newest video game skin during a flash sale",
          "Handling unexpected problems like a broken bicycle chain or lost transit pass",
          "Buying ice cream when you're slightly bored",
          "Betting on football matches"
        ],
        correctIndex: 1,
        explanation: "An emergency fund protects you when unexpected surprises happen.\nIt prevents panic because you already have cash ready to fix the problem!"
      },
      {
        id: 5,
        question: "What is the 'Three Jar System' for pocket money?",
        options: [
          "Jar 1: Candy, Jar 2: Soda, Jar 3: Chips",
          "Jar 1: Spend Now, Jar 2: Save for Goals, Jar 3: Give / Share",
          "Jar 1: Coins, Jar 2: Buttons, Jar 3: Paper clips",
          "Jar 1: Morning, Jar 2: Noon, Jar 3: Night"
        ],
        correctIndex: 1,
        explanation: "The 3-Jar system balances everyday fun (Spend), future dreams (Save),\nand kindness/community impact (Give), developing well-rounded financial maturity."
      },
      {
        id: 6,
        question: "What is 'Delayed Gratification'?",
        options: [
          "Waiting and resisting a small quick reward now to get a much bigger reward later",
          "Forgetting that you ever had money",
          "Being unhappy on purpose",
          "Waiting in a long supermarket line"
        ],
        correctIndex: 0,
        explanation: "Delayed gratification is holding off on impulsive immediate treats\nso you can achieve something significantly more meaningful and valuable in the future."
      },
      {
        id: 7,
        question: "Which of these is the smartest saving goal for a 6th grader?",
        options: [
          "Saving $1,000,000 by next Tuesday",
          "Saving $5 a week for 8 weeks to buy a quality skateboard ($40)",
          "Never spending any money ever again for life",
          "Hoping money falls from the sky"
        ],
        correctIndex: 1,
        explanation: "A great goal is SMART: Specific ($40), Measurable ($5/wk), and Realistic (8 weeks).\nClear milestones make saving achievable and exciting to track!"
      },
      {
        id: 8,
        question: "Why is leaving cash lying around in random drawers a bad idea?",
        options: [
          "It might get lost, vacuumed up, or impulsively spent on tiny snacks",
          "Money goes bad like fruit if not frozen",
          "Paper money turns into wood after 2 weeks",
          "It attracts hungry mice who eat coins"
        ],
        correctIndex: 0,
        explanation: "Unorganized cash tends to vanish into careless impulse purchases or get lost.\nA dedicated bank or secure savings jar keeps your money protected and intentional."
      },
      {
        id: 9,
        question: "How do banks reward you for depositing your savings with them?",
        options: [
          "They give you free video game consoles every month",
          "They pay you 'Interest'—extra bonus money for keeping your funds with them",
          "They take half your money as punishment",
          "They hide your money and make you solve riddles to find it"
        ],
        correctIndex: 1,
        explanation: "Banks pay you interest as a percentage reward for storing your deposits.\nYour balance actually grows on its own simply by sitting safely in the bank!"
      },
      {
        id: 10,
        question: "What mindset transforms you from a reckless spender into a Money Champion?",
        options: [
          "Believing you must spend every coin the moment it touches your hand",
          "Understanding that every dollar saved is a worker helping you achieve your dreams",
          "Refusing to share anything with family",
          "Counting coins 24 hours a day without sleeping"
        ],
        correctIndex: 1,
        explanation: "Viewing money as a powerful tool lets you direct your future.\nEach dollar saved becomes a stepping stone toward genuine autonomy and achievement!"
      }
    ]
  },
  {
    id: 4,
    title: "Smart Budgeting Basics",
    subtitle: "Be the Chief Executive Officer of Your Own Pocket Money and Allowances",
    badge: "Module 4",
    themeColor: "#00B894",
    icon: "📊",
    comicIntro: {
      headline: "The Tale of the Disappearing Allowance!",
      story: "On Monday, Zoe gets her $20 weekly allowance for chores. On Tuesday: a fancy bobblehead pen ($5). On Wednesday: two sugary sodas ($6). On Thursday: shiny stickers ($4).",
      painPoint: "On Friday, her friends invite her to the weekend roller rink party ($10 entry). Zoe opens her wallet and finds... two dust bunnies and a paperclip! Where did the $20 go? She has no clue!",
      breakthrough: "A **Budget** is simply a roadmap for your money! Instead of wondering where your money went, a budget tells your money where to go in advance.",
      realLifeExample: "If Zoe budgeted: $10 for Weekend Fun, $5 for Midweek Snacks, and $5 for Savings, she would have rolled into Friday smiling like a champ!"
    },
    illustrations: [
      { emoji: "📝 ➔ 🎯", label: "Income & Expense Map", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "🍩 ☕ 🎟️", label: "Track Every Penny", bg: "rgba(255, 165, 2, 0.15)" },
      { emoji: "👑 🏆 💰", label: "Boss of Your Balance", bg: "rgba(108, 92, 231, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: How 11-Year-Old Kai Built His First Master Budget",
      duration: "3:10 min",
      summary: "Learn the easy color-coded notepad method Kai uses to balance soccer gear, weekend pizza slices, and his new mountain bike goal!"
    },
    quiz: [
      {
        id: 1,
        question: "What is a 'Budget' in simple words?",
        options: [
          "A punishment to stop you from having fun",
          "A written plan that outlines how you will earn, save, and spend your money",
          "A tax paid to your school teacher",
          "A special credit card for video games"
        ],
        correctIndex: 1,
        explanation: "A budget is a personal plan that directs your money intentionally.\nIt ensures you have enough funds for essentials, future goals, and guilt-free fun!"
      },
      {
        id: 2,
        question: "In budgeting, what is 'Income'?",
        options: [
          "Money you spend on school supplies",
          "Money coming in to you (allowance, birthday gifts, pet-sitting, chores)",
          "Money lost in the washing machine",
          "The price tag on shoes"
        ],
        correctIndex: 1,
        explanation: "Income is all money earned or received from any source.\nTracking your total income tells you exactly how much cash you have available to allocate."
      },
      {
        id: 3,
        question: "In budgeting, what is an 'Expense'?",
        options: [
          "Money that flows out of your pocket to pay for things",
          "Money that a bank gives you as a free gift",
          "A certificate of good grades",
          "A secret treasure map"
        ],
        correctIndex: 0,
        explanation: "Expenses are the costs of items and experiences you purchase.\nSnacks, movie tickets, art supplies, and transit fares are all common expenses."
      },
      {
        id: 4,
        question: "What happens if your Expenses are GREATER than your Income?",
        options: [
          "You get a medal from the government",
          "You run out of money and may go into debt borrowing from others",
          "Your wallet magically refills at midnight",
          "Prices in stores decrease by 50%"
        ],
        correctIndex: 1,
        explanation: "Spending more than you earn creates a deficit and debt.\nA golden rule of financial literacy is to always keep expenses below your income!"
      },
      {
        id: 5,
        question: "Liam earns $25 a week. He spends $15 on essentials & snacks, and saves $10. What is his monthly savings (4 weeks)?",
        options: ["$20", "$40", "$100", "$15"],
        correctIndex: 1,
        explanation: "$10 saved per week multiplied by 4 weeks = $40!\nBudgeting guarantees Liam stacks $40 into his vault every single month like clockwork."
      },
      {
        id: 6,
        question: "Why is tracking your daily small purchases (like $1 candy) super important in budgeting?",
        options: [
          "Small daily leaks add up to dozens of dollars without you noticing",
          "Shopkeepers report you if you don't write it down",
          "Candy is legally required to be logged in a ledger",
          "It makes the candy taste sweeter"
        ],
        correctIndex: 0,
        explanation: "A $2 snack every school day is $40 a month or almost $500 a year!\nTracking reveals hidden 'micro-leaks' so you can reallocate cash toward bigger dreams."
      },
      {
        id: 7,
        question: "What is a 'Fixed Expense'?",
        options: [
          "An expense that stays the exact same amount every month (like a bus pass or phone plan)",
          "An expense you pay only when you fix a broken bicycle",
          "A price you can negotiate down to zero",
          "Money spent only on video game repairs"
        ],
        correctIndex: 0,
        explanation: "Fixed expenses are predictable costs that stay identical each cycle.\nKnowing fixed costs first helps you calculate what remains for flexible spending."
      },
      {
        id: 8,
        question: "What is a 'Variable Expense'?",
        options: [
          "A cost that changes depending on how much you choose to buy (like snacks or weekend movies)",
          "Money that only exists in mathematics class",
          "An expense that can never be tracked",
          "Free items given at school"
        ],
        correctIndex: 0,
        explanation: "Variable expenses fluctuate based on daily choices and habits.\nThey are the easiest category to cut back on when you want to boost your savings!"
      },
      {
        id: 9,
        question: "If Emma wants to buy a $60 video game in 3 months, how much must she budget to save each month?",
        options: ["$10/month", "$20/month", "$30/month", "$60/month"],
        correctIndex: 1,
        explanation: "$60 divided equally across 3 months = $20 per month!\nA budget breaks intimidating big numbers down into bite-sized, achievable monthly steps."
      },
      {
        id: 10,
        question: "What is the biggest superpower that following a budget gives you?",
        options: [
          "You never have to worry or stress about where your money disappeared to",
          "You are guaranteed to win the lottery",
          "You can buy anything in the universe instantly",
          "You never need to clean your room"
        ],
        correctIndex: 0,
        explanation: "Budgeting gives you clarity, calm confidence, and total control.\nYou always know your exact financial health and can achieve your goals without stress!"
      }
    ]
  },
  {
    id: 5,
    title: "The Seed of Investing",
    subtitle: "Planting Money Seeds Today So They Grow Into Giant Fruit Trees Tomorrow",
    badge: "Module 5",
    themeColor: "#0984E3",
    icon: "🌱",
    comicIntro: {
      headline: "The Magic Apple Tree Analogy!",
      story: "If you have 10 apple seeds in your hand, you have two choices. Choice A: Chew them up today (satisfies a tiny crunchy snack). Choice B: Plant them in fertile soil, water them, and wait!",
      painPoint: "If you plant them, you get nothing on Day 2. You get nothing on Day 10. Impatient people dig up their seeds and quit!",
      breakthrough: "But after seasons of sunshine, that tiny seed becomes an enormous apple tree that produces **500 juicy apples every single year for decades**! That is **INVESTING**.",
      realLifeExample: "Saving keeps money safe in a jar. Investing puts your money to work in businesses, property, or ideas so your balance multiplies over time without you working manual hours!"
    },
    illustrations: [
      { emoji: "🌰 ➔ 💧", label: "Plant & Nurture Seeds", bg: "rgba(9, 132, 227, 0.15)" },
      { emoji: "⏳ ➔ 🌿", label: "Patience & Time", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "🌳 🍎 💰", label: "The Abundant Harvest", bg: "rgba(255, 165, 2, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: The Story of Compounding: Two Squirrels and Their Acorn Forests",
      duration: "3:30 min",
      summary: "Meet Nutty and Sammy! See how planting acorns instead of burying them under rocks made Sammy the wealthiest king of the forest."
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary difference between 'Saving' and 'Investing'?",
        options: [
          "Saving is keeping money safe; investing is putting money to work to help it grow",
          "Saving is for kids, investing is only for billionaire robots",
          "Saving is illegal, investing is mandatory",
          "There is zero difference between them"
        ],
        correctIndex: 0,
        explanation: "Saving protects your capital for short-term needs and emergencies.\nInvesting takes calculated risk over time to grow your wealth through capital returns."
      },
      {
        id: 2,
        question: "What is 'Inflation' and why does it affect money sitting in a piggy bank for 20 years?",
        options: [
          "Inflation is balloons getting blown up at parties",
          "Inflation is general prices rising over time, making future dollars buy fewer goods",
          "Inflation makes coins shrink physically in size",
          "Inflation is when banks give away free candy"
        ],
        correctIndex: 1,
        explanation: "Inflation means prices of bread, toys, and houses increase over years.\nIf money just sits in a drawer with zero growth, its purchasing power steadily shrinks!"
      },
      {
        id: 3,
        question: "What is 'Compound Interest' often called in the financial world?",
        options: [
          "The eighth wonder of the world: money earning interest on interest",
          "A secret tax deduction",
          "An ancient pyramid trap",
          "A video game cheat code"
        ],
        correctIndex: 0,
        explanation: "Compound interest means your money earns a reward, and then that reward\nearns its OWN reward! Over years, this snowball effect creates extraordinary wealth."
      },
      {
        id: 4,
        question: "When you buy a share of stock in a company (like a toy or sports brand), what are you doing?",
        options: [
          "Buying the entire company building",
          "Becoming a partial part-owner of that company and sharing in its growth",
          "Lending them money with guaranteed 100% returns tomorrow",
          "Getting free sneakers sent to your house every Friday"
        ],
        correctIndex: 1,
        explanation: "A share represents fractional ownership of a business.\nIf the business invents great products and profits, the value of your share rises!"
      },
      {
        id: 5,
        question: "What is 'Risk' in investing?",
        options: [
          "The certainty that you will always double your money immediately",
          "The possibility that an investment might lose value or not perform as hoped",
          "A board game with dice",
          "A guarantee of zero mistakes"
        ],
        correctIndex: 1,
        explanation: "All investing involves risk because future market prices fluctuate.\nUnderstanding risk helps you choose diversified, balanced, and smart investments."
      },
      {
        id: 6,
        question: "What is 'Diversification', famously known as 'not putting all your eggs in one basket'?",
        options: [
          "Buying 100 copies of the exact same video game",
          "Spreading your money across different investments so one failure won't wipe you out",
          "Keeping all your cash under your bed mattress",
          "Investing only in egg companies"
        ],
        correctIndex: 1,
        explanation: "Diversifying protects you against single-business failure.\nIf one company has a bad year, your other investments balance out the portfolio."
      },
      {
        id: 7,
        question: "Why is STARTING EARLY (at school age) the biggest superpower in investing?",
        options: [
          "Children are allowed to cheat on taxes",
          "You have the ultimate weapon: DECADES of time for compound interest to multiply",
          "Stocks are 90% cheaper for students",
          "Adults aren't allowed to invest"
        ],
        correctIndex: 1,
        explanation: "Time is the magic fuel of compounding! Starting at age 12 gives your money\n40+ years to compound, requiring far less cash to build life-changing security."
      },
      {
        id: 8,
        question: "What should you do if the market dips or drops in value over a few weeks?",
        options: [
          "Panic, cry, and sell everything at a big loss",
          "Stay calm and remember that long-term investing looks at years and decades, not days",
          "Call the police",
          "Blame your math teacher"
        ],
        correctIndex: 1,
        explanation: "Short-term ups and downs are normal market cycles.\nPatient, long-term investors ignore daily panic and let broad economic growth do the work."
      },
      {
        id: 9,
        question: "Can anyone become an investor?",
        options: [
          "Only billionaires who wear fancy suits on television",
          "Yes! Anyone with knowledge, discipline, and even small amounts of money can invest",
          "Only computer scientists with math degrees",
          "No, investing was outlawed in 2010"
        ],
        correctIndex: 1,
        explanation: "Today, micro-investing and educational platforms make investing accessible to all.\nDiscipline and consistency matter far more than having huge piles of starting cash."
      },
      {
        id: 10,
        question: "What is the ultimate goal of learning to save, budget, and invest as a young student?",
        options: [
          "To brag about having more gold than your neighbors",
          "To build freedom, security, peace of mind, and the ability to help others and follow your dreams",
          "To never share anything with anyone",
          "To sit on a pile of cash doing nothing forever"
        ],
        correctIndex: 1,
        explanation: "True wealth is not just paper numbers; it is freedom!\nIt allows you to live without financial fear, provide for loved ones, and make an impact!"
      }
    ]
  }
];
