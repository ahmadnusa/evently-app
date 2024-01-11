import { IEvent } from '@/lib/database/models/event.model'
import Card from './Card'

type CollectionProps = {
  data: IEvent[]
  emptyTitle: string
  emptyStateSubText: string
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
  limit: number
  page: number | string
  totalPages?: number
  urlParamName?: string
}

export default function Collection({
  data,
  emptyTitle,
  emptyStateSubText,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="gird grid-cols-1 w-full gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized'
              const hidePrice = collectionType === 'My_Tickets'

              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubText}</p>
        </div>
      )}
    </>
  )
}
