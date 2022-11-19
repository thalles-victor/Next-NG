import { api } from "../../../../../services/api";
import FileDownload from "js-file-download"
import { HistoryContainer, HistoryList, Table, Header } from "./styles";


export function History() {
  return(
    <HistoryContainer>
      <HistoryList>
        <h1>Transações</h1>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>data</th>
              <th>Tipo da transação</th>
              <th>Baixar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123adsxlkd231</td>
              <td>thalles</td>
              <td>12/02/2023</td>
              <td>Entrada</td>
              <td><button>Baixar</button></td>
            </tr>
            <tr>
              <td>123adsxlkd231</td>
              <td>thalles</td>
              <td>12/02/2023</td>
              <td>Saída</td>
              <td><button>Baixar</button></td>
            </tr>
            <tr>
              <td>123adsxlkd231</td>
              <td>thalles</td>
              <td>12/02/2023</td>
              <td>Entrada</td>

              <td><button>Baixar</button></td>
            </tr>
            <tr>
              <td>123adsxlkd231</td>
              <td>thalles</td>
              <td>12/02/2023</td>
              <td>Entrada</td>
              <td><button onClick={ async () => {
                await api({
                  method: "GET",
                  url: "/user/transaction/voucher/228529f1-7d1b-4936-b83b-8fdf803c1101",
                  responseType: "blob"
                }).then(response => {
                  FileDownload(response.data, "comprovante.pdf")
                }).catch(error => {
                  console.log("Error while download file")
                })
              }}>Baixar</button></td>
            </tr>
          </tbody>
        </Table>
      </HistoryList>
    </HistoryContainer>
  );
}