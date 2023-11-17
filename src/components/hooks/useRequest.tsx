import useSWR from "swr";
import { api } from "../../services/api";

const fetcher = (uri: string, body: any) => api.post(uri, body).then(res => res.data.result);

export function useRequest(uri: string, assetType: string) {
	return useSWR(uri, (url) => fetcher(url,{
		query: {
			selector: {
				"@assetType": assetType
			}
		}
	}))	
}
