function getPrice(user, item, isSpecialOffer) {
  let price = item.basePrice;

  if (user.isLoggedIn) { // +1
    if (user.level === 'gold') { // +2
      price *= 0.8; // 20% discount for gold members
      if (isSpecialOffer) { // +3
        if (item.category === 'electronics') { // +4
          price -= 10; // Extra $10 off on special offer electronics
        }
      }
    } else if (user.level === 'silver') { // +1
      price *= 0.9; // 10% discount for silver members
    }
  } else {
    if (isSpecialOffer) { // +2
      price *= 0.95; // 5% discount for guests on special offers
    }
  }
  return price;
}
