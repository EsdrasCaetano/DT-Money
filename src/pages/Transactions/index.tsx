import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction(){
    return (
        <div>
            <Header />
            <Summary />
            
            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHightlight variant="income">
                                    R$: 12.000,00
                                </PriceHightlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHightlight variant="outcome">
                                    - R$: 59,00
                                </PriceHightlight>
                            </td>
                            <td>Alimentaçãp</td>
                            <td>10/04/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}