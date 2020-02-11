export const formValid = (data) => {
    let valid = true;
    var keyLength = Object.keys(data.inputData).length
    let i = 0;
    for (const [key, value] of Object.entries(data.inputData)) {
      i++;
      var checkResult = LoginValidate(key,value,data.validCheck)
      if({...checkResult}[key].length > 0){
        valid = false
      }
      if (i === keyLength)
      return [valid,checkResult]
    }
}
const Regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const LoginValidate = (name,value,validCheck)=>{
switch (name) {
    case "username":
    validCheck.username = Regex.test(value)
        ? ""
        : "Please enter valid email address";
      break;
    case "password":
    validCheck.password =
        !value ? "Please enter valid password" : "";
      break;
    default:
      break;
  }
  return validCheck;
}