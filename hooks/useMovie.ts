import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

export default function useMovie(id?: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return { data, error, isLoading };
}
