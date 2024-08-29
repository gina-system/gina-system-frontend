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
import { Eye, Pencil, Trash2 } from "lucide-react";
import SearchInput from "../SearchInput";
import { searchCustomer } from "../../services/CustumersService.ts";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "../DatePicker";
import {FIRST_PAGE_NUMBER} from "@/pages/services/types/PageType.ts";
import {CustomerType} from "@/pages/services/types/CustomerType.ts";

export default function Home() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    searchCustomer({pageNumber: FIRST_PAGE_NUMBER})
      .then(({ result }) =>
          setCustomers(result.map((entry: { customer: CustomerType }) => entry.customer)
      ))
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
                          <button className="w-6 h-6">
                            <Pencil className="w-5 h-5" />
                          </button>
                        </Link>
                        <button className="w-6 h-6">
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <button className="w-6 h-6">
                          <Eye className="w-5 h-5" />
                        </button>
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
