let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// Code - 
index = 1
let receiptTotalarr = []

function receipt(item){
  console.log(`QTY\tITEM\t\tTOTAL`)
console.log(`----\t-----\t\t------`)

for(let{quantity:quantitys,itemName:itemName,unitPrice:unit,total} of item){
  total = (quantitys * unit).toFixed(2)
  receiptTotalarr.push(Number(total))
  console.log(`${quantitys}\t${itemName}\t${total}`)
}
let receiptTotal = receiptTotalarr.reduce((a,b) => a + b)
console.log(`\nTotal -\t${receiptTotal}`)
}
//function called 
receipt(order)

