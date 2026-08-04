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
			{
				label: "Watch: full playlist",
				url: "https://youtube.com/playlist?list=PL7yWNDNn79AIjNvS4pWtaeMmSCCOd3I75&si=t_sDXbAwuXfZMSLC",
			},
			{
				label: "Listen on Spotify",
				url: "https://open.spotify.com/show/7in044o6gPSjXWZjlfH6z1",
			},
			{
				label: "Listen on Apple Podcasts",
				url: "https://podcasts.apple.com/us/podcast/hashgraph-enthusiasts/id1670778871",
			},
		],
	},
	{
		id: "hederacon-2025",
		title: "HederaCon 2025",
		description:
			"Moderated sessions in front of 600+ attendees, including the wallet refresh panel, and appeared as a panelist reflecting on the Hedera ecosystem's journey.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "Watch: moderated panel",
				url: "https://www.youtube.com/watch?v=FTXUdQ6dTf8",
			},
			{
				label: "Watch: panelist session",
				url: "https://www.youtube.com/watch?v=ZIyXFW5mkXg",
			},
		],
	},
	{
		id: "hiero-tsc",
		title: "Hiero Technical Steering Committee",
		description:
			"Elected member of this committee, shaping Hiero's technical roadmap under the Linux Foundation.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "View", url: "https://hiero.org/tsc" },
			{ label: "GitHub org", url: "https://github.com/hiero-ledger" },
			{
				label: "Community calendar",
				url: "https://zoom-lfx.platform.linuxfoundation.org/meetings/hiero?view=week",
			},
		],
	},
	{
		id: "hip-920",
		title: "HIP-920: NFT Music Metadata JSON Schema",
		description:
			"Sole author of this Hedera Improvement Proposal, an Informational-track submission that reached Active status.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Read HIP-920", url: "https://hips.hedera.com/hip/hip-920" },
		],
	},
	{
		id: "hip-412",
		title: "HIP-412: NFT Token Metadata JSON Schema v2",
		description:
			"Working-group member on this Hedera Improvement Proposal; pioneered the multi-file files array concept it introduced.",
		category: "Evangelizing & Communicating",
		links: [
			{ label: "Read HIP-412", url: "https://hips.hedera.com/hip/hip-412" },
		],
	},
	{
		id: "working-group-leadership",
		title: "DAO, NFT, and DeFi Alliance working groups",
		description:
			"Founding member of the Hashgraph DAO Working Group, helped lead the NFT Working Group, and was later elected to lead the Hashgraph DeFi Alliance itself.",
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
			"Authored Hgraph's \"Hgraph in 2026\" recap, its Mirror Nodes explainer, and its Hedera Stats launch post, plus an earlier byline on Hedera's blog from the Doerksen & Davenport era.",
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
			"Made the introduction and drove the promotion for Hgraph's interoperability work with Australian Payments Plus on the Reserve Bank of Australia and DFCRC's Project Acacia.",
		category: "Evangelizing & Communicating",
		links: [
			{
				label: "Read the announcement",
				url: "https://hgraph.com/blog/hgraph-interoperability-solution-australian-payments-plus-project-acacia",
			},
			{
				label: "Utila's announcement",
				url: "https://www.linkedin.com/posts/utila-has-been-chosen-as-the-wallet-infrastructure-share-7435254367328321536-2y10/",
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
			{
				label: "Brand launch post",
				url: "https://www.linkedin.com/posts/itsbrandond_a-good-day-to-build-at-hgraph-share-7363560799820279808-Oho2/",
			},
			{
				label: "AI Data Agent launch",
				url: "https://www.linkedin.com/posts/hgraph-ai-data-agent-now-live-instantly-ugcPost-7407793205288595456-v9ii/",
			},
		],
	},

	// Building & Shipping
	{
		id: "mcp-server",
		title: "MCP server for Hedera network data",
		description:
			"Built a Model Context Protocol server that exposes Hedera Stats' ecosystem metrics to AI assistants like ChatGPT, queryable in plain English.",
		category: "Building & Shipping",
		links: [
			{
				label: "Docs",
				url: "https://docs.hgraph.com/mcp-server/setup-chatgpt",
			},
			{
				label: "Setup video",
				url: "https://www.linkedin.com/posts/itsbrandond_heres-how-to-set-up-the-hgraph-mcp-server-ugcPost-7395234602602201088-xPz2/",
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
			{
				label: "Announcement on X",
				url: "https://x.com/itsbrandond/status/2002351777728114819",
			},
		],
	},
	{
		id: "cross-chain-bridge",
		title:
			"Cross-chain bridge architecture, demoed for an institutional client",
		description:
			"Compliance-preserving bridge spanning EVM and Solana (LayerZero and Axelar) with SumSub KYC/AML, architected and demoed for a US firm in RWA/mortgage tokenization.",
		category: "Building & Shipping",
	},
	{
		id: "erc-token-indexer",
		title: "ERC Token Data Indexer",
		description:
			"Built a GraphQL endpoint for token metadata and balances, now powering rwa.xyz's live data feed.",
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
		title:
			"Brand redesign and McLaren NFT-claim integration for a digital-asset marketplace",
		description:
			"Redesigned SentX's logo, brand, and NFT marketplace frontend, then led the integration for McLaren's NFT claims.",
		category: "Building & Shipping",
		links: [{ label: "sentx.io", url: "https://sentx.io/about/partners" }],
	},
	{
		id: "grantee-analytics",
		title: "Grant analytics for a Hedera ecosystem foundation",
		description:
			"Built a grantee-management analytics dashboard for a Hedera ecosystem foundation's grant program.",
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
			"Modeled Hgraph's API pricing and account-dashboard launch, securing buy-in from the CEO.",
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
		id: "music",
		title: "Music",
		description:
			"Multi-instrumentalist, video production, and editing across a run of music releases and videos, 2014-2020.",
		category: "Creative",
		links: [
			{
				label: "Watch: Loosey Goosey",
				url: "https://www.youtube.com/watch?v=VijbGxCZ4f8",
			},
			{
				label: "Watch: Record Man",
				url: "https://www.youtube.com/watch?v=9RCBUr4dE6Q",
			},
			{
				label: "Watch: Like Me Now",
				url: "https://www.youtube.com/watch?v=eaxEpTeY03g",
			},
			{ label: "Bandcamp", url: "https://thenoolands.bandcamp.com/" },
			{ label: "SoundCloud", url: "https://soundcloud.com/thenoolands" },
			{
				label: "Apple Music",
				url: "https://music.apple.com/ca/artist/the-noolands/1081070203",
			},
		],
	},
	{
		id: "design-portfolio",
		title: "Brand and web design portfolio",
		description:
			"Selected brand identity, web design, and print work spanning agency and in-house roles, pre-dating Hgraph.",
		category: "Creative",
		links: [{ label: "Dribbble", url: "https://dribbble.com/itsbrandond" }],
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
			"As Marketing Specialist at SunFlow Solar, built brand identity, website, and CRM, including one of the region's most successful radio ad campaigns.",
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
			"Brand identity and print design work for a commercial printing client, from the Doerksen & Davenport era.",
		category: "Creative",
	},
];
