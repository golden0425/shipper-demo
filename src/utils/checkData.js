// 校验手机号
const checkPhone = phone => {
  const rules = /^1[3456789]\d{9}$/
  if (!rules.test(phone)) {
    return false
  }
  return true
}
// 校验密码
const checkPwd = pwd => {
  const rules = /^[A-Za-z0-9]{6,18}$/
  if (!rules.test(pwd)) {
    return false
  }
  return true
}

const checkCityLevel = code => {
  code = code + ''
  if (code.slice(-2) === '00') {
    return code.slice(0, -3)
  } else {
    return code
  }
}

const regionConversion = region => {
  if (typeof region !== 'string') return region
  const arr = region.split('-')
  switch (arr.length) {
    case 3:
      // console.log(arr[1].replace('市', arr[2]))
      return arr[1].replace('市', arr[2])
      break
    case 2:
      // console.log(arr[0].replace('省', arr[1]))
      return arr[0].replace('省', arr[1])
      break
    default:
      // console.log(arr)
      return arr
      break
  }
}

export { checkPhone, checkPwd, checkCityLevel, regionConversion }
