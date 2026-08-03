export type WorkCategory =
	"Evangelizing & Communicating" | "Building & Shipping" | "Growing & Closing";

export interface WorkItem {
	/** Stable slug, unique within the array. */
	id: string;
	title: string;
	/** 1-2 sentences. No exact `$` figures per the site's confidentiality rules. */
	description: string;
	category: WorkCategory;
	link?: string;
}

/** Display order for the three static sections. */
export const workCategories: WorkCategory[] = [
	"Evangelizing & Communicating",
	"Building & Shipping",
	"Growing & Closing",
];

export const workItems: WorkItem[] = [
	// Evangelizing & Communicating
	{
		id: "hashgraph-enthusiasts-show",
		title: "Hashgraph Enthusiasts Show",
		description:
			"Created and hosted for three years, 146 episodes interviewing founders and engineers across the Hedera ecosystem.",
		category: "Evangelizing & Communicating",
		link: "https://www.youtube.com/watch?v=CpjLibi4jp4",
	},
	{
		id: "hederacon-2025",
		title: "HederaCon 2025",
		description:
			"Moderated sessions in front of 600+ attendees, including the wallet refresh panel.",
		category: "Evangelizing & Communicating",
		link: "https://www.youtube.com/watch?v=FTXUdQ6dTf8",
	},
	{
		id: "hiero-tsc",
		title: "Hiero Technical Steering Committee",
		description:
			"Elected member shaping Hiero's technical roadmap, under the Linux Foundation.",
		category: "Evangelizing & Communicating",
		link: "https://hiero.org/tsc",
	},
	{
		id: "hip-920",
		title: "HIP-920: NFT Music Metadata JSON Schema",
		description:
			"Sole author of this Hedera Improvement Proposal, an Informational-track standard with Active status.",
		category: "Evangelizing & Communicating",
		link: "https://hips.hedera.com/hip/hip-920",
	},
	{
		id: "hip-412",
		title: "HIP-412: NFT Token Metadata JSON Schema v2",
		description:
			"Working-group member; pioneered the multi-file files array concept within it.",
		category: "Evangelizing & Communicating",
		link: "https://hips.hedera.com/hip/hip-412",
	},
	{
		id: "working-group-leadership",
		title: "DAO, NFT, and DeFi Alliance working groups",
		description:
			"Founding member of the Hashgraph DAO Working Group, helped lead the NFT Working Group, and was elected to lead the Hashgraph DeFi Alliance.",
		category: "Evangelizing & Communicating",
		link: "https://github.com/hashgraph-dao-working-group/community",
	},
	{
		id: "published-bylines",
		title: "Published bylines",
		description:
			'Authored Hgraph\'s flagship "Hgraph in 2026" platform recap and the Mirror Nodes explainer.',
		category: "Evangelizing & Communicating",
		link: "https://hgraph.com/blog/hgraph-in-2026-the-full-stack-onchain-data-platform",
	},
	{
		id: "project-acacia",
		title: "Project Acacia / AP+",
		description:
			"Made the introduction and drove the promotion for Hgraph's interoperability work with Australian Payments Plus on the Reserve Bank of Australia's Project Acacia.",
		category: "Evangelizing & Communicating",
		link: "https://hgraph.com/blog/hgraph-interoperability-solution-australian-payments-plus-project-acacia",
	},
	{
		id: "hol-founding-member",
		title: "Hashgraph Online founding member",
		description:
			"Represented Hgraph as a founding member of Hashgraph Online, alongside HashPack.",
		category: "Evangelizing & Communicating",
		link: "https://hol.org/members",
	},

	// Building & Shipping
	{
		id: "mcp-server",
		title: "MCP server + AI Data Agent",
		description:
			"Built a Model Context Protocol server and AI data agent that answer plain-English questions about Hedera Stats' ecosystem metrics.",
		category: "Building & Shipping",
		link: "https://docs.hgraph.com/mcp-server/setup-chatgpt",
	},
	{
		id: "cross-chain-bridge",
		title: "Cross-chain bridge for an institutional client",
		description:
			"Compliance-preserving bridge spanning EVM and Solana (LayerZero and Axelar) with SumSub KYC/AML, built for a US RWA/mortgage-tokenization firm.",
		category: "Building & Shipping",
	},
	{
		id: "erc-token-indexer",
		title: "ERC Token Data Indexer",
		description:
			"A GraphQL endpoint for token metadata and balances; its data serves rwa.xyz.",
		category: "Building & Shipping",
		link: "https://hgraph.com/blog/hedera-erc-token-data-indexer",
	},
	{
		id: "hedera-stats",
		title: "Hedera Stats",
		description:
			"Coordinated and drove product decisions for this open-source Hedera network-analytics platform.",
		category: "Building & Shipping",
		link: "https://hederastats.com",
	},
	{
		id: "revenue-dashboard",
		title: "Revenue Dashboard",
		description:
			"Built on the team's dashboard; placed 3rd in the Trailblazers track of the 2024 Hedera Hello Future Hackathon.",
		category: "Building & Shipping",
		link: "https://hedera.com/blog/these-are-the-winners-of-the-2024-hellofuture-hackathon/",
	},
	{
		id: "hashpack",
		title: "HashPack",
		description:
			"Built custom Grafana analytics dashboards on Hgraph's data infrastructure for a leading Hedera wallet.",
		category: "Building & Shipping",
		link: "https://hgraph.com/case-studies/hashpack",
	},
	{
		id: "sentx",
		title: "SentX",
		description:
			"Coordinated wallet-auth (Privy) and backend security hardening for this digital-asset marketplace.",
		category: "Building & Shipping",
		link: "https://sentx.io/about/partners",
	},
	{
		id: "grantee-analytics",
		title: "Grantee-management analytics",
		description:
			"Built an analytics dashboard for grantee management for a Hedera ecosystem foundation.",
		category: "Building & Shipping",
	},
	{
		id: "hedera-wallet-connect",
		title: "@hashgraph/hedera-wallet-connect",
		description:
			"Contributed merged PRs, including conflict mediation, to this widely adopted Hedera wallet-connection library.",
		category: "Building & Shipping",
		link: "https://www.npmjs.com/package/@hashgraph/hedera-wallet-connect",
	},

	// Growing & Closing
	{
		id: "brand-rebuild-gtm",
		title: "Brand rebuild and GTM launch",
		description:
			"Full visual identity and product-line launch positioning, reaching into the millions of impressions with no ad spend.",
		category: "Growing & Closing",
		link: "https://x.com/hgraph/status/1980691710247137466",
	},
	{
		id: "institutional-stakeholders",
		title: "Institutional stakeholder representation",
		description:
			"Represented Hgraph with a national central-bank tokenization program (Project Acacia), a digital-asset marketplace (SentX), and a payments-infrastructure fintech.",
		category: "Growing & Closing",
		link: "https://www.auspayplus.com.au/ap-and-project-acacia-building-trust-into-the-future-of-digital-money",
	},
	{
		id: "pricing-model",
		title: "Pricing model",
		description:
			"Modeled Hgraph's API pricing and account dashboard launch, with CEO buy-in.",
		category: "Growing & Closing",
		link: "https://hgraph.com/blog/hgraph-hedera-api-pricing-account-dashboard-launch",
	},
];
