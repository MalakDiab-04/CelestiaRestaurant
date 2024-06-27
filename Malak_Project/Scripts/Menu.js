function updateMenuItem(menuItemId, itemName, itemPrice, descriptionId) {
  
  document.getElementById(menuItemId).innerHTML = itemName + " - " + itemPrice + " EGP";  // Update the menu item name and price
  
  var description = document.getElementById(descriptionId);  // Update the description style
  description.style.color = "beige";
  description.style.fontSize = "17px";
  description.style.userSelect = "auto";
}

