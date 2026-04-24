import { useQuery } from '@tanstack/react-query'

import { getPlaceOfWorkOptions } from '../api/getPlaceOfWorkOptions'
import { PLACE_OF_WORK_QUERY_KEY } from './address-work.constants'
import { mapPlaceOfWorkOptions } from './place-of-work.mappers'

export function usePlaceOfWorkOptions() {
  // TanStack Query caches the category list so the API result can be reused.
  return useQuery({
    queryKey: PLACE_OF_WORK_QUERY_KEY,
    queryFn: getPlaceOfWorkOptions,
    staleTime: 1000 * 60 * 10,
    select: mapPlaceOfWorkOptions,
  })
}
