import { useContext } from "react"
import { PlaylistContext } from "../contexts/PlaylistProvider"

export function usePlaylistContext() {
	const context = useContext(PlaylistContext)
	return context;
}
