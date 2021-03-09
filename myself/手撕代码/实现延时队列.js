function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function queue(obj, func) {
  for(let i of obj) {
    await sleep(i.time)
    func(i.value)
  }
}

let obj = [
  { value: 1, time: 1000 },
  { value: 2, time: 1000 },
  { value: 3, time: 1000 },
  { value: 4, time: 1000 },
  { value: 5, time: 1000 }
];

queue(obj, (value) => {
  console.log(value);
})