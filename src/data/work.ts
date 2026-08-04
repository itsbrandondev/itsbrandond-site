export type WorkCategory =
	"Evangelizing & Communicating" | "Building & Shipping" | "Creative";

export interface WorkItem {
	/** Stable slug, unique within the array. */
	id: string;
	title: string;
	/** 1-2 sentences. No exact `$` figures per the site's confidentiality rules. */
	description: string;
	category: WorkCategory;
	/** Labeled links. Label names the resource or action; never repeats the item's own title. */
	links?: { label: string; url: string }[];
}

/** Display order for the three static sections. */
export const workCategories: WorkCategory[] = [
	"Evangelizing & Communicating",
	"Building & Shipping",
	"Creative",
];

export const workItems: WorkItem[] = [
	// Evangelizing & Communicating
	{
		id: "hashgraph-enthusiasts-show",
		title: "Hashgraph Enthusiasts Show",
		description:
			"Created and hosted for three years, 146 episodes interviewing founders and engineers across the Hedera ecosystem.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Watch", url: "https://www.youtube.com/watch?v=CpjLibi4jp4" },
		],
	},
	{
		id: "hederacon-2025",
		title: "HederaCon 2025",
		description:
			"Moderated sessions in front of 600+ attendees, including the wallet refresh panel.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Watch", url: "https://www.youtube.com/watch?v=FTXUdQ6dTf8" },
		],
	},
	{
		id: "hiero-tsc",
		title: "Hiero Technical Steering Committee",
		description:
			"Elected member shaping Hiero's technical roadmap, under the Linux Foundation.",
		category: "Evangelizing & Communicating",
		links: [{ label: "View", url: "https://hiero.org/tsc" }],
	},
	{
		id: "hip-920",
		title: "HIP-920: NFT Music Metadata JSON Schema",
		description:
			"Sole author of this Hedera Improvement Proposal, an Informational-track standard with Active status.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Read HIP-920", url: "https://hips.hedera.com/hip/hip-920" },
		],
	},
	{
		id: "hip-412",
		title: "HIP-412: NFT Token Metadata JSON Schema v2",
		description:
			"Working-group member; pioneered the multi-file files array concept within it.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Read HIP-412", url: "https://hips.hedera.com/hip/hip-412" },
		],
	},
	{
		id: "working-group-leadership",
		title: "DAO, NFT, and DeFi Alliance working groups",
		description:
			"Founding member of the Hashgraph DAO Working Group, helped lead the NFT Working Group, and was elected to lead the Hashgraph DeFi Alliance.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "DAO Working Group",
				url: "https://github.com/hashgraph-dao-working-group/community",
			},
			{ label: "DeFi Alliance", url: "https://hashgraphdefialliance.org" },
		],
	},
	{
		id: "published-bylines",
		title: "Published bylines",
		description:
			"Authored Hgraph's flagship \"Hgraph in 2026\" platform recap, its Mirror Nodes explainer, and its Hedera Stats launch post, plus an earlier byline on Hedera's own blog from the Doerksen & Davenport era.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "Hgraph in 2026",
				url: "https://hgraph.com/blog/hgraph-in-2026-the-full-stack-onchain-data-platform",
			},
			{
				label: "Mirror Nodes explainer",
				url: "https://hgraph.com/blog/hedera-mirror-node",
			},
			{
				label: "Hedera Stats launch",
				url: "https://hgraph.com/blog/hedera-stats-analytics-dashboard-api",
			},
			{
				label: "D&D-era Hedera blog post",
				url: "https://hedera.com/blog/a-pixelrug-and-a-hashanty-minting-multi-file-nfts-on-hedera-using-hip-412-standards",
			},
		],
	},
	{
		id: "project-acacia",
		title: "Project Acacia / AP+",
		description:
			"Made the introduction and drove the promotion for Hgraph's interoperability work with Australian Payments Plus on the Reserve Bank of Australia's Project Acacia.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "Read the announcement",
				url: "https://hgraph.com/blog/hgraph-interoperability-solution-australian-payments-plus-project-acacia",
			},
		],
	},
	{
		id: "hol-founding-member",
		title: "Hashgraph Online founding member",
		description:
			"Founding member of Hashgraph Online (HOL), now a current member as the org repositions toward AI-agent infrastructure, registries, and payments.",
		category: "Evangelizing & Communicating",
		links: [{ label: "hol.org", url: "https://hol.org" }],
	},
	{
		id: "institutional-stakeholders",
		title: "Institutional stakeholder representation",
		description:
			"Represented Hgraph with a national central-bank tokenization program (Project Acacia), a digital-asset marketplace (SentX), and a payments-infrastructure fintech.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "Hgraph's role",
				url: "https://hgraph.com/blog/hgraph-interoperability-solution-australian-payments-plus-project-acacia",
			},
			{
				label: "Read more on Project Acacia",
				url: "https://www.auspayplus.com.au/ap-and-project-acacia-building-trust-into-the-future-of-digital-money",
			},
		],
	},
	{
		id: "brand-rebuild-gtm",
		title: "Brand rebuild and GTM launch",
		description:
			"Full visual identity and product-line launch positioning, reaching into the millions of impressions with no ad spend.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "View the post",
				url: "https://x.com/hgraph/status/1980691710247137466",
			},
		],
	},

	// Building & Shipping
	{
		id: "mcp-server",
		title: "MCP server for Hedera network data",
		description:
			"Built a Model Context Protocol server exposing Hedera Stats' ecosystem metrics to AI assistants like ChatGPT via plain-English query.",
		category: "Building & Shipping",
		links: [
			{
				label: "Docs",
				url: "https://docs.hgraph.com/mcp-server/setup-chatgpt",
			},
		],
	},
	{
		id: "ai-data-agent",
		title: "AI data agent for ecosystem metrics",
		description:
			"Built an AI agent on top of the MCP server that answers plain-English questions about Hedera Stats' data directly.",
		category: "Building & Shipping",
		links: [
			{
				label: "Docs",
				url: "https://docs.hgraph.com/mcp-server/setup-chatgpt",
			},
		],
	},
	{
		id: "cross-chain-bridge",
		title:
			"Cross-chain bridge architecture, demoed for an institutional client",
		description:
			"Compliance-preserving bridge spanning EVM and Solana (LayerZero and Axelar) with SumSub KYC/AML, architected and demoed for a US RWA/mortgage-tokenization firm.",
		category: "Building & Shipping",
	},
	{
		id: "erc-token-indexer",
		title: "ERC Token Data Indexer",
		description:
			"A GraphQL endpoint for token metadata and balances; its data serves rwa.xyz.",
		category: "Building & Shipping",
		links: [
			{
				label: "Read the announcement",
				url: "https://hgraph.com/blog/hedera-erc-token-data-indexer",
			},
		],
	},
	{
		id: "hedera-stats",
		title: "Hedera Stats",
		description:
			"Coordinated and drove product decisions for this open-source Hedera network-analytics platform.",
		category: "Building & Shipping",
		links: [{ label: "hederastats.com", url: "https://hederastats.com" }],
	},
	{
		id: "revenue-dashboard",
		title: "Revenue Dashboard",
		description:
			"Built on the team's dashboard; placed 3rd in the Trailblazers track of the 2024 Hedera Hello Future Hackathon.",
		category: "Building & Shipping",
		links: [
			{
				label: "Read about the hackathon",
				url: "https://hedera.com/blog/these-are-the-winners-of-the-2024-hellofuture-hackathon/",
			},
		],
	},
	{
		id: "hashpack",
		title: "Analytics dashboards for a leading Hedera wallet",
		description:
			"Built custom Grafana analytics dashboards on Hgraph's data infrastructure for HashPack.",
		category: "Building & Shipping",
		links: [
			{ label: "Case study", url: "https://hgraph.com/case-studies/hashpack" },
		],
	},
	{
		id: "sentx",
		title: "Wallet-auth and security hardening for a digital-asset marketplace",
		description:
			"Coordinated wallet-auth (Privy) and backend security hardening for SentX.",
		category: "Building & Shipping",
		links: [{ label: "sentx.io", url: "https://sentx.io/about/partners" }],
	},
	{
		id: "grantee-analytics",
		title: "Grant-management analytics for a Hedera ecosystem foundation",
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
		links: [
			{
				label: "View on npm",
				url: "https://www.npmjs.com/package/@hashgraph/hedera-wallet-connect",
			},
		],
	},
	{
		id: "pricing-model",
		title: "API pricing model and account dashboard launch",
		description:
			"Modeled Hgraph's API pricing and account dashboard launch, with CEO buy-in.",
		category: "Building & Shipping",
		links: [
			{
				label: "Read the announcement",
				url: "https://hgraph.com/blog/hgraph-hedera-api-pricing-account-dashboard-launch",
			},
		],
	},

	// Creative
	{
		id: "noolands-music-video",
		title: "Music video: Loosey Goosey",
		description:
			"Multi-instrumentalist in his indie/alt-rock band The Noolands, active 2014-2020.",
		category: "Creative",
		links: [
			{ label: "Watch", url: "https://www.youtube.com/watch?v=VijbGxCZ4f8" },
		],
	},
	{
		id: "dd-hello-future",
		title: "Video and NFT collection: Hello Future",
		description:
			"Self-produced video and NFT collection from his creative agency's Hedera-adjacent work, pre-dating Hgraph.",
		category: "Creative",
		links: [
			{ label: "Watch", url: "https://www.youtube.com/watch?v=Tz3r-dxYikA" },
		],
	},
	{
		id: "sunflow-solar-brand",
		title: "Brand identity and website build for a solar-energy company",
		description:
			"Built brand identity, website, and CRM as Marketing Specialist at SunFlow Solar, including one of the region's most successful radio ad campaigns.",
		category: "Creative",
	},
	{
		id: "squarespace-video",
		title: "Launch-campaign video production for a website-building platform",
		description:
			"Produced promotional video content for Squarespace's marketing team, including a social-widget launch campaign.",
		category: "Creative",
	},
	{
		id: "print-branding-client",
		title: "Branding and print design for a commercial printing client",
		description:
			"Brand identity and print design work from the Doerksen & Davenport era.",
		category: "Creative",
	},
];
