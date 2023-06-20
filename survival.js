function hero(bullets, dragons) {
  let bulletsNeeded = dragons * 2;
  return bullets >= bulletsNeeded;
}

console.log(hero(10, 5));
