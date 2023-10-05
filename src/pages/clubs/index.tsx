import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { POST_CLUB } from "~/apollo/mutations/clubs";
import ClubsTable from "~/components/clubs/table";
import { countries } from "~/utils/data";


const schema = yup.object({
  name: yup.string().required(),
  shortName: yup.string().required(),
  img: yup.string().required(),
  country: yup.string().required()
}).required()



type FormValues = {
  name: string,
  shortName: string,
  img: string,
  country: string  
}


const Clubs = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [createClub, { loading }] = useMutation(POST_CLUB)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(async(data) => {
    try {
      const res = await createClub({
        variables: {
          name: data.name,
          shortName: data.shortName,
          country: data.country,
          img: data.img
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  })




  return (
    <div className="flex flex-col">
      <div className="flex gap-2 py-3 justify-between"> 
        <div>KLUBLAR</div>  
        <div>
          <Button onPress={onOpen}>QO'SHISH</Button>
        </div>
      </div>
      <div>
        <ClubsTable />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={onSubmit}>
              <ModalHeader className="flex flex-col gap-1">QO'SHISH</ModalHeader>
              <ModalBody>
                  <Input {...register("name")} autoFocus label="Nomi" variant="bordered" errorMessage={errors.name?.message} />           
                  <Input {...register("shortName")} label="QISQA NOMI" variant="bordered" errorMessage={errors.shortName?.message} />           
                  <Input {...register("img")} label="Logo" variant="bordered" errorMessage={errors.img?.message} />   
                  <Select {...register("country")} label="Mamlakat" variant="bordered" errorMessage={errors.country?.message}>
                      {countries.map((item) => (
                        <SelectItem key={item.id} value={item.title}>
                          {item.title}
                        </SelectItem>
                      ))}
                  </Select>        
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  SAQLASH
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Clubs