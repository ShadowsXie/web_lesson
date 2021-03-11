function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}


async function queue(obj) {
  for (let i of obj) {
    await sleep(i.time)
    console.log(i.value);
  }
}


let obj = [
  {value: 1000, time: 1000},
  {value: 2000, time: 1000},
  {value: 3000, time: 1000},
  {value: 4000, time: 1000},
  {value: 5000, time: 1000},
]

queue(obj)