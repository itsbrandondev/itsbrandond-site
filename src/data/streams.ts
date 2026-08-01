import type { ImageMetadata } from "astro";

import thumb0726 from "../assets/streams/2026-07-26-1kKzDDXkmarJv.jpg";
import thumb0727 from "../assets/streams/2026-07-27-1XxyggvvPOgGM.jpg";
import thumb0729 from "../assets/streams/2026-07-29-1oJMvvwDlXWxQ.jpg";
import thumb0731 from "../assets/streams/2026-07-31-1RKZzzdjaDwKB.jpg";

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
 * Every stream, newest first. This array is the only thing to edit when a new
 * stream airs: add an entry at the top and drop its thumbnail in
 * src/assets/streams/. The page picks up the newest one automatically.
 */
export const streams: Stream[] = [
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

/*
 * Thumbnails: each replay's frame is 1920x1080 with the screen share filling it
 * and the webcam inset at the bottom right. The committed images are that inset
 * cropped out (768x432 at offset 1152,648), so the archive shows the host rather
 * than whatever happened to be on screen. Taking the whole frame instead puts
 * browser tabs, editor output, and once the broadcaster's own end-stream dialog
 * on a public page. Re-crop with the same box when adding a stream.
 */
