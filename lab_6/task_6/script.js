function rotateCard(card) {
    let cardInner = card.querySelector(".card-inner");
    cardInner.style.transform =
      cardInner.style.transform === "rotateY(180deg)"
        ? "rotateY(0deg)"
        : "rotateY(180deg)";
  };