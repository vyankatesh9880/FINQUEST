// Comprehensive data for 8th to 10th Grade Modules
// 5 Advanced Modules: Digital Money & Cyber, 50-30-20 Budgeting, Debt & Credit Cards, Banking & Savings Growth, Investing & Future Planning
// Each module has comic-style text, real examples, video placeholder, and 10 MCQs with 2-line explanations

export const SENIOR_MODULES = [
  {
    id: 1,
    title: "Digital Money & Cybersecurity",
    subtitle: "Navigating UPI, Crypto, Wallets, Phishing Scams & Teen Digital Safety",
    badge: "Module 1",
    themeColor: "#00B894",
    icon: "🛡️",
    comicIntro: {
      headline: "The Ghost in Your Smartphone Wallet!",
      story: "You receive an urgent SMS: *'Your bank account is frozen! Click this link within 10 minutes to verify your ID and claim $50 free FinCoins!'* 🚨 Your thumb hovers over the shiny blue link.",
      painPoint: "Tap it, and cyber-criminals clone your login session, empty your wallet, and lock your account in 3.4 seconds flat! Game over.",
      breakthrough: "Digital cash is lightning-fast and convenient, but cyber-criminals use social engineering, fake QR codes, and malicious URLs. A cyber-smart student verifies sender addresses, enforces **Two-Factor Authentication (2FA)**, and treats OTPs like nuclear launch codes.",
      realLifeExample: "Never share an OTP or scan a QR code to 'receive' money! In genuine payment systems (UPI/Cards), you only scan or enter your PIN when YOU are sending money, never when receiving it!"
    },
    illustrations: [
      { emoji: "🎣 ➔ ⚠️", label: "Phishing & Fake Urgency", bg: "rgba(255, 118, 117, 0.15)" },
      { emoji: "🔐 ➔ 🛡️", label: "2FA & Biometric Shield", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "📱 ➔ 💳", label: "Secure Digital Wallets", bg: "rgba(108, 92, 231, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: Anatomy of a Teen Social Engineering Attack",
      duration: "4:10 min",
      summary: "White-hat cybersecurity hackers demonstrate live how teen gamers lose their accounts to Discord and SMS phishing, and how to stay unhackable."
    },
    quiz: [
      {
        id: 1,
        question: "What is 'Phishing' in the context of digital financial cybersecurity?",
        options: [
          "Catching fish using high-tech digital rods",
          "Fraudulent messages or fake websites designed to trick you into revealing passwords or card details",
          "A fast new bank wire transfer method",
          "A free software upgrade from Apple or Google"
        ],
        correctIndex: 1,
        explanation: "Phishing uses deceptive emails, DMs, or links disguised as legitimate companies.\nTheir sole goal is to harvest your sensitive passwords, OTPs, or credit credentials."
      },
      {
        id: 2,
        question: "When is it safe to share your One-Time Password (OTP) or UPI PIN over phone or chat?",
        options: [
          "When someone claiming to be bank customer care asks for it urgently",
          "NEVER under any circumstances with anyone",
          "When a buyer online asks for it so they can send you money",
          "Only if the message has an official logo attached"
        ],
        correctIndex: 1,
        explanation: "Banks and payment apps explicitly state they will NEVER ask for your OTP or PIN.\nSharing your OTP gives full authorization to drain funds from your account instantly."
      },
      {
        id: 3,
        question: "In UPI or peer-to-peer mobile payments, what action is required to RECEIVE money from someone?",
        options: [
          "You must enter your secret UPI PIN",
          "You must scan a QR code sent by the buyer",
          "Zero PIN or QR scanning is required—money drops directly into your account",
          "You must deposit a $5 security fee"
        ],
        correctIndex: 2,
        explanation: "Receiving money requires ZERO action or PIN confirmation on your end.\nScammers often send 'Pay Request' QR codes claiming you must scan them to receive cash."
      },
      {
        id: 4,
        question: "What does 'Two-Factor Authentication' (2FA) do for your financial security?",
        options: [
          "Requires two separate proofs of identity (e.g. password + authenticator code) to log in",
          "Doubles the transaction fees of every purchase",
          "Allows two people to share one single password",
          "Splits your money into two different currencies"
        ],
        correctIndex: 0,
        explanation: "2FA adds an essential second defense layer beyond just your static password.\nEven if a hacker steals your password, they cannot enter without your physical authenticator."
      },
      {
        id: 5,
        question: "Why is conducting financial transactions over free public Wi-Fi (like an airport or café) risky?",
        options: [
          "Public Wi-Fi shuts down banking apps automatically",
          "Unsecured public networks can be intercepted by hackers using packet-sniffing tools",
          "Public Wi-Fi charges 10% interest on bank transfers",
          "It drains your phone's battery to zero immediately"
        ],
        correctIndex: 1,
        explanation: "Public Wi-Fi routers rarely encrypt internal traffic between connected devices.\nMalicious actors on the same hotspot can intercept unencrypted data and session cookies."
      },
      {
        id: 6,
        question: "What is a major characteristic of Cryptocurrencies (like Bitcoin or Ethereum) compared to traditional bank deposits?",
        options: [
          "They are backed and insured by national governments up to $250,000",
          "They have high volatility, irreversible transactions, and no central customer service",
          "They cannot ever change in value",
          "They are only usable inside Minecraft"
        ],
        correctIndex: 1,
        explanation: "Crypto transactions are decentralized and permanent—there is no bank manager to undo a transfer.\nTheir exchange rates also swing wildly based on global speculative market sentiment."
      },
      {
        id: 7,
        question: "If a stranger on social media promises to 'flip' your $50 into $500 in 24 hours via crypto, what is it?",
        options: [
          "A legitimate high-yield investment scheme",
          "A classic financial scam where they will steal your $50 and block you",
          "A government charity grant",
          "A normal trading day on Wall Street"
        ],
        correctIndex: 1,
        explanation: "Guaranteed 1000% overnight profits do not exist in genuine financial markets.\n'Money flipping' promises are 100% predatory scams designed to exploit FOMO."
      },
      {
        id: 8,
        question: "What is the safest practice for creating passwords for financial apps?",
        options: [
          "Use 'Password123' on all platforms so you never forget it",
          "Use your pet's name followed by your birth year",
          "Use unique, complex passphrases managed by a reputable password manager",
          "Write your PIN on the back of your debit card"
        ],
        correctIndex: 2,
        explanation: "Reusing passwords means one breached forum exposes your banking logins too.\nA password manager generates and stores 20+ character random strings securely."
      },
      {
        id: 9,
        question: "What should you do immediately if you suspect your debit card details have been compromised?",
        options: [
          "Wait 3 months to see if any strange charges appear",
          "Immediately freeze or block the card via your mobile banking app and notify the bank",
          "Post your card number on Twitter asking for help",
          "Transfer more money into the compromised account"
        ],
        correctIndex: 1,
        explanation: "Freezing the card stops unauthorized automated transactions within milliseconds.\nReporting promptly also guarantees full fraud protection under consumer banking laws."
      },
      {
        id: 10,
        question: "What is 'Digital Footprint' in financial contexts?",
        options: [
          "The literal weight of your smartphone in your pocket",
          "The permanent record of your online transactions, searches, and data traces",
          "A step counter app reward",
          "A new type of biometric shoe sensor"
        ],
        correctIndex: 1,
        explanation: "Every payment, account sign-up, and digital click creates an audit trail.\nGuarding your digital identity protects your privacy, credit reputation, and future security."
      }
    ]
  },
  {
    id: 2,
    title: "The Art of Smart Budgeting (The 50-30-20 Rule)",
    subtitle: "The Master Framework Used by Financial Planners to Balance Wealth and Fun",
    badge: "Module 2",
    themeColor: "#6C5CE7",
    icon: "📊",
    comicIntro: {
      headline: "The 50-30-20 Money Architecture!",
      story: "You start your first weekend part-time gig or tutoring program and earn $400 a month. 🎉 Most teens blow it all in Week 1 on sneakers and takeout. Then Week 3 arrives: phone bill unpaid, zero savings, complete stress!",
      painPoint: "Living paycheck to paycheck isn't caused by earning too little; it's caused by lack of structural cash-flow design!",
      breakthrough: "Harvard bankruptcy professor Elizabeth Warren popularized the ultimate money formula: **50% Needs, 30% Wants, 20% Wealth & Savings**.",
      realLifeExample: "On your $400 earnings: $200 pays transit, lunches, school supplies (50% Needs); $120 pays cinema, cafes, video games (30% Wants); and $80 deposits directly into your high-yield investment fund (20% Wealth)!"
    },
    illustrations: [
      { emoji: "🥗 🚌 📱", label: "50% Needs: Essentials", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "🎮 🍿 🎧", label: "30% Wants: Lifestyle", bg: "rgba(253, 121, 168, 0.15)" },
      { emoji: "📈 🏦 🛡️", label: "20% Wealth: Compounding", bg: "rgba(108, 92, 231, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: The 50-30-20 Rule in Action: From Zero to Teen Investor",
      duration: "3:45 min",
      summary: "Watch 16-year-old Maya organize her $500 monthly freelance income using automated sub-accounts so she never worries about money again."
    },
    quiz: [
      {
        id: 1,
        question: "In the 50-30-20 budgeting rule, what does the 50% category cover?",
        options: [
          "Luxury vacations and gaming consoles",
          "Essential Needs: housing/rent, transit, groceries, health, utilities",
          "Speculative stock trades and cryptocurrency",
          "Charity donations exclusively"
        ],
        correctIndex: 1,
        explanation: "50% of your take-home income is allocated to non-negotiable obligations.\nKeeping essentials capped at 50% ensures you never get crushed by everyday cost of living."
      },
      {
        id: 2,
        question: "What does the 30% bucket in the 50-30-20 rule represent?",
        options: [
          "Discretionary Wants: entertainment, dining out, hobbies, streaming subscriptions",
          "Taxes owed to the government",
          "Emergency hospital visits",
          "Retirement savings"
        ],
        correctIndex: 0,
        explanation: "The 30% bucket provides guilt-free lifestyle spending for fun and experiences.\nBecause it's planned for, you can enjoy it without feeling bad or sabotaging your future!"
      },
      {
        id: 3,
        question: "What crucial financial purpose does the 20% bucket serve?",
        options: [
          "Paying for friends' party tickets",
          "Savings, emergency funds, debt payoff, and long-term investments",
          "Buying raffle tickets",
          "Upgrading smartphones every 6 months"
        ],
        correctIndex: 1,
        explanation: "The 20% bucket builds your future freedom and safety cushion.\nConsistently saving and investing 20% of your earnings practically guarantees future wealth!"
      },
      {
        id: 4,
        question: "If Marcus earns $600 a month from a summer job, how should it be divided under 50-30-20?",
        options: [
          "$300 Needs, $180 Wants, $120 Savings/Investing",
          "$100 Needs, $400 Wants, $100 Savings/Investing",
          "$500 Needs, $50 Wants, $50 Savings/Investing",
          "$200 Needs, $200 Wants, $200 Savings/Investing"
        ],
        correctIndex: 0,
        explanation: "50% of $600 = $300; 30% of $600 = $180; 20% of $600 = $120.\nThis balanced framework keeps Marcus completely in control of his cash flow."
      },
      {
        id: 5,
        question: "What is 'Lifestyle Creep' (or Lifestyle Inflation)?",
        options: [
          "A monster in a horror video game",
          "Increasing your spending on luxuries every time your income increases, leaving zero additional savings",
          "Moving into a smaller apartment to save money",
          "Buying second-hand clothes at a thrift shop"
        ],
        correctIndex: 1,
        explanation: "Lifestyle creep happens when raises get absorbed by fancier cars or clothes.\nSmart budgeters maintain their savings rate rather than blowing every dollar of a pay bump."
      },
      {
        id: 6,
        question: "How can modern digital banking apps help you stick to the 50-30-20 rule automatically?",
        options: [
          "By sending you angry text messages every hour",
          "By setting up automatic transfers into dedicated sub-vaults on payday",
          "By locking you out of your bank account forever",
          "By canceling all your credit cards"
        ],
        correctIndex: 1,
        explanation: "Automation removes human willpower and procrastination from the equation.\nSplitting your pay into dedicated vaults on Day 1 guarantees discipline effortlessly."
      },
      {
        id: 7,
        question: "What should you do if your essential Needs exceed 50% of your income (e.g., they reach 65%)?",
        options: [
          "Borrow heavily on credit cards to maintain 30% wants spending",
          "Temporarily scale back your Wants bucket and find ways to optimize or reduce fixed costs",
          "Stop paying for food completely",
          "Ignore it and hope it disappears"
        ],
        correctIndex: 1,
        explanation: "When needs are high, flex your wants down to protect at least 10-15% for savings.\nBudgeting requires flexible adjustments when life circumstances fluctuate."
      },
      {
        id: 8,
        question: "What is a 'Sinking Fund' in advanced budgeting?",
        options: [
          "Money dumped into a boat repair shop",
          "Saving small amounts monthly for a predictable future expense (e.g. holiday gifts, annual car insurance)",
          "A business that went bankrupt",
          "Money lost in the ocean"
        ],
        correctIndex: 1,
        explanation: "A sinking fund prevents annual or seasonal bills from feeling like sudden emergencies.\nSetting aside $25/month means having $300 ready for holiday gifts without stress!"
      },
      {
        id: 9,
        question: "Why is a zero-based budget (giving every single dollar a job) so powerful?",
        options: [
          "It forces your bank account balance to become negative $0",
          "It ensures untracked cash doesn't mysteriously evaporate into mindless impulse purchases",
          "It is required by federal tax laws for teenagers",
          "It guarantees 50% discounts in retail stores"
        ],
        correctIndex: 1,
        explanation: "When money doesn't have an assigned mission, it slips away on coffees and snacks.\nDirecting every single dollar into Needs, Wants, or Wealth creates bulletproof intentionality."
      },
      {
        id: 10,
        question: "What is the psychological reward of sticking to a 50-30-20 budget for 6 months?",
        options: [
          "You feel deprived and miserable 24/7",
          "Complete financial peace of mind, zero guilt when spending on wants, and a rapidly growing wealth cushion",
          "You are legally banned from social events",
          "You forget how to use money"
        ],
        correctIndex: 1,
        explanation: "Real budgeting doesn't restrict your happiness; it enables it!\nYou can splurge on that 30% concert ticket with pure joy because your future is fully funded."
      }
    ]
  },
  {
    id: 3,
    title: "The Reality of Debt & Credit Cards",
    subtitle: "Understanding Good vs. Bad Debt, APR, Credit Scores, and the Compound Interest Trap",
    badge: "Module 3",
    themeColor: "#FD79A8",
    icon: "💳",
    comicIntro: {
      headline: "The Double-Edged Sword: Plastic Money!",
      story: "You turn 18, and banks mail you glossy plastic cards with '$5,000 credit limit!' It feels like magic free money! You swipe it for a $1,200 designer gaming laptop. 💻✨",
      painPoint: "The monthly bill arrives: Minimum Payment due: $35. You think: 'Awesome, so cheap!' But at 24% APR interest, that $1,200 laptop will take **11 years to pay off and cost you over $2,800 in total**! 😱",
      breakthrough: "A **Credit Card is NOT your money; it is a high-interest short-term loan**! If you pay the statement balance in full every single month before the due date, you pay **$0 interest**, earn reward points, and build an elite Credit Score.",
      realLifeExample: "Treat a credit card like a debit card: NEVER swipe for something unless you already have the cold hard cash sitting in your bank checking account ready to pay it off that week!"
    },
    illustrations: [
      { emoji: "💳 ➔ ⚡", label: "Swipe Now, Pay Later", bg: "rgba(253, 121, 168, 0.15)" },
      { emoji: "📈 ➔ 🕸️", label: "24% APR Debt Trap", bg: "rgba(255, 118, 117, 0.15)" },
      { emoji: "🏆 ➔ ⭐", label: "Elite 750+ Credit Score", bg: "rgba(0, 184, 148, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: How Credit Card Companies Make Billions from Minimum Payments",
      duration: "4:00 min",
      summary: "Financial analysts break down the math behind compounding revolving debt and reveal the simple rule that turns credit cards into free reward machines."
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary difference between a Debit Card and a Credit Card?",
        options: [
          "A debit card is made of gold; a credit card is made of silver",
          "A debit card deducts money directly from your own bank account; a credit card borrows money from the bank that must be repaid",
          "A credit card has zero fees or obligations forever",
          "Only credit cards can be used online"
        ],
        correctIndex: 1,
        explanation: "Debit spends your existing deposited money directly.\nCredit is an instant revolving loan from the issuing bank that you must repay."
      },
      {
        id: 2,
        question: "What does 'APR' stand for on a credit card or loan?",
        options: [
          "Annual Percentage Rate (the yearly cost of borrowing, including interest)",
          "Automatic Payment Refund",
          "Average Profit Ratio",
          "Applied Personal Reward"
        ],
        correctIndex: 0,
        explanation: "APR measures the annual interest rate charged on unpaid credit balances.\nCredit card APRs typically range from 18% to 28%, making them extremely expensive loans!"
      },
      {
        id: 3,
        question: "What happens if you only pay the 'Minimum Due' on a credit card statement each month?",
        options: [
          "The bank cancels all remaining debt as a courtesy",
          "Most of your payment goes to high interest, keeping you trapped in debt for years or decades",
          "Your credit score automatically hits 850",
          "You get a 50% cash refund"
        ],
        correctIndex: 1,
        explanation: "Minimum payments are designed by banks to maximize their interest profits.\nPaying only the minimum drags a $1,000 balance out over a decade of brutal interest charges."
      },
      {
        id: 4,
        question: "How can you use a credit card and pay exactly $0.00 in interest charges?",
        options: [
          "Never swipe the card for more than $5",
          "Pay the entire Statement Balance in full on or before the monthly due date",
          "Only use the card at midnight",
          "Ask the bank to forgive the interest each month"
        ],
        correctIndex: 1,
        explanation: "Credit cards offer a 'grace period' (typically 21–25 days).\nPaying the statement balance in full before the deadline eliminates all interest entirely!"
      },
      {
        id: 5,
        question: "What is a 'Credit Score' (like FICO or CIBIL)?",
        options: [
          "A video game achievement point system",
          "A three-digit numerical rating of how reliably you repay borrowed money",
          "The amount of cash currently in your pocket",
          "A rating of your popularity on social media"
        ],
        correctIndex: 1,
        explanation: "Credit scores (usually 300 to 850) quantify your borrower trustworthiness.\nA higher score qualifies you for lower mortgage rates, apartment leases, and better loans."
      },
      {
        id: 6,
        question: "Which of the following describes 'Good Debt' vs 'Bad Debt'?",
        options: [
          "Good debt finances assets that increase in value or income (e.g. education, affordable mortgage); bad debt finances depreciating luxuries at high interest",
          "All debt is 100% evil and should never be used",
          "Good debt is money borrowed from friends; bad debt is from banks",
          "There is no distinction in economics"
        ],
        correctIndex: 0,
        explanation: "Good debt is an investment that builds long-term net worth or earning potential.\nBad debt is borrowing at 20%+ interest to buy perishable clothes, takeout, or vacations."
      },
      {
        id: 7,
        question: "What is the single most important factor in calculating your credit score?",
        options: [
          "Your on-time payment history (whether you pay bills on time every month)",
          "How many friends follow your TikTok account",
          "Whether you use cash or coins at the store",
          "Your favorite color"
        ],
        correctIndex: 0,
        explanation: "Payment history accounts for roughly 35% of your total credit score.\nA single missed payment reported to credit bureaus can tank your score for years."
      },
      {
        id: 8,
        question: "What is 'Credit Utilization Ratio'?",
        options: [
          "How often you clean your plastic credit card with soap",
          "The percentage of your total available credit limit that you are currently using",
          "The speed at which the card reader beeps",
          "The number of cards in your wallet"
        ],
        correctIndex: 1,
        explanation: "Credit utilization is your balance divided by your limit.\nKeeping utilization below 30% (ideally under 10%) proves you aren't desperate for credit."
      },
      {
        id: 9,
        question: "What is a 'Payday Loan' and why are they considered predatory?",
        options: [
          "A free bonus paid by your employer",
          "Short-term loans with astronomical interest rates (often 300%–500% APR) that trap vulnerable borrowers in debt spirals",
          "A government grant for college tuition",
          "A low-cost mortgage for buying a farm"
        ],
        correctIndex: 1,
        explanation: "Payday lenders prey on cash-strapped people by charging 400%+ APR.\nBorrowers frequently have to take out new loans just to pay off the interest on old ones."
      },
      {
        id: 10,
        question: "What is the ultimate rule for teens and young adults starting with credit?",
        options: [
          "Swipe for everything and worry about paying in your 30s",
          "Treat credit like cash: if you can't pay for it in full with cash today, don't put it on credit!",
          "Max out every credit card as fast as possible",
          "Hide credit card statements under your bed"
        ],
        correctIndex: 1,
        explanation: "Credit is a tool of convenience and score-building, not extra purchasing power.\nDisciplined spenders reap rewards, cashback, and top-tier credit without paying a cent of interest."
      }
    ]
  },
  {
    id: 4,
    title: "Introduction to Banking & Savings Growth",
    subtitle: "Checking vs Savings Accounts, Compound Interest Math, CDs & Inflation Defense",
    badge: "Module 4",
    themeColor: "#0984E3",
    icon: "🏦",
    comicIntro: {
      headline: "The Invisible Cash-Eating Monster: Inflation!",
      story: "Suppose your grandfather hid $1,000 cash under a floorboard in 1980. Back then, $1,000 could buy 5 brand-new mopeds or 2,000 cinema tickets! Today, you dig up that same $1,000 bill.",
      painPoint: "It is still crisp paper, but today it can barely buy 1 moped or 60 cinema tickets! The money lost 80% of its real purchasing power without leaving the room!",
      breakthrough: "That cash-eating monster is **INFLATION**. To beat inflation, savvy students use **High-Yield Savings Accounts (HYSA)**, Certificates of Deposit (CDs), and compound interest engines where the bank pays you to store money!",
      realLifeExample: "A standard checking account pays 0.01% interest (almost nothing). A High-Yield Savings Account (HYSA) pays 4.5% to 5.0% APY—turning a $1,000 deposit into $1,050 completely hands-free every single year!"
    },
    illustrations: [
      { emoji: "🧰 ➔ 💵", label: "Checking: Everyday Flow", bg: "rgba(9, 132, 227, 0.15)" },
      { emoji: "📈 ➔ 🏦", label: "HYSA: 4-5% APY Growth", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "👾 ➔ 📉", label: "Inflation: 3% Silent Tax", bg: "rgba(255, 118, 117, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: The Rule of 72 & Compound Interest Explained with Pizza Slices",
      duration: "3:35 min",
      summary: "Learn the mental math trick used by Wall Street bankers to calculate exactly how many years it takes for your bank balance to double!"
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary purpose of a 'Checking Account'?",
        options: [
          "Long-term retirement investing for 40 years",
          "Everyday cash transactions: bill payments, debit card spending, and direct deposits",
          "Earning the highest possible interest rate in the financial industry",
          "Storing physical gold bars"
        ],
        correctIndex: 1,
        explanation: "Checking accounts are designed for high transactional liquidity.\nThey allow seamless daily debit card swipes, ATM withdrawals, and bill payments."
      },
      {
        id: 2,
        question: "How does a High-Yield Savings Account (HYSA) differ from a traditional brick-and-mortar savings account?",
        options: [
          "Traditional banks often pay 0.01% APY, while HYSAs offer 4% to 5% APY because online banks have lower branch overhead",
          "HYSAs are illegal in the United States and Europe",
          "HYSAs never allow you to withdraw your money",
          "Traditional savings accounts double your money every month"
        ],
        correctIndex: 0,
        explanation: "Online banks don't have expensive physical branches on every street corner.\nThey pass those massive real estate savings directly to depositors through 400x higher interest!"
      },
      {
        id: 3,
        question: "What is 'FDIC Insurance' (or equivalent sovereign deposit guarantee)?",
        options: [
          "A guarantee that your bank account balance will double every Friday",
          "Government insurance protecting customer bank deposits up to $250,000 if the bank fails",
          "A tax applied to teen debit cards",
          "A fee charged when you lose your card"
        ],
        correctIndex: 1,
        explanation: "FDIC insurance guarantees that even if your bank goes bankrupt,\nthe government reimburses your full balance up to $250,000. It makes bank deposits risk-free."
      },
      {
        id: 4,
        question: "What is the 'Rule of 72' in finance?",
        options: [
          "You must retire at age 72",
          "A formula (72 / Interest Rate) that estimates how many years it takes an investment to double",
          "The maximum number of checks you can write per year",
          "The number of hours you should study finance each week"
        ],
        correctIndex: 1,
        explanation: "Divide 72 by your annual interest rate to find doubling time!\nAt an 8% return: 72 / 8 = 9 years to double your capital without adding a single new penny!"
      },
      {
        id: 5,
        question: "What is a 'Certificate of Deposit' (CD)?",
        options: [
          "A music album sold in a store",
          "A savings agreement where you lock up funds for a fixed time (e.g. 1 year) in exchange for a higher fixed interest rate",
          "A diploma awarded by a business university",
          "A digital cryptocurrency token"
        ],
        correctIndex: 1,
        explanation: "A CD locks your money for a specified period (6 months to 5 years).\nIn exchange for not withdrawing early, the bank pays you a guaranteed, higher interest rate."
      },
      {
        id: 6,
        question: "Why is keeping all your long-term savings in physical paper cash inside your bedroom dangerous?",
        options: [
          "Paper money naturally dissolves after 5 years",
          "Inflation relentlessly erodes its real value, plus there is risk of theft or fire with zero insurance",
          "The police will confiscate paper cash over $50",
          "Paper money attracts lightning"
        ],
        correctIndex: 1,
        explanation: "Cash in a mattress earns 0.00% while prices rise at 3% or more annually.\nOver 20 years, inflation robs almost half of your cash's real buying power."
      },
      {
        id: 7,
        question: "What does APY stand for in banking terms?",
        options: [
          "Annual Percentage Yield (reflects the real return including compounding interest)",
          "All Profit Yearly",
          "Automatic Payment Yield",
          "Approved Personal Year"
        ],
        correctIndex: 0,
        explanation: "APY takes into account the compounding frequency of interest (daily or monthly).\nIt gives the true, exact percentage gain your account balance will generate over a full year."
      },
      {
        id: 8,
        question: "What is an 'Overdraft Fee' and how do you avoid it?",
        options: [
          "A free cash bonus awarded by the bank",
          "A penalty (often $35) charged when you spend more money than is in your checking account; avoided by turning off overdraft protection or monitoring balance",
          "A fee for using an ATM in the rain",
          "A fee charged for having too much money in savings"
        ],
        correctIndex: 1,
        explanation: "An overdraft happens when a purchase dips your checking balance below $0.\nOpting out of overdraft coverage forces the transaction to decline safely with zero fee."
      },
      {
        id: 9,
        question: "What does 'Liquidity' mean when evaluating financial accounts?",
        options: [
          "How easily and quickly an asset can be converted into spendable cash without losing value",
          "Whether the bank building has running water",
          "How many drinks you can buy with your debit card",
          "The total tax rate of your state"
        ],
        correctIndex: 0,
        explanation: "Cash in checking is highly liquid (usable instantly).\nReal estate or multi-year CDs have low liquidity because accessing cash takes time or penalties."
      },
      {
        id: 10,
        question: "How should a teenager organize their bank accounts for optimal financial growth?",
        options: [
          "Have only one checking account and spend everything",
          "Maintain a Checking Account for daily spending + an FDIC-insured High-Yield Savings Account (HYSA) for emergency cushion and future goals",
          "Keep money in five different crypto exchanges",
          "Never open a bank account"
        ],
        correctIndex: 1,
        explanation: "Separating spending cash (Checking) from goal funds (HYSA) removes temptation.\nIt lets your emergency reserve earn 4-5% interest while keeping daily budget clean."
      }
    ]
  },
  {
    id: 5,
    title: "The Power of Investing & Future Planning",
    subtitle: "Stock Market, Index Funds, Compound Dividends, Risk Profiles & Wealth Autonomy",
    badge: "Module 5",
    themeColor: "#FFA502",
    icon: "🚀",
    comicIntro: {
      headline: "The Tale of Two 16-Year-Olds: Emma vs. Tyler!",
      story: "Emma starts investing just **$100 a month** at age 16 into a low-cost S&P 500 Index Fund (averaging ~10% historical annualized returns). She stops investing new money at age 26 (after investing only $12,000 total) and lets it sit until retirement.",
      painPoint: "Tyler waits until age 26 to start, but invests $100 EVERY SINGLE MONTH without stopping for 35 straight years until age 61 (investing $42,000 total)!",
      breakthrough: "Who has more money at age 65? **Emma wins with over $1,250,000, while Tyler has only $380,000!** 🤯 Even though Tyler deposited 3.5x MORE cash, Emma's 10-year early start gave her capital a decade head-start to compound!",
      realLifeExample: "Investing is not gambling on random hype memes. It is owning pieces of the greatest companies on Earth (Apple, Microsoft, Nike, Alphabet) that solve human problems and generate profits every second!"
    },
    illustrations: [
      { emoji: "🌱 ➔ ⏳", label: "Early Start Advantage", bg: "rgba(255, 165, 2, 0.15)" },
      { emoji: "📊 ➔ 🌐", label: "Broad Index Funds (S&P 500)", bg: "rgba(0, 184, 148, 0.15)" },
      { emoji: "💎 ➔ 👑", label: "Financial Independence", bg: "rgba(108, 92, 231, 0.15)" }
    ],
    videoInfo: {
      title: "Watch: How an Index Fund Works: The S&P 500 in 4 Minutes",
      duration: "4:20 min",
      summary: "Understand why billionaire legendary investor Warren Buffett instructs normal people to invest in diversified broad market index funds instead of trying to pick single winning stocks."
    },
    quiz: [
      {
        id: 1,
        question: "What is an 'Index Fund' (such as an S&P 500 fund)?",
        options: [
          "A lottery ticket issued by Wall Street",
          "A basket of hundreds of top companies bundled together, allowing you to own a slice of the entire economy with one investment",
          "A loan given to a single failing startup",
          "An illegal bank scheme"
        ],
        correctIndex: 1,
        explanation: "An index fund automatically tracks an entire market index (like the 500 biggest US firms).\nIt gives instant diversification, rock-bottom fees, and reliable historical growth."
      },
      {
        id: 2,
        question: "Why is trying to 'Day Trade' or pick individual single stocks risky for most beginners?",
        options: [
          "Over 90% of active day traders lose money against institutional computer algorithms and broad market averages",
          "Stock trading is only allowed during presidential elections",
          "Trading apps ban users who make money",
          "Individual stocks can never go down"
        ],
        correctIndex: 0,
        explanation: "Day trading involves emotional gambling and high trading commissions.\nConsistent, passive index fund investing consistently beats professional fund managers over decades."
      },
      {
        id: 3,
        question: "What is a 'Dividend' paid by established corporations to shareholders?",
        options: [
          "A penalty fee charged to stock owners",
          "A cash share of company profits paid directly to investors simply for holding the stock",
          "A paper certificate mailed once a decade",
          "A coupon for free company merchandise"
        ],
        correctIndex: 1,
        explanation: "Profitable companies distribute excess profits back to shareholders as dividends.\nReinvesting dividends back into more shares accelerates compounding exponentially!"
      },
      {
        id: 4,
        question: "What is 'Dollar-Cost Averaging' (DCA)?",
        options: [
          "Trying to predict the exact bottom of a market crash",
          "Investing a fixed dollar amount at regular intervals (e.g. $50 every month) regardless of market ups and downs",
          "Only buying stocks priced below $1.00",
          "Exchanging dollars for foreign currency every week"
        ],
        correctIndex: 1,
        explanation: "DCA takes emotion out of investing! When markets dip, your $50 buys more shares;\nwhen markets rise, you profit. You never need to stress about 'timing the market'."
      },
      {
        id: 5,
        question: "Historically, what has been the long-term average annual return of the broad US stock market (before inflation)?",
        options: ["Around 1% to 2%", "Roughly 8% to 10% per year over 30+ year horizons", "Exactly 50% every single year", "0%"],
        correctIndex: 1,
        explanation: "Over rolling 20-30 year periods, the broad stock market averages around 10% gross return.\nWhile individual years swing wildly (-20% to +30%), patience produces phenomenal long-term compounding."
      },
      {
        id: 6,
        question: "What is a Roth IRA (or equivalent tax-advantaged teen custodial account)?",
        options: [
          "A special credit card for high school seniors",
          "A retirement investment account funded with after-tax money that grows and can be withdrawn 100% TAX-FREE in the future",
          "A government fine for earning income",
          "A bank account with zero security"
        ],
        correctIndex: 1,
        explanation: "A Roth IRA is the ultimate wealth builder for teens with earned income!\nAll capital gains, dividends, and compound growth over 40 years are completely exempt from taxes."
      },
      {
        id: 7,
        question: "What is the relationship between 'Risk' and 'Potential Return' in investing?",
        options: [
          "Higher potential returns generally require taking on higher risk and volatility",
          "Zero risk investments always produce the highest returns",
          "Risk and return are completely unrelated",
          "Risk only exists in real estate"
        ],
        correctIndex: 0,
        explanation: "Safe assets (like government treasury bills) offer lower guaranteed returns.\nEquities (stocks) carry short-term price volatility in exchange for substantially higher long-term gains."
      },
      {
        id: 8,
        question: "What is 'Time in the Market beats Timing the Market'?",
        options: [
          "You must trade stocks at 9:30 AM sharp",
          "Staying invested long-term yields vastly superior wealth compared to attempting to jump in and out guessing crashes",
          "You should check stock prices every 5 minutes",
          "Investing only works on weekends"
        ],
        correctIndex: 1,
        explanation: "Missing just the 10 best trading days across a 20-year period cuts your returns in half!\nPatient, uninterrupted compounding in broad funds eliminates the stress of guesswork."
      },
      {
        id: 9,
        question: "What is the concept of 'Financial Independence' (FIRE)?",
        options: [
          "Never working a single day in your entire life as a teenager",
          "Reaching a point where your investment portfolio generates enough passive income to cover all your living expenses indefinitely",
          "Burning all your paper cash in a fireplace",
          "Depending entirely on government handouts"
        ],
        correctIndex: 1,
        explanation: "Financial Independence means work becomes an option, not a survival requirement!\nYour invested capital produces dividends and growth that fund your life and passions."
      },
      {
        id: 10,
        question: "What is the greatest asset you possess right now as an 8th to 10th grade student?",
        options: [
          "A luxury car",
          "TIME: Having 40 to 50 years for compound interest to multiply small consistent investments into millions",
          "A million dollars in cash",
          "A finance degree from Harvard"
        ],
        correctIndex: 1,
        explanation: "Billionaires would trade all their fortunes to have your youth and time horizon!\nStarting to learn, save, and invest even $20 a month right now puts you decades ahead of 99% of people."
      }
    ]
  }
];
