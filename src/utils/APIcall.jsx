import { gql, useQuery } from "@apollo/client"


export function CallAPI(Query, key) {
    const { loading, error, data } = useQuery(Query);
    return {
        loading,
        error,
        data: data ? data : null,
    };
}