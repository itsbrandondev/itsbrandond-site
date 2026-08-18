import type { ImageMetadata } from "astro";

import thumb0726 from "../assets/streams/2026-07-26-1kKzDDXkmarJv.jpg";
import thumb0727 from "../assets/streams/2026-07-27-1XxyggvvPOgGM.jpg";
import thumb0729 from "../assets/streams/2026-07-29-1oJMvvwDlXWxQ.jpg";
import thumb0731 from "../assets/streams/2026-07-31-1RKZzzdjaDwKB.jpg";
import thumb0806 from "../assets/streams/2026-08-06-1DGLddznbmoGm.jpg";
import thumb0812 from "../assets/streams/2026-08-12-1nxnRBRAVVwxO.jpg";
import thumb0816 from "../assets/streams/2026-08-16-1mxPaZWeQZYKN.jpg";
import thumb0818 from "../assets/streams/2026-08-18-1qKVmyvoMyPxB.jpg";

export interface Stream {
	/** X broadcast ID: the last path segment of x.com/i/broadcasts/<id>. */
	id: string;
	/** Broadcast date, ISO 8601. Also the VideoObject uploadDate. */
	date: string;
	/** Title exactly as published on X, emoji included. Never reworded. */
	title: string;
	/** Runtime as X reports it, for readers. */
	duration: string;
	/** The same runtime in ISO 8601, for VideoObject. */
	durationIso: string;
	/** Webcam crop from the replay. See the note at the bottom of this file. */
	thumbnail: ImageMetadata;
}

/**
 * A broadcast that is scheduled but has not aired, so it has no runtime and no
 * replay frame to crop a thumbnail from. Deliberately not a Stream with three
 * optional fields: the two are different things, and the type is what stops a
 * page rendering "undefined" where a duration should be.
 */
export interface UpcomingStream {
	/** X broadcast ID, same as a Stream's. */
	id: string;
	/**
	 * Scheduled start as an absolute instant, ISO 8601 with an offset. The
	 * embed draws its own countdown and start time from this, localized to the
	 * viewer, so the offset here is what keeps the page's own rendering of it
	 * in agreement with the card for a reader in another timezone.
	 */
	startsAt: string;
}

/**
 * The next scheduled broadcast, or null when nothing is scheduled. When set it
 * takes the player slot on /live and every entry in `streams` below moves
 * into the archive.
 *
 * After it airs: clear this back to null and add it to `streams` with its real
 * runtime and a thumbnail. The broadcast ID does not change when a stream goes
 * from scheduled to live to replay, so the embed follows it through all three
 * states on its own and nothing breaks in the window before that edit lands.
 */
export const upcomingStream: UpcomingStream | null = null;

/**
 * Every stream, newest first. This array is the only thing to edit when a new
 * stream airs: add an entry at the top and drop its thumbnail in
 * src/assets/streams/. The page picks up the newest one automatically.
 */
export const streams: Stream[] = [
	{
		id: "1qKVmyvoMyPxB",
		date: "2026-08-18",
		title: "KING SOLOMON CHATS + HBAR NEWS + AI BUILDING",
		duration: "2h 07m",
		durationIso: "PT2H7M53S",
		thumbnail: thumb0818,
	},
	{
		id: "1mxPaZWeQZYKN",
		date: "2026-08-16",
		title: "HEDERA REDDIT TRENCHES + AI BUILDING",
		duration: "1h 52m",
		durationIso: "PT1H52M47S",
		thumbnail: thumb0816,
	},
	{
		id: "1nxnRBRAVVwxO",
		date: "2026-08-12",
		title: "BULLISH ON HBAR + BEARISH ON HEDERA",
		duration: "2h 35m",
		durationIso: "PT2H35M9S",
		thumbnail: thumb0812,
	},
	{
		id: "1DGLddznbmoGm",
		date: "2026-08-06",
		title: "I TRY EVERY HEDERA APP",
		duration: "2h 07m",
		durationIso: "PT2H7M8S",
		thumbnail: thumb0806,
	},
	{
		id: "1RKZzzdjaDwKB",
		date: "2026-07-31",
		title: "🫪 AI NEWS, BUILDING, CRYPTO, SLOPWATCH, HBAR 🫪",
		duration: "2h 40m",
		durationIso: "PT2H40M20S",
		thumbnail: thumb0731,
	},
	{
		id: "1oJMvvwDlXWxQ",
		date: "2026-07-29",
		title: "MONITORING THE SITUATION (AND BUILDING)",
		duration: "2h 15m",
		durationIso: "PT2H15M54S",
		thumbnail: thumb0729,
	},
	{
		id: "1XxyggvvPOgGM",
		date: "2026-07-27",
		title: "LO-FI SLOP TO GET ANXIOUS TO",
		duration: "2h 07m",
		durationIso: "PT2H7M56S",
		thumbnail: thumb0727,
	},
	{
		id: "1kKzDDXkmarJv",
		date: "2026-07-26",
		title: "IF YOURE READING THIS ITS TOO EARLY",
		duration: "35m",
		durationIso: "PT35M43S",
		thumbnail: thumb0726,
	},
];

/** The stream that gets the player. Always the newest. */
export const latestStream = streams[0];

/** Public replay page. Works logged out. */
export const broadcastUrl = (id: string): string =>
	`https://x.com/i/broadcasts/${id}`;

/**
 * The player X's own embed widget points at. Used directly rather than via
 * platform.x.com/widgets.js, whose broadcast path renders a 0x0 iframe: it
 * waits on a size handshake that never arrives. Hand-writing the iframe also
 * avoids the widget's 550px width cap and loads no third-party script.
 * dnt=true opts out of tracking. Always pair it with a visible link to
 * broadcastUrl so the section degrades to a working link, never a blank box.
 */
export const embedUrl = (id: string): string =>
	`https://studio.x.com/embed/broadcast/${id}?dnt=true`;

/** Jul 31, 2026 */
export const formatDate = (iso: string): string =>
	new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	});

/**
 * Aug 6, 2026 at 2:00 PM EDT. For a scheduled start, where the clock time is
 * the point and a bare date is not actionable.
 *
 * Rendered in the show's own timezone with the zone named, not in the reader's:
 * this is built once at deploy time, so it cannot know who is reading, and an
 * unlabeled time would be read as local and be wrong for most people. The
 * embed's card localizes properly on its own; this is the honest static
 * fallback for when that third-party iframe is blocked or slow.
 */
export const formatStartsAt = (iso: string): string => {
	const at = new Date(iso);
	const zone = "America/Toronto";
	const date = at.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: zone,
	});
	const time = at.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		timeZone: zone,
		timeZoneName: "short",
	});
	return `${date} at ${time}`;
};

/*
 * Thumbnails: the full 1920x1080 replay frame, screen share and webcam inset
 * both included. Supersedes the 2026-08-01 webcam-only crop (which existed
 * specifically to keep browser tabs and editor output off the page) per
 * Brandon's explicit 2026-08-02 call, made after that tradeoff was restated.
 * Extract with `ffmpeg -ss <t> -i <source mp4> -frames:v 1 <out>.jpg`, a few
 * minutes into the stream to skip any intro slate; there is no fixed offset
 * to reuse since the whole frame ships as-is.
 */
