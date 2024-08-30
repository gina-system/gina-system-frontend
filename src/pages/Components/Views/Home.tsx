import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ButtonIcons from "../ButtonIcons";
import { Eye, Pencil, Trash2 } from "lucide-react";
import SearchInput from "../SearchInput";
import apiConfig from "../../services/apiConfig";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "../DatePicker";
import {CustomerType} from "@/pages/services/types/CustomerType.ts";
import { ButtonFilter } from "../ButtonFilter";

const options = [
  { label: "Nome", value: "nome" },
  { label: "CPF", value: "CPF" },
  { label: "Numero", value: "CPF" },
];

export default function Home() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    apiConfig
      .get("/")
      .then((response) => {
        const customer = response.data.data.customer;
        setCustomers([customer]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log({ data: customers });



  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <form className="space-y-2">
          <div className="flex items-center gap-2">
            <SearchInput />
            <ButtonFilter title="Filtrar" options={options} />
            <Button type="submit">Consultar</Button>
          </div>
          <div className="flex">
            <DatePickerWithRange />
          </div>
        </form>

        <div className="border rounded-lg p-2 ">
          <Table>
            <TableHeader>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>N°Ref.</TableHead>
              <TableHead>Emissão</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Ações</TableHead>
            </TableHeader>
            <TableBody>
              {customers.map((customer, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.cpf}</TableCell>
                    <TableCell>{customer.phoneNumber}</TableCell>
                    <TableCell>{customer.referenceNumber}</TableCell>
                    <TableCell>12/12/2022</TableCell>
                    <TableCell>01/12/2024</TableCell>

                    <TableCell>
                      <div className="flex space-x-1">
                        <Link to="/register">
                          <ButtonIcons>
                            <Pencil className="w-5 h-5" />
                            </ButtonIcons>
                        </Link>
                        <ButtonIcons>
                          <Trash2 className="w-5 h-5" />
                        </ButtonIcons>
                        <ButtonIcons>
                          <Eye className="w-5 h-5" />
                        </ButtonIcons>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
