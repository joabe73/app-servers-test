
const position = data => {
  const a = data.id.length
  let p
  p = a ===3 ? `00${data.id}` : a ===2 ? `0${data.id}` : p = data.id
  console.log(p)
}

 const gray2= '#404040',
  const gray1 = '#e6e6e6',
  const purple1 = '#0000ff'

export function getBlocks(node) {
  return async () => {
    let res = {data: [], error: null}
    try {
      const response = await fetch(`${node.url}/api/v1/blocks`)
      console.log('errrrrrr qqa', response)
      if (response.status === 200) {
        const resBlocks = await response.json()
        if(resBlocks.data) res = {...res, data: resBlocks.data}
        return res
      }
    } catch(error) {
      res = {...res, error: 'cannot find blocks'}
      return res
    }
  }
}


