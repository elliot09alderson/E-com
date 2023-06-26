// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

// export function fetchProductsBySorting(filter) {
//   return new Promise(async(resolve)=>{
//  let queryString = ''
//  for(let letter in filter){
//   // {_sort: 'price', _order: 'asc'}
//   queryString+=`${letter}=${filter[letter]}&`
//  }
//  console.log(queryString)
//     const response  =  await fetch(`http://localhost:8080/products?${queryString}`)
//     const data =  await response.json()
//     resolve({data})
//    }
//   )
//  }

export function fetchProductsByFilters(filter, sort,pagination) {
  let queryString = "";
  // filter =  {"category" :"dsd" }
  for (let letter in filter) {
    const categoryValues = filter[letter];
    if (categoryValues.length) {
      const lastCategoryValues = categoryValues[categoryValues.length - 1];
      queryString += `${letter}=${lastCategoryValues}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
// {_page:2,_limit:2}

    queryString += `${key}=${pagination[key]}&`;
  }

console.log(queryString)
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products?${queryString}`);
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count')

    resolve({ data:{products:data,totalItems:+totalItems} });
  });
}


