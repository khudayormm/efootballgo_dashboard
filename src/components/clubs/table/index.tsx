import { useQuery } from "@apollo/client";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure
} from "@nextui-org/react";
import { ClubData, GET_CLUBS } from "~/apollo/queries/clubs/clubs";
import MyModal from "~/components/global/modal";
import PhPencilSimple from "~/components/icons/PhPencilSimple";
import TrashIcon from "~/components/icons/TrashIcon";
import UilEye from "~/components/icons/UilEye";

const ClubsTable = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                <TableCell> 
                  <div className="flex flex-row justify-center items-center border gap-3 h-10">
                    <TrashIcon onClick={onOpen} className="text-red-400 text-xs active:text-red-200 cursor-pointer transition-all duration-75 w-5 h-5" />
                    <UilEye className="text-gray-500 text-xs active:text-slate-200 cursor-pointer transition-all duration-75 w-5 h-5" />
                    <PhPencilSimple className="text-gray-500 text-xs active:text-slate-200 cursor-pointer transition-all duration-75 w-5 h-5" />
                  </div>
                </TableCell> 
            </TableRow>
         ))}
        </TableBody>
      </Table>}

      {data && <button onClick={() => {
          fetchMore({
            variables: {
              page: data.clubs.page + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;

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


        <MyModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default ClubsTable;
