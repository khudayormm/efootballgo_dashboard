import { useQuery } from "@apollo/client";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import { ClubData, GET_CLUBS } from "~/apollo/queries/clubs/clubs";

const ClubsTable = () => {

  const { data, loading, fetchMore } = useQuery<ClubData>(GET_CLUBS)

  return (
    <div>
      {data && <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>N</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Data"} isLoading={loading} loadingContent={<div className="h-full w-full flex justify-center items-center z-10 bg-white bg-transparent">Laoaaooa</div>}>
         {data.clubs.clubs.map((item, index) => (
            <TableRow key={`${item.id}`}>
                <TableCell> {index + 1} </TableCell>
                <TableCell>  <Avatar style={{ padding: 5, background: "none" }} placeholder={item.name} src={item.img} /> </TableCell>
                <TableCell> {item.short_name} </TableCell>
                <TableCell> {item.name} </TableCell>
                <TableCell> {item.color ? item.color : ''} </TableCell> 
            </TableRow>
         ))}
        </TableBody>
      </Table>}

      {data && <button onClick={() => {
          // Call fetchMore to load more data
          fetchMore({
            variables: {
              page: data.clubs.page + 1, // Load the next page
              // Other variables
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

              // Combine the previous data with the new data
              return {
                ...prev,
                clubs: {
                  ...prev.clubs,
                  clubs: [...prev.clubs.clubs, ...fetchMoreResult.clubs.clubs],
                  page: fetchMoreResult.clubs.page,
                  totalCount: fetchMoreResult.clubs.totalCount,
                },
              };
            },
          });
        }}
      >
        
        
        sasss
        
        </button>}
    </div>
  );
};

export default ClubsTable;
