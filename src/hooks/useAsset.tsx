import useSWR from "swr";
import { api } from "../services/api";

const fetcher = (uri: string, body: any) => api.post(uri, body).then(res => res.data);

export function useAsset(assetType: string, key: string) {
	return useSWR(["/query/readAsset", key], ([url, key]) => fetcher(url,{
		key: {
			"@assetType": assetType,
			"@key": key
		}
	}))
}
