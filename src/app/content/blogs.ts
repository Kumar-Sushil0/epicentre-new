export interface BlogPost {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  href: string;
}

export interface BlogCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  stories: BlogPost[];
}

export const blogCategories: BlogCategory[] = [
  {
    id: "silence",
    title: "Silence & Attention",
    icon: "volume_off",
    description: "You Don't Have a Thinking Problem\n\nYou have an intrusion problem.",
    stories: [
      {
        title: "You Don't Have a Thinking Problem",
        description: "You have an intrusion problem.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/1.png",
        imageAlt: "Thinking clarity",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/thinking-problem",
      },
      {
        title: "You Don't Need Discipline",
        description: "You need disgust.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/2.png",
        imageAlt: "Raising standards",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/need-disgust",
      },
      {
        title: "You Can't Sit With a Thought",
        description: "You have an interruption problem.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/3.png",
        imageAlt: "Sitting with a thought",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/cant-sit-with-thought",
      },
    ],
  },
  {
    id: "identity",
    title: "Identity & Sovereignty",
    icon: "person",
    description: "What Remains When Your Roles Pause?\n\nOn suspending external identity.",
    stories: [
      {
        title: "You Don't Actually Know What You Want",
        description: "You're crowded with voices, not options.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/4.png",
        imageAlt: "Discovering authentic desire",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/dont-actually-know-what-you-want",
      },
      {
        title: "You're Always Performing (Even When You're Alone)",
        description: "Performance is internal, not public.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/4.png",
        imageAlt: "Internal performance",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/always-performing-alone",
      },
      {
        title: "You Keep Breaking Promises to Yourself",
        description: "You have a credibility problem with yourself.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/5.png",
        imageAlt: "Self-trust and promises",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/breaking-promises-to-yourself",
      },
    ],
  },
  {
    id: "environment",
    title: "Environment & Structure",
    icon: "architecture",
    description: "Why Environment Shapes Behavior More Than Intention\n\nArchitecture > motivation.",
    stories: [
      {
        title: "You Keep Adding So You Don't Have to Decide",
        description: "You struggle with decision, not clarity.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/6.png",
        imageAlt: "Decision through subtraction",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/adding-so-you-dont-decide",
      },
      {
        title: "You Keep Saying Yes So You Don't Have to Commit",
        description: "You confuse openness with freedom.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/7.png",
        imageAlt: "Commitment versus open loops",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/saying-yes-so-you-dont-commit",
      },
      {
        title: "You Keep Updating a Life You Never Actually Chose",
        description: "Most identities are accumulated, not authored.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/8.png",
        imageAlt: "Accumulated identity",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/updating-life-never-chose",
      },
    ],
  },
  {
    id: "decision",
    title: "Decision & Clarity",
    icon: "psychology",
    description: "Clarity Is Subtraction, Not Addition\n\nWhy more input rarely solves uncertainty.",
    stories: [
      {
        title: "You Keep Letting Small Things Decide Your Life",
        description: "Attention compounds into direction.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/9.png",
        imageAlt: "Protecting attention",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/small-things-decide-your-life",
      },
      {
        title: "You Keep Blaming Yourself for What Your Environment Is Doing",
        description: "Behavior follows setup more than intention.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/10.png",
        imageAlt: "Environment versus willpower",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/blaming-yourself-for-environment",
      },
      {
        title: "You Keep Looking for Meaning Before You've Seen Enough",
        description: "You rush interpretation before observation matures.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/11.png",
        imageAlt: "Meaning through observation",
        author: "The Silent Club",
        date: "2026",
        href: "/blogs/meaning-before-seen-enough",
      },
    ],
  },
];
