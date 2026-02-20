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
    description: "You Don't Lack Answers. You Lack Attention.\n\nWhy clarity is not intelligence — it's continuity.",
    stories: [
      {
        title: "You Don't Lack Answers. You Lack Attention.",
        description: "Why clarity is not intelligence — it's continuity.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/1.png",
        imageAlt: "Attention clarity",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/lack-attention",
      },
      {
        title: "Why Stimulation Is the Default Setting of Modern Life",
        description: "How engineered noise fragments thinking.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/2.png",
        imageAlt: "Modern stimulation",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/stimulation-default",
      },
      {
        title: "Silence Is a Design Tool, Not a Spiritual Practice",
        description: "Reframing silence as infrastructure.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/3.png",
        imageAlt: "Silence as design",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/silence-design-tool",
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
        title: "What Remains When Your Roles Pause?",
        description: "On suspending external identity.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/4.png",
        imageAlt: "Identity pause",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/roles-pause",
      },
      {
        title: "Identity Is Usually Inherited. It Can Be Designed.",
        description: "Introducing authorship without preaching.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/5.png",
        imageAlt: "Designed identity",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/identity-designed",
      },
      {
        title: "Authority Is Not Borrowed. It Is Authored.",
        description: "The psychological basis of sovereignty.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/6.png",
        imageAlt: "Authored authority",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/authority-authored",
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
        title: "Why Environment Shapes Behavior More Than Intention",
        description: "Architecture > motivation.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/7.png",
        imageAlt: "Environment shapes behavior",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/environment-shapes-behavior",
      },
      {
        title: "Why Fewer Choices Create More Clarity",
        description: "Decision fatigue & structural reduction.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/8.png",
        imageAlt: "Fewer choices",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/fewer-choices-clarity",
      },
      {
        title: "Agreement Is Stronger Than Enforcement",
        description: "Why the Club model works.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/9.png",
        imageAlt: "Agreement over enforcement",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/agreement-enforcement",
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
        title: "Clarity Is Subtraction, Not Addition",
        description: "Why more input rarely solves uncertainty.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/10.png",
        imageAlt: "Clarity through subtraction",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/clarity-subtraction",
      },
      {
        title: "Why Most Big Decisions Are Delayed, Not Difficult",
        description: "On avoidance vs ambiguity.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/11.png",
        imageAlt: "Delayed decisions",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/decisions-delayed",
      },
      {
        title: "Silence Does Not Change You. It Reveals You.",
        description: "A final integrative piece.",
        image: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/12.png",
        imageAlt: "Silence reveals",
        author: "The Silent Club",
        date: "2024",
        href: "/blogs/silence-reveals",
      },
    ],
  },
];
