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
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "../DatePicker";
import { CustomerType } from "@/pages/services/types/CustomerType.ts";
import { ButtonFilter } from "../ButtonFilter";
import { searchCustomer } from "@/pages/services/CustumersService.ts";
import { FIRST_PAGE_NUMBER } from "@/pages/services/types/PageType.ts";

const options = [
  { label: "Nome", value: "nome" },
  { label: "CPF", value: "CPF" },
  { label: "Numero", value: "numero" },
];

export default function Home() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    searchCustomer({ pageNumber: FIRST_PAGE_NUMBER })
      .then((response) => {
        const customers = response.result.map((r) => r.customer);
        setCustomers(customers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log({ data: customers });

  //teste
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
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>N°Ref.</TableHead>
                <TableHead>Emissão</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.document}</TableCell>
                    <TableCell>{customer.phoneNumber}</TableCell>
                    <TableCell>{customer.referenceNumber}</TableCell>
                    <TableCell>
                      {new Date(customer.audit.createdAt).toLocaleDateString(
                        "pt-BR",
                        { timeZone: "UTC" }
                      )}
                    </TableCell>
                    <TableCell>
                     
                    </TableCell>

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
