import { ReactNode, createContext } from "react";
import { useRequest } from "../hooks/useRequest";

export const PlaylistContext = createContext({
	data: [] as Array<any>,
	error: undefined,
	isLoading: false
});

interface PlaylistProviderProps {
	children: ReactNode
}

export function PlaylistProvider({ children }: PlaylistProviderProps) {
	
	const { data, error, isLoading } = useRequest("/query/search", "playlist");

	return (
		<PlaylistContext.Provider value={{
			data,
			error,
			isLoading
		}}>{children}</PlaylistContext.Provider>
	)
}
