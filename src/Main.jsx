function Main(){
    return (
        <div className="display">
            <h3>Kursy komputerowe - programowanie</h3>
            <table>
                <tr>
                    <th>Nazwa</th>
                    <th>Liczba godzin</th>
                    <th>Cena</th>
                </tr>
                <tr>
                    <td>
                        Kurs react.js
                    </td>
                    <td>
                        220
                    </td>
                    <td>
                        5000
                    </td>
                </tr>
                <tr>
                    <td>
                        Kurs Javascript
                    </td>
                    <td>
                        150
                    </td>
                    <td>
                        3000
                    </td>
                </tr>
            </table>
            <h3>
                Adres do korespondencji
            </h3>
            <ul>
                <li>Adres: Katowice, ul. Mariacka 5</li>
                <li>Telefon: 32 888 88 88</li>
                <li>
                    <a href="kursy@komputerowe.pl">Skontaktuj się</a>
                </li>
            </ul>
        </div>
    )
}
export default Main;