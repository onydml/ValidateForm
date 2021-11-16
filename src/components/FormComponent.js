import './FormComponent.css'
import { useState } from 'react'

const FormComponent = ()=>{
    /* ສ້າງສະເຕດ */
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')
    /* ສ້າງເຕດເພື່ອ error message */
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRepassword,setErrorRepassword] = useState('')
    /* ສ້າງສະເຕດເພື່ອປ່ຽນສີຊອ່ງຕື່ມຂໍ້ມູນຖ້າຕື່ມຖືກຕອ້ງ */
    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRepasswordColor] = useState('')
    /* ສ້າງ ເງື່ອນໄຂ */
    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ກາລຸນາຕື່ມຊື່ຜູ້ໃຊ້ 8 ໂຕອັກສອນ')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('ຮູບແບບອີເມວບໍ່ຖືກຕອ້ງ')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('ລະຫັດຜ່ານຕອ້ງມີຫຼາຍກວ່າ 8 ໂຕອັກສອນ')
            setPasswordColor('red')
        }

        if(repassword !== " " && repassword === password){
            setErrorRepassword('')
            setRepasswordColor('green')
        }else{
            setErrorRepassword('ລະຫັດຜ່ານບໍ່ຄືກັນ')
            setRepasswordColor('red')
        }
    }
    


    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>ແບບຟອມລົງະບຽນ</h2>
                <div className="form-control">
                    <label>ຊື່ຜູ້ໃຊ້</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}} />
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>ອີເມວ</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>ລະຫັດຜ່ານ</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}} />
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ຢືນຍັນລະຫັດຜ່ານ</label>
                    <input type="text" value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}} />
                    <small style={{color:repasswordColor}}>{errorRepassword}</small>
                </div>
                <button type="submit">ລົງທະບຽນ</button>
            </form>
        </div>
    )
}
export default FormComponent