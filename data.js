const LESSONS = [
  {
    n: 0,
    short: "Canva account",
    title: "Create Your Canva Education Account",
    project: "Required first step",
    minutes: 30,
    focus: "Teachers and students get free Canva Education access.",
    goals: [
      "Teachers verify a free Canva Education account and create a class.",
      "Students join the class with school email.",
      "Everyone can use Education (premium) tools."
    ],
    teacher: [
      "Do this before the first class if you can. Verification can take up to 48 hours.",
      "In Canada, a teaching license is usually enough.",
      "Create a class and generate an invite link or code for day one.",
      "Students under 13 need parental consent."
    ],
    studentSteps: [
      ["Get the invite", "Your teacher will give you a link, class code, or email invite."],
      ["Open Canva", "Click the link or go to canva.com and choose Sign up / Log in."],
      ["Use school email", "Sign in with your school email, not a personal Gmail."],
      ["Join the class", "Enter the class code or accept the invitation."],
      ["Check Education access", "You should be able to use premium elements for free. If not, tell your teacher."]
    ],
    teacherSteps: [
      ["Go to the Education page", "Open canva.com/edu-signup or education.canva.com."],
      ["Sign up or log in", "Use your school email. You can also use Google, Microsoft, or Clever."],
      ["Select Teacher", "Choose Teacher and your school type."],
      ["Enter school details", "Name, country (Canada), school name, and website if asked."],
      ["Verify", "If your school email is recognized you may get instant access. If not, upload your teaching license."],
      ["Create a class", "Name it clearly, for example Grade 6 Tech – Canva 2026."],
      ["Invite students", "Generate a link or class code and display it on the board."]
    ],
    challenge: "Help one classmate log in successfully."
  },
  {
    n: 1,
    short: "Welcome to Canva",
    title: "Welcome to Canva World!",
    project: "All About Me name card",
    minutes: 30,
    focus: "Log in, make a custom-size design, add text and an icon, then download a PNG.",
    goals: ["Navigate the Canva interface.", "Create an 800 × 600 design.", "Download as PNG or share a link."],
    teacher: [
      "Project the homepage and point out Create a design, Elements, and Text.",
      "Walk through custom size once as a class.",
      "Celebrate first successful downloads."
    ],
    studentSteps: [
      ["Open Canva", "Go to canva.com and log in with your school email."],
      ["Create a design", "Create a design → Custom size → 800 × 600 pixels."],
      ["Add your name", "Text → Add a heading. Make your name large. Change font and color in the top toolbar."],
      ["Add an icon", "Elements → search something that represents you. Drag, resize, place near your name."],
      ["Add a fun fact", "Add smaller text: One fun fact about me: …"],
      ["Download", "Share → Download → PNG, or share the link with your teacher."]
    ],
    challenge: "Make a secret-code version using emojis in place of some letters."
  },
  {
    n: 2,
    short: "Elements & shapes",
    title: "Design Superpowers – Elements & Shapes",
    project: "Hobby mood board",
    minutes: 30,
    focus: "Use gradients, shapes, icons, shadows, and grouping.",
    goals: ["Find gradients, shapes, and icons.", "Create depth with overlap and shadow.", "Group objects."],
    teacher: ["Demonstrate a flat icon vs a layered shadowed icon.", "Show Shift-resize and the color picker."],
    studentSteps: [
      ["Create the canvas", "Poster (A4) or a square 1080 × 1080."],
      ["Background", "Elements → gradient. Stretch it to fill the page."],
      ["Shapes", "Add circles, squares, or lines and change their colors."],
      ["Hobby icons", "Add 5–8 icons. Overlap some of them."],
      ["3D shadow", "Duplicate an icon (Ctrl+D / Cmd+D), offset it, darken it, send it behind."],
      ["Group and title", "Select several items → Group. Add the title My [Hobby] Mood Board."]
    ],
    challenge: "Mystery mood board with zero text. Classmates guess the hobby."
  },
  {
    n: 3,
    short: "Typography",
    title: "Words That Pop!",
    project: "Motivational quote poster",
    minutes: 30,
    focus: "Pair fonts, use one strong effect, and make text readable.",
    goals: ["Use 2–3 fonts maximum.", "Apply one text effect.", "Put a shape behind text for contrast."],
    teacher: ["Show font soup vs a clean pairing.", "Teach the 2–3 font rule explicitly."],
    studentSteps: [
      ["Start a poster", "Create a design → Poster."],
      ["Type the quote", "Make the most important word huge (100+ pt)."],
      ["Pair fonts", "One bold display font + one simple supporting font."],
      ["Effects", "Select text → Effects. Try Shadow, Lift, or Curve — one strong effect only."],
      ["Background block", "Add a shape behind the text so it pops."]
    ],
    challenge: "Make a loud version and a quiet version of the same quote."
  },
  {
    n: 4,
    short: "Photo magic",
    title: "Photo Magic",
    project: "Dream vacation collage",
    minutes: 30,
    focus: "Upload photos, remove backgrounds, layer images, and use transparency.",
    goals: ["Use Photos and Uploads.", "Use Background Remover.", "Control layers and transparency."],
    teacher: ["Background Remover is the wow moment. Demo it live.", "Remind students to use their own photos or Canva stock."],
    studentSteps: [
      ["Canvas", "Instagram Post 1080 × 1080 or a Collage template."],
      ["Add photos", "Upload one of your own and search stock photos."],
      ["Edit image", "Crop, Filters, and Background Remover."],
      ["Layer", "Overlap images. Right-click → Send to back / Bring to front."],
      ["Transparency", "Lower transparency on one image for a dreamy look."],
      ["Finish", "Add a short title such as My Dream Spot."]
    ],
    challenge: "Make it surreal: put yourself in space or onto a funny animal."
  },
  {
    n: 5,
    short: "Color theory",
    title: "Color Theory for Kids",
    project: "Two mood versions of a quote poster",
    minutes: 30,
    focus: "Warm vs cool color families and consistent schemes.",
    goals: ["Apply warm and cool palettes.", "Keep a scheme consistent.", "Name the feeling each version creates."],
    teacher: ["Students should File → Make a copy of their Lesson 3 poster twice."],
    studentSteps: [
      ["Make copies", "Open your quote poster → File → Make a copy. Do this twice."],
      ["Color wheel", "Add a simple color wheel from Elements as a reference."],
      ["Happy version", "Use only warm colors: red, orange, yellow, pink."],
      ["Calm version", "Use only cool colors: blue, green, purple, mint."],
      ["Label", "Add a small note: This version feels…"]
    ],
    challenge: "One-color mystery version using only shades of a single color."
  },
  {
    n: 6,
    short: "Personal logo",
    title: "Brand Yourself – Logo Design",
    project: "Personal logo",
    minutes: 30,
    focus: "Simple logo with initials, one symbol, few colors, transparent PNG.",
    goals: ["Design a simple personal logo.", "Use 2–3 colors and 1–2 fonts.", "Export with a transparent background."],
    teacher: ["Show simple logos that still work when tiny. This logo gets reused later."],
    studentSteps: [
      ["Canvas", "Logo template or custom 500 × 500."],
      ["Initials", "Big first and last initials in a bold font."],
      ["Symbol", "One simple icon that represents you."],
      ["Constraints", "2–3 colors and 1–2 fonts only."],
      ["Download", "PNG with Transparent background checked."]
    ],
    challenge: "Design a logo for an imaginary creature using the same rules."
  },
  {
    n: 7,
    short: "Layout & grids",
    title: "Layout Secrets",
    project: "Instagram-style event post",
    minutes: 30,
    focus: "Rule of thirds, hierarchy, and white space.",
    goals: ["Use rulers and guides.", "Build title → details → call-to-action hierarchy.", "Leave breathing room."],
    teacher: ["Turn on guides on the projector. Praise designs that breathe."],
    studentSteps: [
      ["Canvas", "Instagram Post 1080 × 1080."],
      ["Guides", "View → Show rulers & guides."],
      ["Background", "Photo or solid color."],
      ["Rule of thirds", "Place the main element off-center."],
      ["Hierarchy", "Big title top, details middle, call-to-action bottom."],
      ["Logo", "Put your personal logo small in a corner."]
    ],
    challenge: "Make a worst possible layout on purpose and explain why it fails."
  },
  {
    n: 8,
    short: "Infographic",
    title: "Infographic Power",
    project: "A Day in the Life infographic",
    minutes: 30,
    focus: "Charts, icons, and short text that tell a story.",
    goals: ["Use a tall canvas.", "Add a chart.", "Keep each point to 5–8 words."],
    teacher: ["Show a plain list vs a polished infographic."],
    studentSteps: [
      ["Tall canvas", "Infographic or custom 800 × 2000."],
      ["Title", "My Perfect School Day."],
      ["Chart", "Elements → Charts. Edit the numbers for your day."],
      ["Icons and flow", "Add icons and arrows from morning to night."],
      ["Short text", "5–8 words max per point."]
    ],
    challenge: "Future Me version: your perfect day at age 25."
  },
  {
    n: 9,
    short: "Event poster",
    title: "Big & Bold – Event Poster",
    project: "Fake school event poster",
    minutes: 30,
    focus: "Large-format hierarchy for a poster that reads from across the room.",
    goals: ["Huge title, medium details, strong call-to-action.", "Limit the palette to 2–3 colors."],
    teacher: ["Show real event posters and point to hierarchy with arrows."],
    studentSteps: [
      ["Large canvas", "Poster A3 or another large size."],
      ["Huge title", "Top third of the page."],
      ["Details", "Date, time, and place."],
      ["Call-to-action", "Join us! or similar button."],
      ["Image and logo", "One strong image plus your logo."]
    ],
    challenge: "Design a ridiculous event that still looks believable."
  },
  {
    n: 10,
    short: "Presentation",
    title: "Presentation Skills with Canva",
    project: "4–6 slide mini-presentation",
    minutes: 30,
    focus: "Big visuals, little text, simple animation, short talk.",
    goals: ["Avoid walls of text.", "Use simple animation.", "Present to a partner."],
    teacher: ["Show a bad text-heavy slide next to a clean one."],
    studentSteps: [
      ["Presentation", "Create a design → Presentation 16:9."],
      ["Rule", "Big visuals + minimal text."],
      ["Slide 1", "Title plus a strong photo."],
      ["More slides", "Pictures or icons plus short bullets."],
      ["Animate", "One simple transition."],
      ["Practice", "Present for 60–90 seconds."]
    ],
    challenge: "Add one surprise reveal slide at the end."
  },
  {
    n: 11,
    short: "Social pack",
    title: "Social Media Content Pack",
    project: "3-piece branded set",
    minutes: 30,
    focus: "Same logo, colors, and fonts across three formats.",
    goals: ["Design square, story, and thank-you pieces.", "Keep branding consistent."],
    teacher: ["Students who saved a transparent logo will move faster."],
    studentSteps: [
      ["Brand rules", "Write down your logo colors and fonts."],
      ["Square post", "1080 × 1080 announcement."],
      ["Story", "1080 × 1920 vertical piece."],
      ["Thank-you", "A friendly closing graphic."],
      ["Logo", "Place the logo in the same corner on every piece."]
    ],
    challenge: "Add a 2–3 frame carousel."
  },
  {
    n: 12,
    short: "Portfolio",
    title: "Final Showcase + Portfolio",
    project: "Multi-page portfolio",
    minutes: 30,
    focus: "Curate best work and reflect on growth.",
    goals: ["Choose 4–6 strongest designs.", "Write a short reflection.", "Share or present."],
    teacher: ["This is celebration day. Offer a 30-second show and tell."],
    studentSteps: [
      ["New file", "Presentation or multi-page document."],
      ["Cover", "My Canva Portfolio – [Your Name] plus your logo."],
      ["Best work", "4–6 designs, one per page."],
      ["Reflection", "My favorite is… because… One thing I want to improve…"],
      ["Share", "Send the link or present for 30 seconds."]
    ],
    challenge: "Pick one piece you would hang in the hallway and say why."
  }
];

