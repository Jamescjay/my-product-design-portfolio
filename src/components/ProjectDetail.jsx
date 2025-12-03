import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Project data
  const projectData = {
    pharmerp: {
      title: "PharmERP - Pharmacy Management System",
      subtitle:
        "Transforming pharmacy operations through role-based access, smart inventory management, and business intelligence designed for the Kenyan market",
      role: "End-to-End Product Designer",
      timeline: "3 Months",
      tools: "Figma, UserTesting, Miro",
      heroImage: "/assets/pharm.PNG",
      sections: [
        {
          type: "overview",
          title: "Overview",
          content:
            "PharmERP is a comprehensive pharmacy management system designed specifically for small to medium-sized pharmacies in Kenya. The system addresses critical challenges around inventory management, security, and operational efficiency while respecting local context like MPESA payments and unreliable internet connectivity.",
        },
        {
          type: "pain-points",
          title: "User Pain Points",
          userGroups: [
            {
              title: "Pharmacy Owner/Pharmacist Pain Points",
              pains: [
                {
                  category: "Inventory Management Nightmares",
                  items: [
                    '"I lose 50,000 KES monthly to expired medications"',
                    '"Stockouts during peak hours cost me customers"',
                    '"Manual stock takes take 2 days every month"',
                    '"No visibility into which products are profitable"',
                  ],
                },
                {
                  category: "Financial Control Issues",
                  items: [
                    '"Cashiers give unauthorized discounts to friends"',
                    '"Can\'t track daily profitability in real-time"',
                    '"Manual receipt books get lost or damaged"',
                    '"Supplier payments are always late due to paperwork"',
                  ],
                },
                {
                  category: "Staff Management Headaches",
                  items: [
                    '"No accountability for cash shortages"',
                    '"Different cashiers give different prices"',
                    "\"Can't monitor who's performing well\"",
                    '"Training new staff takes 2 weeks minimum"',
                  ],
                },
              ],
            },
            {
              title: "Cashier Pain Points",
              pains: [
                {
                  category: "Slow & Error-Prone Sales Process",
                  items: [
                    '"Manual calculation causes mistakes in change"',
                    '"Looking up prices takes too long"',
                    '"Customers get impatient during busy hours"',
                    '"Handwritten receipts are illegible"',
                  ],
                },
                {
                  category: "Limited Information Access",
                  items: [
                    '"Can\'t check if we have stock without asking manager"',
                    '"No customer history for repeat prescriptions"',
                    '"Don\'t know which discounts are allowed"',
                    '"Can\'t process refunds without approval"',
                  ],
                },
                {
                  category: "Stress & Accountability",
                  items: [
                    '"Cash drawer never balances at end of shift"',
                    '"Fear of making expensive mistakes"',
                    '"No way to prove I gave correct change"',
                    '"Customers argue about prices I can\'t control"',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "user-personas",
          title: "User Personas & Scenarios",
          personas: [
            {
              name: "Dr. Amina",
              role: "Pharmacy Owner",
              age: "45",
              background: [
                "Owns 1 pharmacy in urban area",
                "15 years experience",
                "3 staff members (2 cashiers, 1 assistant)",
                "Revenue: 500K KES/month",
              ],
              frustrations: [
                "I spend 3 hours daily on paperwork instead of with patients",
                "My cashier gave 40% discount without permission last week",
                "Lost 80,000 KES worth of expired antibiotics last quarter",
                "Can't leave the pharmacy because only I know the system",
              ],
              goals: [
                "Reduce medication waste by 70%",
                "Monitor business from anywhere",
                "Increase daily sales by 25%",
                "Have reliable staff who don't need constant supervision",
              ],
              quote:
                "For the first time in 15 years, I can take a weekend off without worrying.",
            },
            {
              name: "Brian",
              role: "Cashier",
              age: "26",
              background: [
                "Pharmacy diploma graduate",
                "2 years experience",
                "Works morning shifts (8 AM - 4 PM)",
                "Handles 50+ customers daily",
              ],
              frustrations: [
                "Customers get angry when I take time to calculate prices",
                "Doctor Amina blames me for stockouts I can't prevent",
                "The manual receipt book gets messy and confusing",
                "I can't help customers with prescription refills efficiently",
              ],
              goals: [
                "Process customers in under 2 minutes",
                "Reduce calculation errors to zero",
                "Have clear rules about discounts and refunds",
                "Build relationships with regular customers",
              ],
              quote:
                "The visual payment buttons are so much better! Now I can complete a sale in half the time.",
            },
          ],
        },
        {
          type: "market-opportunity",
          title: "Market Opportunity",
          stats: [
            { value: "3,000+", label: "Registered pharmacies" },
            { value: "300K-800K KES", label: "Average monthly revenue" },
            { value: "<20%", label: "Current software adoption" },
            { value: "2,000-5,000 KES", label: "Willingness to pay/month" },
          ],
          competitiveGap: [
            "Current solutions are too complex and expensive",
            "Most pharmacies still use paper/manual systems",
            "Mobile-first approach is missing",
            "Local payment integration (MPESA) is poor",
          ],
        },
        {
          type: "user-journeys",
          title: "User Journey Mapping",
          journeys: [
            {
              title: "Dr. Amina's Journey (Morning Routine)",
              steps: [
                {
                  time: "7:00 AM - Opens pharmacy",
                  pain: "Checks cash drawer manually",
                  solution:
                    "Account & finance with total income, total expenses, net profit and cash balance",
                },
                {
                  time: "→",
                  pain: "Reviews yesterday's sales from messy receipts",
                  solution: "Dashboard with overnight sales summary",
                },
                {
                  time: "→",
                  pain: "Checks expiring stock manually",
                  solution: "Automatic expiry alerts",
                },
                {
                  time: "→",
                  pain: "Creates mental to-do list for staff",
                  solution: "Digital task assignment system",
                },
              ],
            },
            {
              title: "Brian's Journey (Handling a Customer)",
              steps: [
                {
                  time: "Customer approaches counter",
                  pain: "Do you have XYZ medication?",
                  solution: "Instant search on tablet with stock status",
                },
                {
                  time: "→",
                  pain: "How much for these 3 items?",
                  solution: "Auto-calculation with breakdown",
                },
                {
                  time: "→",
                  pain: "I need a receipt for insurance",
                  solution:
                    "Professional digital receipt with pharmacy details",
                },
                {
                  time: "→",
                  pain: "Can I get a discount?",
                  solution:
                    "Pre-set discount rules, manager approval if needed",
                },
                {
                  time: "→",
                  pain: "When should I come for refill?",
                  solution: "Prescription tracking with SMS reminders",
                },
              ],
            },
          ],
        },
        {
          type: "information-architecture",
          title: "Information Architecture",
          structure: [
            {
              label: "AUTHENTICATION",
              children: [
                { label: "Role Selection (Owner/Cashier)" },
                { label: "PIN/Password Login" },
              ],
            },
            {
              label: "PHARMACY OWNER DASHBOARD",
              children: [
                {
                  label: "Daily Snapshot",
                  children: [
                    "Sales Today/Live",
                    "Top Selling Products",
                    "Expiring Stock Alerts",
                    "Staff Online",
                  ],
                },
                {
                  label: "Inventory Management",
                  children: [
                    "Stock Levels",
                    "Add/Edit Products",
                    "Expiry Tracking",
                    "Reorder Alerts",
                    "Stock Take Tools",
                  ],
                },
                {
                  label: "Sales & Transactions",
                  children: [
                    "All Sales History",
                    "Refund Approvals",
                    "Customer Database",
                    "Sales Reports",
                  ],
                },
                {
                  label: "Financial Management",
                  children: [
                    "Profit & Loss",
                    "Cash Flow",
                    "Supplier Payments",
                    "Tax Calculations",
                  ],
                },
                {
                  label: "Staff Management",
                  children: [
                    "Cashier Accounts",
                    "Shift Tracking",
                    "Performance Metrics",
                    "Access Permissions",
                  ],
                },
                {
                  label: "Settings",
                  children: [
                    "Pharmacy Details",
                    "Pricing Rules",
                    "Discount Settings",
                    "Backup/Restore",
                  ],
                },
              ],
            },
            {
              label: "CASHIER DASHBOARD",
              children: [
                {
                  label: "Quick POS Interface",
                  children: [
                    "Barcode Scanner",
                    "Product Search",
                    "Cart Management",
                    "Multiple Payments",
                  ],
                },
                {
                  label: "Customer Management",
                  children: [
                    "Customer Lookup",
                    "Prescription History",
                    "New Customer Add",
                  ],
                },
                {
                  label: "My Shift",
                  children: [
                    "Shift Opening",
                    "Cash Management",
                    "My Sales",
                    "Shift Closing",
                  ],
                },
                {
                  label: "Quick Tools",
                  children: [
                    "Stock Check",
                    "Price Check",
                    "Receipt Reprint",
                    "Basic Reports",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "ui-design-principles",
          title: "UI Design Principles",
          colors: [
            {
              name: "Blue - Trust & Professionalism",
              code: "#2563eb",
              purpose: "Primary brand color for trust and calm",
            },
            {
              name: "Green - Health & Safety",
              code: "#10b981",
              purpose: "For health-related actions and safety indicators",
            },
            {
              name: "White - Cleanliness & Medical",
              code: "#ffffff",
              purpose: "Background and clean medical interface",
            },
            {
              name: "Gray - Neutral Focus",
              code: "#f9fafb",
              purpose: "Background variations and content focus",
            },
          ],
          typography: [
            {
              name: "Inter Bold",
              size: "2.75rem",
              weight: "Bold (700)",
              purpose: "Main headers and section titles",
            },
            {
              name: "Inter Regular",
              size: "1rem",
              weight: "Regular (400)",
              purpose: "Body text and content reading",
            },
            {
              name: "Inter Medium",
              size: "0.9375rem",
              weight: "Medium (500)",
              purpose: "Labels and quick scanning",
            },
            {
              name: "Inter Semi-bold",
              size: "1.125rem",
              weight: "Semi-bold (600)",
              purpose: "Financial numbers and important values",
            },
          ],
          screens: [
            {
              title: "Pharmacy Owner Dashboard",
              layout: `┌─────────────────────────────────────┐
│ Header: Pharmacy Name + Quick Stats │
├─────────────────────────────────────┤
│ Left: Navigation Menu (Collapsible) │
│                                     │
├─────────────────────────────────────┤
│ Main:                                │
│ ┌─────────┐ ┌─────────┐            │
│ │Sales    │ │Stock    │            │
│ │Graph    │ │Alerts   │            │
│ └─────────┘ └─────────┘            │
│ ┌────────────────────────────┐     │
│ │Recent Transactions Table   │     │
│ └────────────────────────────┘     │
└─────────────────────────────────────┘`,
            },
            {
              title: "Cashier POS Interface",
              layout: `┌─────────────────────────────────────┐
│ Header: Shift Info + Quick Actions  │
├─────────────────────────────────────┤
│ Left (60%):                         │
│ ┌─────────────────────────────────┐ │
│ │Product Search/Scanner Input     │ │
│ ├─────────────────────────────────┤ │
│ │Shopping Cart                    │ │
│ │ Item 1        Qty 2   500 KES  │ │
│ │ Item 2        Qty 1   300 KES  │ │
│ │─────────────────────────────────│ │
│ │Subtotal:             800 KES    │ │
│ │Discount:              80 KES    │ │
│ │TOTAL:                720 KES    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Right (40%):                        │
│ ┌─────────────────────────────────┐ │
│ │Payment Methods                  │ │
│ │ [Cash]   [MPESA]   [Card]      │ │
│ │                                 │ │
│ │Customer Details                 │ │
│ │ [Search Customer]               │ │
│ │ [New Customer]                  │ │
│ │                                 │ │
│ │Action Buttons                   │ │
│ │ [Complete Sale] [Print] [Hold] │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘`,
            },
          ],
        },
        {
          type: "prototype-testing",
          title: "Prototyping & Testing",
          scenarios: [
            {
              title: "Cashier Processes a Sale",
              description:
                "Customer orders/requests 3 items on the counter, asks for price check on one item, requests receipt for insurance, and pays with MPESA.",
              metrics: [
                "Time to complete sale (target: <2 minutes)",
                "Number of clicks/actions",
                "Error rate in calculation",
                "User confidence rating",
              ],
            },
            {
              title: "Owner Reviews Daily Reports",
              description:
                "End of day sales review, check expiring medications, approve pending refunds, and generate financial summary.",
              metrics: [
                "Time to get required information",
                "Ease of finding specific data",
                "Accuracy of information presented",
                "Decision-making confidence",
              ],
            },
          ],
        },
        {
          type: "design-system",
          title: "Design System Components",
          components: [
            {
              name: "Role-Based Layout Component",
              code: `<PharmERPLayout role="owner|cashier">
  <Sidebar modules={allowedModules} />
  <MainContent>
    {/* Role-specific content */}
  </MainContent>
</PharmERPLayout>`,
              props: [
                {
                  name: "role",
                  type: "string",
                  description:
                    "Determines user access level: 'owner' or 'cashier'",
                },
                {
                  name: "allowedModules",
                  type: "array",
                  description: "List of accessible modules based on role",
                },
              ],
            },
            {
              name: "Medication Card Component",
              code: `<MedicationCard
  name="Paracetamol 500mg"
  stock={45}
  expiry="2024-12-15"
  price={100}
  status="in-stock|low-stock|expired"
/>`,
              props: [
                {
                  name: "name",
                  type: "string",
                  description: "Medication name",
                },
                {
                  name: "stock",
                  type: "number",
                  description: "Current stock quantity",
                },
                {
                  name: "expiry",
                  type: "string",
                  description: "Expiry date (YYYY-MM-DD)",
                },
                { name: "price", type: "number", description: "Price in KES" },
                {
                  name: "status",
                  type: "string",
                  description: "Stock status indicator",
                },
              ],
            },
            {
              name: "Transaction Component",
              code: `<TransactionItem
  items={[...]}
  total={1500}
  paymentMethod="mpesa|cash|card"
  cashier="Brian"
  timestamp="10:30 AM"
/>`,
              props: [
                {
                  name: "items",
                  type: "array",
                  description: "List of items in transaction",
                },
                {
                  name: "total",
                  type: "number",
                  description: "Total transaction amount",
                },
                {
                  name: "paymentMethod",
                  type: "string",
                  description: "Payment method used",
                },
                {
                  name: "cashier",
                  type: "string",
                  description: "Cashier name",
                },
                {
                  name: "timestamp",
                  type: "string",
                  description: "Time of transaction",
                },
              ],
            },
            {
              name: "Alert System",
              code: `<PharmAlert
  type="expiry|low-stock|shift-end"
  priority="high|medium|low"
  action="review|approve|dismiss"
/>`,
              props: [
                { name: "type", type: "string", description: "Type of alert" },
                {
                  name: "priority",
                  type: "string",
                  description: "Urgency level",
                },
                {
                  name: "action",
                  type: "string",
                  description: "Required action",
                },
              ],
            },
          ],
        },
        {
          type: "product-strategy",
          title: "Product Strategy",
          metrics: [
            {
              title: "Operational Efficiency",
              items: [
                "Reduce stock waste by 60%",
                "Cut transaction time by 50%",
                "Decrease pricing errors to <1%",
                "Reduce staff training time by 70%",
              ],
            },
            {
              title: "Financial Impact",
              items: [
                "Increase sales by 25% through better inventory",
                "Reduce cash discrepancies by 90%",
                "Cut supplier payment delays by 80%",
                "Improve profit margin by 15%",
              ],
            },
            {
              title: "User Adoption",
              items: [
                "95% staff adoption within 1 week",
                "0 support calls for basic operations",
                "4.5/5 user satisfaction score",
                "80% daily active usage",
              ],
            },
          ],
          roadmap: [
            {
              name: "MVP Launch",
              duration: "Months 1-2",
              features: [
                "Core POS for cashiers",
                "Basic inventory management",
                "Owner dashboard with key metrics",
                "Local payment integration (MPESA)",
              ],
            },
            {
              name: "Enhanced Features",
              duration: "Months 3-4",
              features: [
                "Advanced reporting",
                "Supplier management",
                "Customer loyalty programs",
                "Mobile app for owners",
              ],
            },
            {
              name: "Scale & Optimize",
              duration: "Months 5-6",
              features: [
                "Multi-branch support",
                "API integrations",
                "Advanced analytics",
                "Automated ordering",
              ],
            },
          ],
          pricing: [
            {
              name: "Basic",
              price: "2,000 KES/month",
              features: [
                "1 owner + 2 cashiers",
                "Basic inventory & sales",
                "Email support",
              ],
            },
            {
              name: "Professional",
              price: "4,000 KES/month",
              features: [
                "1 owner + 5 cashiers",
                "Advanced reporting",
                "Phone support",
                "Supplier management",
              ],
            },
            {
              name: "Enterprise",
              price: "8,000 KES/month",
              features: [
                "Multiple pharmacies",
                "Custom integrations",
                "Priority support",
                "Training included",
              ],
            },
          ],
        },
        {
          type: "key-differentiators",
          title: "Key Differentiators",
          items: [
            {
              title: "Role-First Design",
              description:
                "Truly understands pharmacist vs cashier needs with dedicated interfaces for each role",
            },
            {
              title: "Optimized for Real-World Conditions",
              description:
                "Works even with poor internet connectivity (critical in Kenya's infrastructure)",
            },
            {
              title: "MPESA Native Integration",
              description:
                "Deep integration with Kenya's primary payment system, not an afterthought",
            },
            {
              title: "Medication-Specific Design",
              description:
                "Built specifically for pharmacy workflows, not generic retail solutions",
            },
            {
              title: "Affordable Pricing",
              description:
                "60% cheaper than competitors while offering more relevant features",
            },
            {
              title: "Simple & Intuitive",
              description:
                "1-day training vs 1-week for competitors, with error prevention features",
            },
          ],
        },
        {
          type: "problem",
          title: "The Problem",
          cards: [
            {
              icon: "💊",
              title: "Inventory Mismanagement",
              content:
                "15-20% inventory loss due to expired medications. No visibility into which batches expire when. Manual stock-taking takes entire days.",
            },
            {
              icon: "🔒",
              title: "Security & Accountability",
              content:
                "Cash handling discrepancies. Unauthorized discounts by staff. No audit trail for regulatory compliance.",
            },
            {
              icon: "⏱️",
              title: "Operational Inefficiency",
              content:
                "Slow checkout (3-5 minutes per customer). No business performance insights. Manual financial reporting taking days.",
            },
          ],
        },
        {
          type: "solution",
          title: "Key Design Solutions",
          items: [
            {
              title: "1. Role-Based Access Control",
              content:
                "Created a two-tier access system: Admin (full access to all features) and Cashier (POS operations only). This addressed the core security concern while empowering staff. Small discounts (≤10%) are auto-approved for cashiers; larger ones require admin approval.",
            },
            {
              title: "2. Smart Expiry Management",
              content:
                "Implemented a proactive alert system with color-coded urgency: Red (expired - cannot sell), Yellow (30-90 days - create discount campaign), Green (90+ days - monitor only). One-click discount campaign creation allows pharmacies to salvage near-expiry stock instead of total loss.",
            },
            {
              title: "3. Streamlined POS Interface",
              content:
                "Redesigned checkout with large barcode scanner input, real-time stock validation, and visual payment buttons (MPESA most prominent). Transaction time reduced from 3.5 minutes to 1.2 minutes with 83% reduction in errors.",
            },
            {
              title: "4. Business Intelligence for Non-Accountants",
              content:
                "Transformed complex financial data into plain-language insights. Instead of 'Gross Margin %', shows 'Profit Made on Each Sale'. Color-coded product profitability helps owners optimize shelf space and identify underperforming items.",
            },
          ],
        },
        {
          type: "impact",
          title: "Impact & Results",
          metrics: [
            {
              value: "65%",
              label: "Faster Checkout",
              description:
                "Transaction time reduced from 3.5 min to 1.2 min average",
            },
            {
              value: "75%",
              label: "Reduction in Expiry Losses",
              description:
                "Proactive alerts allow early discount sales vs total loss",
            },
            {
              value: "90%",
              label: "Reduction in Cash Discrepancies",
              description:
                "Role-based access and audit trails improve accountability",
            },
            {
              value: "83%",
              label: "Reduction in Transaction Errors",
              description:
                "Real-time validation prevents selling expired/out-of-stock items",
            },
          ],
          testimonials: [
            {
              text: "The visual payment buttons are so much better! Before I was confused by the dropdown, now I can complete a sale in half the time.",
              author: "Testing Participant - Cashier",
              context: "Round 3 Testing",
            },
            {
              text: "I love the color-coded expiry alerts. I can now see at a glance which medications need immediate attention. This will save me thousands.",
              author: "Testing Participant - Pharmacy Owner",
              context: "Round 4 Testing",
            },
            {
              text: "Finally, something simple enough that I don't need two weeks to train new staff. The interface is intuitive and the error prevention features give me peace of mind.",
              author: "Testing Participant - Pharmacy Owner",
              context: "Round 5 Testing",
            },
            {
              text: "The real-time stock validation is brilliant. No more selling expired items or items we don't have. My customers are happier too.",
              author: "Testing Participant - Cashier",
              context: "Round 5 Testing",
            },
          ],
        },
        {
          type: "learnings",
          title: "Key Learnings",
          items: [
            {
              title: "1. Security and Usability Don't Have to Conflict",
              content:
                "Initially, pharmacy owners wanted strict controls on everything. Through iterative testing, I learned that smart, context-aware permissions (small discounts auto-approved, large ones requiring approval) satisfied both security needs and operational speed.",
            },
            {
              title: "2. Design for Real-World Constraints",
              content:
                "Kenya's unreliable internet and power meant offline POS functionality wasn't a nice-to-have—it was essential. Designing for worst-case scenarios (no Wi-Fi, low tech literacy) created a more resilient system for everyone.",
            },
            {
              title: "3. Local Context is Critical",
              content:
                "Making MPESA the primary payment method (not an afterthought) and using plain language instead of accounting jargon showed that understanding local context drives adoption. Global solutions miss these nuances.",
            },
          ],
        },
      ],
      highFidelityDesigns: [
        {
          title: "Admin Dashboard - Business Overview",
          image: "/assets/dashboard.JPG",
          description:
            "Role-based dashboard showing total revenue (KES 2,450,000), active products (1,247), low stock items (23), and pending orders (34). Real-time notifications for expiring products and recent payments. Designed for at-a-glance business health monitoring with actionable insights and date range filtering.",
        },
        {
          title: "Smart Expiry Management Dashboard",
          image: "/assets/dash.JPG",
          description:
            "Proactive expiry alert system showing medications expiring soon with batch numbers, expiry dates, and current quantities. Color-coded urgency system helps prioritize actions. Features include notifications for '12 products expiring in 30 days' and 'Payment received from Grace Wanjiku' to keep owners informed in real-time.",
        },
        {
          title: "Streamlined Point of Sale (POS) Interface",
          image: "/assets/pointOfSale.JPG",
          description:
            "Fast checkout interface with barcode search, popular products quick access, and visual payment method selection (Cash, M-Pesa, Card). Current order shows Metformin 850mg with quantity controls, discount application (4%), and automatic subtotal calculation (KES 720 after discount). Customer type selection (Walk-in Retail vs Regular VIP/Bulk) for different pricing tiers. Stock updates automatically upon sale completion.",
        },
      ],
      designFeatures: [
        {
          title: "🎯 Key Design Features",
          items: [
            "Role-Based UI: Admin sees full dashboard; Cashier sees simplified POS-only interface",
            "Real-Time Updates: Stock levels, revenue, and alerts update automatically",
            "Local Payment Priority: M-Pesa prominently featured as primary payment method",
            "Error Prevention: System blocks selling expired items, validates stock levels",
            "Dark Mode Design: Reduces eye strain for long pharmacy shifts",
            "Batch Tracking: Every product linked to specific batch for recall traceability",
          ],
        },
        {
          title: "💡 UX Decisions",
          items: [
            "Large Touch Targets: POS buttons sized for quick tapping during busy periods",
            "Visual Payment Buttons: Icons + text eliminate dropdown confusion (83% error reduction)",
            "Persistent Current Order: Cart always visible on right side, no hiding/overlay",
            "Quantity Controls: +/- buttons prevent typing errors during checkout",
            "Color-Coded Alerts: Red (urgent), Yellow (warning), Green (safe) for instant understanding",
            "Stock Badges: Quantity displayed on each product for quick visibility",
          ],
        },
      ],
      designMetrics: {
        before: [
          "3.5 min average transaction time",
          "12% transaction error rate",
          "Manual expiry checking (quarterly)",
          "60 min end-of-day reconciliation",
          "5-7 security incidents/month",
        ],
        after: [
          "1.2 min average transaction time (65% faster)",
          "2% transaction error rate (83% reduction)",
          "Automated daily expiry alerts",
          "6 min end-of-day reconciliation (90% faster)",
          "0 security incidents (90% reduction)",
        ],
      },
      figmaLink:
        "https://www.figma.com/design/3rOHcmuYmev3sG0HCIa8TR/Pharmacy-ERP?m=auto&t=d0IVomRFElyHHwyq-1",
    },
    smartglasses: {
      title: "Smart Glasses for the Visually Impaired",
      subtitle:
        "An affordable, socially-conscious assistive technology combining text-to-speech, obstacle detection, and navigation assistance for visually impaired individuals in Kenya",
      role: "Lead Product Designer & Engineer",
      timeline: "8 Months (Final Year Project)",
      tools: "SolidWorks, Arduino, Python, React Native, Figma, 3D Printing",
      heroImage: "/assets/smartglass.png",
      sections: [
        {
          type: "overview",
          title: "Overview",
          content:
            "The Smart Glasses project is an innovative assistive technology solution designed specifically for visually impaired individuals in Kenya. By combining hardware and software engineering with user-centered design, we created a discreet wearable device that empowers independence through text-to-speech reading, obstacle detection, GPS navigation, and voice commands—all for under 15,000 KES manufacturing cost.",
        },
        {
          type: "pain-points",
          title: "User Challenges & Pain Points",
          userGroups: [
            {
              title: "Educational Barriers",
              pains: [
                {
                  category: "Limited Access to Materials",
                  items: [
                    '"Braille textbooks cost 5x more and are rarely available"',
                    '"I depend on classmates to read notes for me"',
                    '"PDF documents are completely inaccessible"',
                    '"Library resources are mostly visual-based"',
                  ],
                },
                {
                  category: "Learning Independence",
                  items: [
                    '"I have to ask for help every 5 minutes during study"',
                    '"Group discussions exclude me because I can\'t read materials"',
                    '"Exam papers require sighted assistance, breaking privacy"',
                    '"Learning pace is dictated by availability of readers"',
                  ],
                },
                {
                  category: "Educational Equality",
                  items: [
                    '"University resources are designed for sighted students"',
                    '"STEM subjects are particularly challenging without visual aids"',
                    '"Digital learning platforms are not screen-reader friendly"',
                    '"Career opportunities limited by educational barriers"',
                  ],
                },
              ],
            },
            {
              title: "Mobility & Safety Concerns",
              pains: [
                {
                  category: "Navigation Difficulties",
                  items: [
                    '"White canes only detect ground-level obstacles"',
                    '"Overhanging branches and signs are constant hazards"',
                    '"Construction sites and uneven pavements are dangerous"',
                    '"I\'ve walked into open manholes multiple times"',
                  ],
                },
                {
                  category: "Urban Challenges",
                  items: [
                    '"Matatu stages are chaotic and difficult to navigate"',
                    '"Street vendors\' displays obstruct pathways"',
                    '"Unauthorized vehicles park on sidewalks"',
                    '"Pedestrian crossings are not audible or tactile"',
                  ],
                },
                {
                  category: "Safety Fears",
                  items: [
                    '"I worry about getting lost in unfamiliar areas"',
                    '"Night-time travel is especially frightening"',
                    '"Traffic sounds are overwhelming and confusing"',
                    '"Mugging risks are higher when visibly impaired"',
                  ],
                },
              ],
            },
            {
              title: "Social & Psychological Impact",
              pains: [
                {
                  category: "Social Stigma",
                  items: [
                    '"Traditional assistive devices make me stand out"',
                    '"People stare at my white cane or dark glasses"',
                    '"Children make fun of me in public"',
                    '"I feel self-conscious using obvious devices"',
                  ],
                },
                {
                  category: "Independence Issues",
                  items: [
                    '"I can\'t read my own mail or bank statements"',
                    '"Going to new places requires planning and assistance"',
                    '"Social media and digital communication are limited"',
                    '"Daily tasks that others take for granted are challenging"',
                  ],
                },
                {
                  category: "Employment Barriers",
                  items: [
                    '"Many jobs require reading printed documents"',
                    '"Workplace technology is often inaccessible"',
                    '"Employers assume I can\'t be productive"',
                    '"Career advancement opportunities are limited"',
                  ],
                },
              ],
            },
            {
              title: "Financial & Accessibility Issues",
              pains: [
                {
                  category: "High Costs",
                  items: [
                    '"Commercial assistive devices cost 200,000+ KES"',
                    '"Import duties make foreign solutions unaffordable"',
                    '"Maintenance and repairs are expensive and slow"',
                    '"Batteries and accessories have ongoing costs"',
                  ],
                },
                {
                  category: "Limited Availability",
                  items: [
                    '"Most solutions are designed for Western markets"',
                    '"Local repair services don\'t exist for high-tech devices"',
                    '"Language support is often only in English"',
                    '"Cultural context is ignored in foreign solutions"',
                  ],
                },
                {
                  category: "Technical Complexity",
                  items: [
                    '"Existing devices require weeks of training"',
                    '"User interfaces are confusing and not intuitive"',
                    '"Technical support is unavailable in Kenya"',
                    '"Software updates are complicated and frequent"',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "user-personas",
          title: "User Personas & Scenarios",
          personas: [
            {
              name: "David Mwangi",
              role: "University Student",
              age: "21",
              background: [
                "Second-year Computer Science student at University of Nairobi",
                "Lost sight completely at age 15 due to glaucoma",
                "Lives in campus hostel with 3 roommates",
                "Aspires to become a software developer",
                "Family in rural Kenya, limited financial support",
              ],
              frustrations: [
                "Cannot access PDF textbooks and lecture slides",
                "Misses visual content in programming classes",
                "Depends on classmates for group assignments",
                "Limited participation in coding competitions",
                "Career anxiety due to perceived limitations",
              ],
              goals: [
                "Access all educational materials independently",
                "Participate fully in group projects",
                "Learn programming without visual barriers",
                "Build portfolio for tech career",
                "Gain confidence in technical abilities",
              ],
              quote:
                "I want to write code and build solutions, not just be limited by what I can see.",
            },
            {
              name: "Grace Wanjiku",
              role: "Working Professional",
              age: "34",
              background: [
                "Customer service supervisor at a telecom company",
                "Legally blind since birth, some light perception",
                "Married with one child in primary school",
                "Commutes daily from Umoja to CBD",
                "Active member of Kenya Society for the Blind",
              ],
              frustrations: [
                "Cannot read printed office documents",
                "Navigation in Nairobi CBD is stressful",
                "Professional appearance concerns with assistive devices",
                "Limited career advancement opportunities",
                "Work-life balance affected by commuting difficulties",
              ],
              goals: [
                "Read documents independently at work",
                "Navigate to work safely and confidently",
                "Maintain professional appearance",
                "Advance to management position",
                "Be a role model for other visually impaired professionals",
              ],
              quote:
                "I want to focus on my work, not on how to get to work or read a simple memo.",
            },
            {
              name: "Samuel Ochieng",
              role: "High School Student",
              age: "17",
              background: [
                "Form 3 student at St. Mary's School for the Visually Impaired",
                "Born with congenital cataract, low vision",
                "Lives with parents and two siblings in Kibera",
                "Passionate about science and mathematics",
                "Experienced bullying for using assistive devices",
              ],
              frustrations: [
                "Bullied for using obvious assistive devices",
                "Limited classroom participation",
                "Cannot read blackboard or projector content",
                "Social isolation from sighted peers",
                "Anxiety about future employment prospects",
              ],
              goals: [
                "Fit in with peers while getting needed assistance",
                "Excel in science subjects",
                "Make friends outside visually impaired community",
                "Build confidence in social situations",
                "Pursue university education in STEM field",
              ],
              quote:
                "I just want to be a normal teenager who happens to not see well, not 'the blind kid'.",
            },
          ],
        },
        {
          type: "market-opportunity",
          title: "Market Opportunity & Impact Potential",
          stats: [
            {
              value: "300,000+",
              label: "Visually impaired individuals in Kenya",
            },
            { value: "<1%", label: "Affordable device penetration" },
            { value: "200,000+ KES", label: "Cost of current alternatives" },
            { value: "15,000 KES", label: "Our target manufacturing cost" },
          ],
          competitiveGap: [
            "Existing solutions are imported and unaffordable for most Kenyans",
            "No locally manufactured assistive technology devices",
            "Devices designed for Western contexts ignore Kenyan infrastructure",
            "Complex interfaces require technical expertise most users lack",
            "Maintenance and support unavailable locally",
          ],
        },
        {
          type: "user-journeys",
          title: "User Journey Mapping",
          journeys: [
            {
              title: "David's University Day Journey",
              steps: [
                {
                  time: "7:00 AM - Morning Routine",
                  pain: "Cannot check WhatsApp messages from classmates about schedule changes",
                  solution:
                    "Voice command: 'Read my messages' provides audio summary",
                },
                {
                  time: "8:30 AM - Lecture Hall",
                  pain: "Professor writes complex equations on board, David can only listen",
                  solution:
                    "Point glasses at board, command: 'Read this' converts to speech",
                },
                {
                  time: "10:00 AM - Library Study",
                  pain: "Required textbook only available as printed copy",
                  solution:
                    "Scan pages with glasses, save as audio notes for later review",
                },
                {
                  time: "2:00 PM - Computer Lab",
                  pain: "Cannot see code on screen during group programming session",
                  solution:
                    "Connect glasses to computer, read code snippets aloud",
                },
                {
                  time: "4:00 PM - Campus Navigation",
                  pain: "Construction on usual route, unfamiliar detour required",
                  solution:
                    "GPS navigation with obstacle alerts guides safely around site",
                },
              ],
            },
            {
              title: "Grace's Work Commute Journey",
              steps: [
                {
                  time: "6:30 AM - Preparing for Work",
                  pain: "Cannot check weather to choose appropriate clothing",
                  solution:
                    "Voice command: 'What's the weather?' provides audio forecast",
                },
                {
                  time: "7:15 AM - Matatu Stage",
                  pain: "Chaotic stage, multiple matatus, hard to identify correct one",
                  solution:
                    "Scan matatu numbers, audio confirmation: 'Number 46 to CBD'",
                },
                {
                  time: "8:00 AM - Office Building",
                  pain: "Cannot read elevator buttons or floor indicators",
                  solution:
                    "Scan buttons, audio feedback: 'Third floor, administration'",
                },
                {
                  time: "9:00 AM - Morning Meeting",
                  pain: "Printed agenda distributed, cannot participate fully",
                  solution:
                    "Quick scan of document provides audio summary before meeting",
                },
                {
                  time: "5:30 PM - Evening Commute",
                  pain: "Darkness falls early, navigation becomes more difficult",
                  solution:
                    "Enhanced obstacle detection with audio cues for low-light conditions",
                },
              ],
            },
          ],
        },
        {
          type: "design-process",
          title: "Design & Engineering Process",
          steps: [
            {
              number: "01",
              icon: "🔍",
              title: "Ethnographic Research & Discovery",
              content:
                "Partnered with Kenya Society for the Blind for 3 months of immersive research. Conducted 20+ home visits observing daily routines. Spent 40+ hours in schools, workplaces, and public spaces. Documented 127 specific pain points across 15 users aged 15-65. Key insights: Social stigma outweighs functional needs, privacy in reading is critical, ground-only obstacle detection is insufficient, and battery life must exceed 8 hours for full-day use.",
            },
            {
              number: "02",
              icon: "🎯",
              title: "Problem Definition & Requirements",
              content:
                "Synthesized research into 4 key problem areas: Educational access, mobility safety, social inclusion, and affordability. Established rigorous technical requirements: <100g weight, <15,000 KES manufacturing cost, 8+ hour battery, 95% OCR accuracy, 180° obstacle detection. Created design principles: 'Empower without stigmatizing', 'Work with Kenyan infrastructure', 'Simple enough for grandmother to use', 'Repairable with local tools'.",
            },
            {
              number: "03",
              icon: "💡",
              title: "Concept Ideation & Selection",
              content:
                "Generated 50+ concepts across 5 form factors in intensive brainstorming sessions. Created 15 physical mockups for tactile feedback. Conducted concept testing with users using Wizard of Oz prototyping. Final selection criteria weighted social acceptability (40%), functionality (30%), cost (20%), and weight (10%). Smart glasses format scored highest with 17/20 overall rating.",
            },
            {
              number: "04",
              icon: "🎨",
              title: "Prototyping & Technical Development",
              content:
                "3D printed 5 iterative prototypes focusing on weight distribution and comfort. Hardware: Raspberry Pi Zero 2W, 8MP autofocus camera, dual ultrasonic sensors, bone conduction audio, 2000mAh Li-Po battery. Software: Python with OpenCV/Tesseract for OCR, custom-trained Swahili language model, ultrasonic sensor fusion algorithm, power optimization system. Each iteration reduced weight: 180g → 120g → 85g.",
            },
            {
              number: "05",
              icon: "🧪",
              title: "User Testing & Iteration",
              content:
                "5 rounds of usability testing with 15 visually impaired participants. Real-world testing in universities, offices, and Nairobi streets. Quantitative results: Obstacle detection improved from 55% to 95%, text reading speed from 15s/page to 2s/page, user satisfaction from 60% to 90%. Key iterations: Natural language commands over technical phrases, distance-based audio alerts, power optimization for 8h+ battery.",
            },
            {
              number: "06",
              icon: "🚀",
              title: "Implementation & Manufacturing",
              content:
                "Final design: 85g total weight, 8h 15m battery life, 95% OCR accuracy, 95% obstacle detection. Manufacturing optimization: Custom PCB design reduced components by 40%, injection molding ready frames, local component sourcing strategy. Business model: 15,000 KES manufacturing cost, 17,000 KES retail price, 15% margin for R&D reinvestment. Scalability: Modular design, easy repairs, upgradeable software.",
            },
          ],
        },
        {
          type: "technical-specifications",
          title: "Technical Specifications",
          hardware: [
            {
              category: "Frame & Physical Design",
              items: [
                "Material: Lightweight polymer with rubberized finish",
                "Weight: 85g total (including all electronics)",
                "Dimensions: 145mm width, 45mm height, 150mm temples",
                "Adjustability: Flexible nose pads, adjustable temple length",
                "Durability: IP54 dust and water resistance",
                "Colors: Black, Brown, Grey (socially discreet options)",
              ],
            },
            {
              category: "Electronics & Sensors",
              items: [
                "Processor: Raspberry Pi Zero 2W (1GHz quad-core)",
                "Camera: 8MP autofocus with LED assist light",
                "Obstacle Sensors: Dual HC-SR04 ultrasonic (2-400cm range)",
                "Audio: Bone conduction transducers (environmentally aware)",
                "Battery: 2000mAh Li-Po with USB-C fast charging",
                "Connectivity: Wi-Fi, Bluetooth 5.0, GPS module",
              ],
            },
            {
              category: "Performance Specifications",
              items: [
                "Battery Life: 8+ hours continuous use",
                "OCR Accuracy: 95% on printed text (English & Swahili)",
                "Obstacle Detection: 95% accuracy, 180° coverage",
                "Text Processing: 2 seconds per A4 page",
                "Voice Recognition: 98% accuracy with noise cancellation",
                "Operating Temperature: 0°C to 40°C",
              ],
            },
          ],
          software: [
            {
              category: "Core Features",
              items: [
                "Text-to-Speech: Real-time OCR with Google TTS engine",
                "Obstacle Detection: Intelligent sensor fusion algorithm",
                "GPS Navigation: Turn-by-turn with voice guidance",
                "Voice Commands: 15+ natural language commands",
                "Document Storage: Save and organize scanned documents",
                "Emergency Features: Location sharing, SOS alerts",
              ],
            },
            {
              category: "User Interface",
              items: [
                "Voice Command System: Natural language processing",
                "Audio Feedback: Distance-based tones and verbal cues",
                "Haptic Feedback: Vibration patterns for alerts",
                "Companion App: iOS/Android for settings and updates",
                "Multi-language: English and Swahili support",
                "Customization: Adjustable voice speed, alert volume",
              ],
            },
            {
              category: "Advanced Features",
              items: [
                "Offline Mode: Core functions work without internet",
                "Battery Optimization: Adaptive power management",
                "Learning Mode: Custom command training",
                "Document Organization: Voice-tagged file system",
                "Environment Modes: Indoor, Outdoor, Quiet settings",
                "Usage Analytics: Track and optimize feature usage",
              ],
            },
          ],
        },
        {
          type: "testing-validation",
          title: "Testing & Validation Results",
          testCategories: [
            {
              title: "Technical Performance Testing",
              tests: [
                {
                  name: "OCR Accuracy Test",
                  method: "100 printed pages (various fonts, languages)",
                  result: "95% character recognition accuracy",
                  status: "✓ Exceeded target (90%)",
                },
                {
                  name: "Obstacle Detection Range",
                  method: "500 random objects at varying distances",
                  result: "95% detection accuracy (2-400cm)",
                  status: "✓ Exceeded target (85%)",
                },
                {
                  name: "Battery Endurance",
                  method: "Continuous use with all features active",
                  result: "8 hours 15 minutes",
                  status: "✓ Exceeded target (8 hours)",
                },
                {
                  name: "Weight Verification",
                  method: "Digital scale measurement",
                  result: "85g total weight",
                  status: "✓ Below target (100g)",
                },
                {
                  name: "Durability Testing",
                  method: "Drop test from 1m height",
                  result: "No functional damage",
                  status: "✓ Passed",
                },
              ],
            },
            {
              title: "User Experience Testing",
              tests: [
                {
                  name: "Learning Curve",
                  method: "Time to complete basic tasks without training",
                  result: "15 minutes average",
                  status: "✓ Below target (30 minutes)",
                },
                {
                  name: "Task Completion Rate",
                  method: "10 standard tasks (reading, navigation, etc.)",
                  result: "92% success rate",
                  status: "✓ Above target (85%)",
                },
                {
                  name: "Error Rate Reduction",
                  method: "Comparison with traditional methods",
                  result: "73% reduction in navigation errors",
                  status: "✓ Significant improvement",
                },
                {
                  name: "Satisfaction Score",
                  method: "5-point Likert scale survey",
                  result: "4.6/5 average",
                  status: "✓ High user satisfaction",
                },
                {
                  name: "Social Acceptance",
                  method: "Observation and user feedback",
                  result: "Users reported feeling less conspicuous",
                  status: "✓ Key design goal achieved",
                },
              ],
            },
          ],
        },
        {
          type: "impact-metrics",
          title: "Impact Metrics & Results",
          metrics: [
            {
              value: "95%",
              label: "Obstacle Detection Accuracy",
              description:
                "From 55% with traditional white canes to 95% with smart glasses",
            },
            {
              value: "87%",
              label: "Faster Text Reading",
              description: "15 seconds per page reduced to 2 seconds with OCR",
            },
            {
              value: "73%",
              label: "Reduced Navigation Errors",
              description: "Significant improvement in safe independent travel",
            },
            {
              value: "85%",
              label: "Cost Reduction",
              description:
                "15,000 KES vs 200,000+ KES for imported alternatives",
            },
            {
              value: "90%",
              label: "User Satisfaction",
              description:
                "Based on post-testing surveys with 15 visually impaired users",
            },
            {
              value: "8h 15m",
              label: "Battery Life",
              description: "Full-day usage without recharging",
            },
          ],
          testimonials: [
            {
              text: "For the first time, I can read my Computer Science textbooks independently. The glasses have given me privacy and confidence in my studies.",
              author: "David - University Student",
              context: "Computer Science Major",
            },
            {
              text: "I no longer worry about walking into obstacles on my commute. The warning system has prevented several accidents already.",
              author: "Grace - Working Professional",
              context: "Daily CBD Commuter",
            },
            {
              text: "People don't stare at me anymore. The glasses look normal but give me superpowers. I finally feel like a normal teenager.",
              author: "Samuel - High School Student",
              context: "St. Mary's School",
            },
            {
              text: "The natural language commands are so intuitive. I was using it in 15 minutes without any technical knowledge.",
              author: "Test Participant - 65 years old",
              context: "First-time Technology User",
            },
          ],
        },
        {
          type: "business-model",
          title: "Business Model & Sustainability",
          sections: [
            {
              title: "Cost Analysis & Pricing",
              items: [
                "Components & Materials: 8,750 KES",
                "Assembly & Labor: 3,500 KES",
                "Packaging & Documentation: 750 KES",
                "Quality Control & Testing: 1,000 KES",
                "Contingency & Warranty: 1,000 KES",
                "Total Manufacturing Cost: 15,000 KES",
                "Target Retail Price: 17,000 KES",
                "Profit Margin: 13% (for R&D reinvestment)",
              ],
            },
            {
              title: "Market Strategy",
              items: [
                "Primary Market: 300,000+ visually impaired Kenyans",
                "Initial Target: 5% penetration in 3 years (15,000 users)",
                "Distribution: Partner with Kenya Society for the Blind",
                "Payment Plans: Monthly installment options (1,500 KES/month)",
                "Insurance: Work with NHIF for partial coverage",
                "Schools: Bulk purchases for educational institutions",
              ],
            },
            {
              title: "Sustainability & Impact",
              items: [
                "Local Manufacturing: 80% components sourced within Kenya",
                "Job Creation: Assembly, testing, and support positions",
                "Repairability: Modular design, local repair training",
                "Software Updates: Lifetime free updates for core features",
                "Community: User forums and peer support networks",
                "Research: 15% profits reinvested in R&D for new features",
              ],
            },
          ],
        },
        {
          type: "future-roadmap",
          title: "Future Development Roadmap",
          phases: [
            {
              name: "Phase 1: Pilot & Refinement (6 months)",
              features: [
                "Manufacture 100 units for extended pilot testing",
                "Gather 6 months of real-world usage data",
                "Refine manufacturing process for scale",
                "Develop Swahili language optimization",
                "Create detailed user manuals and training materials",
              ],
            },
            {
              name: "Phase 2: Scale & Enhance (12 months)",
              features: [
                "Scale production to 1,000 units",
                "Add facial recognition for social interaction",
                "Develop advanced environment classification",
                "Integrate with popular Kenyan apps (M-Pesa, etc.)",
                "Establish regional service centers",
              ],
            },
            {
              name: "Phase 3: Expansion & Innovation (24 months)",
              features: [
                "Expand to other East African countries",
                "Develop solar charging capabilities",
                "Add AI-powered predictive navigation",
                "Create educational institution packages",
                "Explore government partnership opportunities",
              ],
            },
          ],
        },
        {
          type: "key-learnings",
          title: "Key Learnings & Insights",
          items: [
            {
              title: "1. Empathy Beyond Accessibility Guidelines",
              content:
                "Designing for the visually impaired taught me that technical accessibility is just the starting point. True empathy came from understanding social stigma, privacy concerns, and the desire for normalcy. The most successful features were those that empowered without drawing attention—like making the glasses look like regular eyewear rather than medical devices.",
            },
            {
              title: "2. Hardware-Software Co-Design is Critical",
              content:
                "Balancing processing power, battery life, and heat dissipation in a wearable form factor required continuous iteration. Each software optimization had hardware implications, teaching me the importance of cross-disciplinary collaboration. For example, our custom power management system extended battery life by 40% through intelligent component sleep modes.",
            },
            {
              title: "3. Contextual Adaptation for Kenyan Reality",
              content:
                "Kenyan infrastructure required specific adaptations: offline functionality for areas with poor connectivity, dust resistance for dry seasons, and affordability as the primary constraint. We learned that every 1,000 KES saved in manufacturing cost opened the device to 2,000 more potential users in our target market.",
            },
            {
              title: "4. The Power of Co-Design with Users",
              content:
                "Involving visually impaired users at every stage—from initial concept to final testing—transformed the product. Their insights revealed pain points I would never have anticipated as a sighted designer, like the importance of bone conduction audio to maintain environmental awareness. This proved that the best solutions come from lived experience.",
            },
          ],
        },
      ],
      highFidelityDesigns: [
        {
          title: "Final Product Design - Front View",
          image: "/assets/complete.jpg",
          description:
            "Discreet smart glasses design indistinguishable from regular eyewear. Lightweight polymer frame (85g total), adjustable nose pads, flexible temples, dual ultrasonic sensors integrated into frame arms, 8MP camera centered between lenses, bone conduction audio pads at temple ends, USB-C charging port on right temple.",
        },
        {
          title: "Technical Components Layout",
          image: "/assets/smartglass.png",
          description:
            "Internal component arrangement optimized for weight distribution and thermal management. Raspberry Pi Zero 2W processor in right temple, 2000mAh Li-Po battery in left temple for 50-50 weight balance, camera module with auto-focus lens, ultrasonic sensors with 180° coverage, bone conduction transducers, GPS/Wi-Fi/Bluetooth antennas, custom PCB with power management system.",
        },
      ],
      designFeatures: [
        {
          title: "🎯 Key Innovation Features",
          items: [
            "Socially Discreet Design: Looks like regular glasses to reduce stigma",
            "Bone Conduction Audio: Maintains environmental awareness while providing feedback",
            "Dual Sensor Fusion: Combines multiple ultrasonic readings for 95% obstacle accuracy",
            "Offline-First Operation: Core functions work without internet connectivity",
            "Power Optimization: Adaptive system extends battery to 8+ hours",
            "Local Language Support: English and Swahili OCR and voice commands",
          ],
        },
        {
          title: "💡 User Experience Decisions",
          items: [
            "Natural Language Commands: 'Read this' vs technical commands (42% improvement)",
            "Distance-Based Audio Alerts: Different tones for near/medium/far obstacles (65% improvement)",
            "One-Touch Operation: Single button for most common functions",
            "Proactive Battery Warnings: At 20% and 10% remaining (55% improvement)",
            "Haptic + Audio Feedback: Redundant confirmation system for critical alerts",
            "Progressive Disclosure: Advanced features hidden until basic mastery achieved",
          ],
        },
      ],
      designMetrics: {
        before: [
          "55% obstacle detection accuracy",
          "15 seconds per page reading time",
          "200,000+ KES device cost",
          "2-hour battery life (commercial alternatives)",
          "Visible, stigmatizing assistive devices",
          "Weeks of training required",
        ],
        after: [
          "95% obstacle detection accuracy (40% improvement)",
          "2 seconds per page reading time (87% faster)",
          "15,000 KES manufacturing cost (85% cheaper)",
          "8h 15m battery life (4x improvement)",
          "Discreet, socially acceptable design",
          "15-minute learning curve (87% reduction)",
        ],
      },
      figmaLink: null,
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="project-detail-page">
        <nav className="navbar">
          <div className="nav-content">
            <div className="nav-header">
              <button onClick={() => navigate("/")} className="back-button">
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </button>
            </div>
          </div>
        </nav>
        <div
          className="container"
          style={{ textAlign: "center", padding: "4rem 0" }}
        >
          <h1>Project not found</h1>
          <button onClick={() => navigate("/")} className="btn-primary">
            Return Home
          </button>
        </div>
      </div>
    );
  }

const renderSection = (section) => {
  switch (section.type) {
    case "overview":
      return (
        <section key="overview" className="project-section">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <p className="section-text">{section.content}</p>
          </div>
        </section>
      );

    case "pain-points":
      return (
        <section key="pain-points" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            {section.userGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="pain-points-group">
                <h3 className="pain-group-title">{group.title}</h3>
                <div className="pain-categories">
                  {group.pains.map((pain, painIndex) => (
                    <div key={painIndex} className="pain-category">
                      <h4 className="pain-category-title">{pain.category}</h4>
                      <ul className="pain-list">
                        {pain.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="pain-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "user-personas":
      return (
        <section key="user-personas" className="project-section">
          <div className="container">
            <h2 className="section-heading">User Personas & Scenarios</h2>
            <div className="personas-grid">
              {section.personas.map((persona, index) => (
                <div key={index} className="persona-card">
                  <div className="persona-header">
                    <div>
                      <h3 className="persona-name">{persona.name}</h3>
                      <p className="persona-role">{persona.role}</p>
                    </div>
                    <div className="persona-age">{persona.age}</div>
                  </div>

                  <div className="persona-section">
                    <div className="persona-label">Background</div>
                    <div className="persona-background">
                      {persona.background.map((item, idx) => (
                        <div key={idx} className="background-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="persona-section">
                    <div className="persona-label">Frustrations</div>
                    <ul className="persona-frustrations">
                      {persona.frustrations.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="persona-section">
                    <div className="persona-label">Goals</div>
                    <ul className="persona-goals">
                      {persona.goals.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="persona-quote">"{persona.quote}"</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "market-opportunity":
      return (
        <section key="market-opportunity" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">Market Opportunity</h2>
            <div className="market-opportunity-content">
              <div className="market-stats">
                {section.stats.map((stat, index) => (
                  <div key={index} className="market-stat">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="competitive-gap">
                <h3 className="competitive-title">Competitive Gap</h3>
                <ul className="gap-list">
                  {section.competitiveGap.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      );

    case "user-journeys":
      return (
        <section key="user-journeys" className="project-section">
          <div className="container">
            <h2 className="section-heading">User Journey Mapping</h2>
            <div className="journeys-grid">
              {section.journeys.map((journey, index) => (
                <div key={index} className="journey-card">
                  <h3 className="journey-title">{journey.title}</h3>
                  <div className="journey-timeline">
                    {journey.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="journey-step">
                        <div className="step-time">{step.time}</div>
                        <div className="step-content">
                          <div className="step-pain">
                            <strong>Pain:</strong> {step.pain}
                          </div>
                          <div className="step-solution">
                            <strong>Solution:</strong> {step.solution}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "information-architecture":
      return (
        <section
          key="information-architecture"
          className="project-section alternate"
        >
          <div className="container">
            <h2 className="section-heading">Information Architecture</h2>
            <div className="ia-content">
              <div className="ia-tree">
                {section.structure.map((node, index) => (
                  <div key={index} className="ia-node">
                    <div className="node-label">{node.label}</div>
                    {node.children && (
                      <div className="node-children">
                        {node.children.map((child, childIndex) => (
                          <div key={childIndex} className="ia-child">
                            <div className="child-label">{child.label}</div>
                            {child.children && (
                              <div className="child-children">
                                {child.children.map(
                                  (grandchild, grandIndex) => (
                                    <div
                                      key={grandIndex}
                                      className="ia-grandchild"
                                    >
                                      {grandchild}
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "ui-design-principles":
      return (
        <section key="ui-design-principles" className="project-section">
          <div className="container">
            <h2 className="section-heading">UI Design Principles</h2>

            <div className="design-principles">
              <div className="visual-design">
                <h3 className="principle-title">Visual Design Strategy</h3>
                <div className="color-palette">
                  {section.colors.map((color, index) => (
                    <div key={index} className="color-item">
                      <div
                        className="color-swatch"
                        style={{ backgroundColor: color.code }}
                      />
                      <div className="color-info">
                        <div className="color-name">{color.name}</div>
                        <div className="color-code">{color.code}</div>
                        <div className="color-purpose">{color.purpose}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="typography">
                  <h4>Typography Hierarchy</h4>
                  <div className="type-examples">
                    {section.typography.map((type, index) => (
                      <div key={index} className="type-item">
                        <div
                          className="type-sample"
                          style={{ fontSize: type.size }}
                        >
                          {type.name}
                        </div>
                        <div className="type-info">
                          <div className="type-weight">{type.weight}</div>
                          <div className="type-purpose">{type.purpose}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="key-screens">
                <h3 className="principle-title">Key Screens Design</h3>
                {section.screens.map((screen, index) => (
                  <div key={index} className="screen-layout">
                    <h4>{screen.title}</h4>
                    <div className="layout-diagram">{screen.layout}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "prototype-testing":
      return (
        <section key="prototype-testing" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">Prototyping & Testing</h2>
            <div className="testing-scenarios">
              {section.scenarios.map((scenario, index) => (
                <div key={index} className="scenario-card">
                  <h3 className="scenario-title">
                    Test {index + 1}: {scenario.title}
                  </h3>
                  <div className="scenario-description">
                    {scenario.description}
                  </div>
                  <div className="test-metrics">
                    <h4>Test Metrics:</h4>
                    <ul>
                      {scenario.metrics.map((metric, idx) => (
                        <li key={idx}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "design-system":
      return (
        <section key="design-system" className="project-section">
          <div className="container">
            <h2 className="section-heading">Design System Components</h2>
            <div className="design-components">
              <div className="components-grid">
                {section.components.map((component, index) => (
                  <div key={index} className="component-card">
                    <h3 className="component-title">{component.name}</h3>
                    <div className="component-code">
                      <pre>
                        <code>{component.code}</code>
                      </pre>
                    </div>
                    <div className="component-props">
                      <h4>Props:</h4>
                      <ul>
                        {component.props.map((prop, idx) => (
                          <li key={idx}>
                            <strong>{prop.name}:</strong> {prop.type} -{" "}
                            {prop.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "product-strategy":
      return (
        <section key="product-strategy" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">Product Strategy</h2>

            <div className="strategy-content">
              <div className="success-metrics">
                <h3>Success Metrics</h3>
                {section.metrics.map((category, index) => (
                  <div key={index} className="metric-category">
                    <h4>{category.title}</h4>
                    <ul>
                      {category.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="roadmap">
                <h3>Rollout Roadmap</h3>
                <div className="roadmap-timeline">
                  {section.roadmap.map((phase, index) => (
                    <div key={index} className="phase">
                      <h4>{phase.name}</h4>
                      <div className="phase-duration">{phase.duration}</div>
                      <ul className="phase-features">
                        {phase.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="monetization">
                <h3>Monetization Strategy</h3>
                <div className="pricing-tiers">
                  {section.pricing.map((tier, index) => (
                    <div key={index} className="pricing-tier">
                      <h4>{tier.name}</h4>
                      <div className="tier-price">{tier.price}</div>
                      <ul className="tier-features">
                        {tier.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case "key-differentiators":
      return (
        <section key="key-differentiators" className="project-section">
          <div className="container">
            <h2 className="section-heading">Key Differentiators</h2>
            <div className="differentiators-grid">
              {section.items.map((item, index) => (
                <div key={index} className="differentiator-card">
                  <div className="differentiator-number">{index + 1}</div>
                  <div className="differentiator-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "design-process":
      return (
        <section key="design-process" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <div className="design-process-steps">
              {section.steps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="process-step-header">
                    <div className="process-number">{step.number}</div>
                    <div className="process-icon">{step.icon}</div>
                    <h3 className="process-title">{step.title}</h3>
                  </div>
                  <p className="process-content">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "problem":
      return (
        <section key="problem" className="project-section">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <div className="problem-grid">
              {section.cards.map((card, index) => (
                <div key={index} className="problem-card">
                  <div className="problem-icon">{card.icon}</div>
                  <h3 className="problem-title">{card.title}</h3>
                  <p className="problem-text">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "solution":
      return (
        <section key="solution" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <div className="solution-items">
              {section.items.map((item, index) => (
                <div key={index} className="solution-item">
                  <h3 className="solution-title">{item.title}</h3>
                  <p className="solution-text">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "impact":
      return (
        <section key="impact" className="project-section">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <div className="impact-grid">
              {section.metrics.map((metric, index) => (
                <div key={index} className="impact-card">
                  <div className="impact-value">{metric.value}</div>
                  <div className="impact-label">{metric.label}</div>
                  <p className="impact-description">{metric.description}</p>
                </div>
              ))}
            </div>
            {section.testimonials && (
              <div className="testimonial-section">
                <h3 className="testimonial-heading">User Testing Feedback</h3>
                <div className="testimonial-grid">
                  {section.testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="testimonial-author">
                        <strong>{testimonial.author}</strong>
                        {testimonial.context && (
                          <span className="testimonial-context">
                            {" "}
                            • {testimonial.context}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      );

    case "learnings":
      return (
        <section key="learnings" className="project-section alternate">
          <div className="container">
            <h2 className="section-heading">{section.title}</h2>
            <div className="learning-items">
              {section.items.map((item, index) => (
                <div key={index} className="learning-item">
                  <h3 className="learning-title">{item.title}</h3>
                  <p className="learning-text">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
};

  const renderHighFidelitySection = (project) => {
    if (!project.highFidelityDesigns) return null;

    return (
      <section className="project-section high-fidelity-section">
        <div className="container">
          <h2 className="section-heading">High-Fidelity Designs</h2>

          <div className="design-grid">
            {project.highFidelityDesigns.map((design, index) => (
              <div key={index} className="design-showcase-item">
                <div className="design-image-container">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="design-image"
                  />
                </div>
                <div className="design-details">
                  <h4 className="design-title">{design.title}</h4>
                  <p className="design-description">{design.description}</p>
                </div>
              </div>
            ))}
          </div>

          {project.designFeatures && (
            <div className="design-features-grid">
              {project.designFeatures.map((featureSet, index) => (
                <div key={index} className="feature-highlight">
                  <h4 className="feature-title">{featureSet.title}</h4>
                  <ul className="feature-list">
                    {featureSet.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <strong>{item.split(":")[0]}:</strong>
                        {item.includes(":") ? item.split(":")[1] : item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {project.designMetrics && (
            <div className="design-metrics-section">
              <h3 className="metrics-title">Design Impact Metrics</h3>
              <div className="metrics-comparison">
                <div className="comparison-item">
                  <div className="comparison-before">
                    <h5>
                      Before{" "}
                      {projectId === "pharmerp" ? "PharmERP" : "Smart Glasses"}
                    </h5>
                    <ul>
                      {project.designMetrics.before.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="comparison-after">
                    <h5>
                      After{" "}
                      {projectId === "pharmerp" ? "PharmERP" : "Smart Glasses"}
                    </h5>
                    <ul>
                      {project.designMetrics.after.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="project-detail-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-header">
            <button onClick={() => navigate("/")} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-subtitle">{project.subtitle}</p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">{project.timeline}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Tools</span>
                <span className="meta-value">{project.tools}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-main-image">
        <div className="container">
          <img
            src={project.heroImage}
            alt={project.title}
            className="main-image"
          />
        </div>
      </section>

      {/* Render All Sections */}
      {project.sections.map((section, index) => renderSection(section))}

      {/* High-Fidelity Designs Section */}
      {renderHighFidelitySection(project)}

      {/* Figma Link Section */}
      {project.figmaLink && (
        <section className="project-section">
          <div className="container">
            <div className="figma-link-section">
              <p className="figma-text">
                View the complete design system and interactive prototype:
              </p>
              <button
                className="figma-button"
                onClick={() => window.open(project.figmaLink, "_blank")}
              >
                <ExternalLink size={20} />
                Open in Figma
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Interested in{" "}
              {projectId === "pharmerp"
                ? "Business Software"
                : "Assistive Technology"}
              ?
            </h2>
            <p className="cta-text">
              I'm passionate about creating innovative solutions that solve real
              problems. Let's discuss how design can make a difference.
            </p>
            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/#contact")}
              >
                <Mail size={20} />
                Get In Touch
              </button>
              <button className="btn-secondary" onClick={() => navigate("/")}>
                <ArrowLeft size={20} />
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;