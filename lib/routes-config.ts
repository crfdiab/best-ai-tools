// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
        items: [
          { title: "Layouts", href: "/layouts" },
          { title: "Integrations", href: "/integrations" },
          {
            title: "Manual",
            href: "/manual",
            items: [
              { title: "JavaScript", href: "/javascript" },
              { title: "Typescript", href: "/typescript" },
              { title: "Golang", href: "/golang" },
            ],
          },
        ],
      },
      { title: "Changelog", href: "/changelog" },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    title: "AI Tools",
    href: "",
    noLink: undefined,
    items: [
     {title: "AI Agent Tools",href:"/ai-agents"},
     {title: "AI Chatbot Assistant Tools",href:"/ai-chatbot-assistants"},
     {title: "AI Detection Tools",href:"/ai-detection"},
     {title: "AI Art Generator", href: "/ai-art-generation"},
     {title: "AI Code Generation", href: "/ai-code-generation"},
     {title: "AI Tools For Audio", href: "/audio"},
     {title: "AI Tools For Automation", href: "/ai-automation"},
     {title: "AI Tools For Avatar Generation", href: "/ai-avatar-generation"},
    ],
  },
  {
    title: "Server Actions",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "getSession", href: "/getSession" },
      { title: "getToken", href: "/getToken" },
      { title: "getRole", href: "/getRole" },
    ],
  },
  {
    title: "React Hooks",
    href: "/react-hooks",
    noLink: true,
    items: [
      { title: "useSession", href: "/use-session" },
      { title: "useFetch", href: "/use-fetch" },
      { title: "useAuth", href: "/use-auth" },
      { title: "useProduct", href: "/use-product" },
      { title: "useOrder", href: "/use-order" },
      { title: "useCart", href: "/use-cart" },
      { title: "usePayment", href: "/use-payment" },
      { title: "useShipping", href: "/use-shipping" },
      { title: "useNotification", href: "/use-notification" },
      { title: "useReview", href: "/use-review" },
      { title: "useInventory", href: "/use-inventory" },
      { title: "useUser", href: "/use-user" },
      { title: "useSettings", href: "/use-settings" },
      { title: "useAnalytics", href: "/use-analytics" },
      { title: "useTheme", href: "/use-theme" },
      { title: "useRouter", href: "/use-router" },
      { title: "useData", href: "/use-data" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