const PROJECTS = [
  {
    n: 1,
    due: "After Lesson 2",
    title: "All About Me Name Card",
    blurb: "An 800 × 600 name card with a large name, one icon, and a fun fact.",
    must: ["Full name as a large heading", "At least one relevant icon", "One fun fact", "PNG download"],
    rubric: ["4 — Clear hierarchy, creative icon, neat layout", "3 — All required elements, readable", "2 — Missing one element or hard to read", "1 — Incomplete"]
  },
  {
    n: 2,
    due: "After Lesson 6",
    title: "Personal Logo",
    blurb: "A simple logo using initials and one symbol. Reused later in the course.",
    must: ["Initials as primary text", "One clear symbol", "2–3 colors and 1–2 fonts", "Transparent PNG"],
    rubric: ["4 — Clean, works small, memorable", "3 — Constraints followed", "2 — Too many colors or cluttered", "1 — Missing transparency"]
  },
  {
    n: 3,
    due: "After Lesson 8",
    title: "A Day in the Life Infographic",
    blurb: "A tall infographic of a school day using icons, a chart, and short text.",
    must: ["Clear title", "One pie or bar chart", "Icons for sections", "Timeline or flow", "5–8 words per point"],
    rubric: ["4 — Easy to understand in 10 seconds", "3 — All required elements", "2 — Missing chart or weak flow", "1 — Mostly a text list"]
  },
  {
    n: 4,
    due: "After Lesson 11",
    title: "Branded Social Media Pack",
    blurb: "Three matching pieces that use the same logo, colors, and fonts.",
    must: ["Square, story, and third graphic", "Logo on every piece", "Same colors and fonts", "Clear purpose for each"],
    rubric: ["4 — Perfect consistency", "3 — Strong consistency", "2 — Inconsistent branding", "1 — Pieces feel unrelated"]
  }
];
