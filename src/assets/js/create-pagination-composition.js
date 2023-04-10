export function createPagination(arrayData, numberOfCards,) {
   pagination.value.splice(0, this.pagination.length)
   const numberOfPages = Math.ceil(arrayData.length / numberOfCards);
   for (let index = 1; index < (numberOfPages + 1); index++) {
      this.pagination.push(index);
   }
};

export function createPage(nowPage, n) {
   this.nowPage = n;
   const first = ((this.nowPage - 1) * this.numberOfCards);
   const last = (this.nowPage * this.numberOfCards);
   this.createdPage = this.cards.slice(first, last);
}