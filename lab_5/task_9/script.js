const products = [
    {
        id: 1,
        name: "Смартфон",
        price: 1000,
    },
    {
        id: 2,
        name: "Ноутбук",
        price: 2000,
    },
    {
        id: 3,
        name: "Телевізор",
        price: 1200,
    },
    {
        id: 4,
        name: "Монітор",
        price: 1400,
    },
];

const cart = [];

const handleOrderClick = (event) => {
    const productId = event.target.dataset.productId;

    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
        cartItem.count++;
    }
    else {
        cart.push({
            id: productId,
            name: products[productId - 1].name,
            price: products[productId - 1].price,
            count: 1,
        });
    }
    ShowCartTable(cart)
};

const productTable = document.createElement("table");
productTable.border = 1;

const cartTable = document.createElement("table");
cartTable.border = 1;

const productTableHeaderRow = document.createElement("tr");
productTableHeaderRow.innerHTML = `
    <th>Назва</th>
    <th>Ціна</th>
    <th>Замовити</th>
  `;
productTable.appendChild(productTableHeaderRow);

products.forEach((product) => {
    const tableRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    tableRow.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;
    tableRow.appendChild(priceCell);

    const orderButton = document.createElement("button");
    orderButton.textContent = "Замовити";
    orderButton.dataset.productId = product.id;
    orderButton.addEventListener("click", handleOrderClick);
    tableRow.appendChild(orderButton);

    productTable.appendChild(tableRow);
});

function ShowCartTable(array) {
    cartTable.innerHTML = "";
    array.forEach(el => {
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = el.name;
        tableRow.appendChild(nameCell);
        const priceCell = document.createElement("td");
        priceCell.textContent = el.price;
        tableRow.appendChild(priceCell);
        const countCell = document.createElement("td");
        countCell.textContent = el.count;
        tableRow.appendChild(countCell);
        cartTable.appendChild(tableRow);
        console.log(el);
    });
}
document.body.appendChild(productTable);
document.body.appendChild(cartTable);