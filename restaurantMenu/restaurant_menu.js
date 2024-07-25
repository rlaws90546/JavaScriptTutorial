const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $23', 'Oatmeal - $14', 'Frittata - $16'];
const mainCourseMenu = ['Steak - $28', 'Pasta - $18', 'Burger - $17', 'Salmon - $25'];
const dessertMenu = ['Cake - $9', 'Ice Cream - $8', 'Pudding - $7', 'Fruit Salad - $8'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;