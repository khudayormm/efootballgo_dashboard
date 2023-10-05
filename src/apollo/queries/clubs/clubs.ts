import { gql } from '@apollo/client';

export const GET_CLUBS = gql`
query Query($page: Int, $search: String, $searchField: SearchFields, $sort: SortFields, $sortDirection: SortDirection, $pageLimit: Int) {
  clubs(page: $page, search: $search, search_field: $searchField, sort: $sort, sort_direction: $sortDirection, page_limit: $pageLimit) {
    clubs {
      color
      country
      created_at
      id
      img
      is_active
      name
      short_name
      updated_at
    }
    page
    totalCount
  }
}
`;



  
  interface Club {
    color: string;
    country: string;
    created_at: string;
    id: number;
    img: string;
    is_active: boolean;
    name: string;
    short_name: string;
    updated_at: string;
  }
  
  export interface ClubData {
    clubs: {
      clubs: Club[];
      page: number;
      totalCount: number;
    };
  }