async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        let tblBody = '';

        data.forEach(element => {
            tblBody += `<tr>
                            <td>${element.name.common}</td>
                            <td><img src="${element.flags.png}" alt="Flag of ${element.name.common}"></td>
                        </tr>`;
        });

        document.getElementById('tblBody').innerHTML = tblBody;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

function filterTable() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const tableRows = document.querySelectorAll('#tblBody tr');

    tableRows.forEach(row => {
        const countryName = row.querySelector('td').textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}


fetchCountryData();