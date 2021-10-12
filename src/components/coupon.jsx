import {useState} from 'react'
const Coupon = ({ selectedLanguage, applyCoupon }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [coupon, setCoupon] = useState('')
 
    const handleCouponButton = () => {
        let discount = 100 - Number(coupon)
 
        if(discount > 0){
            applyCoupon(discount)
        }else{
            setErrorMessage(selectedLanguage.invalidCoupon);
            setTimeout(()=> setErrorMessage(''), 2000)
        }
    }
 
    return <section className="coupon">
        
        <input type="text"
        value={coupon}
        placeholder={selectedLanguage.couponPlaceHolder}
        onChange={(e)=>setCoupon(e.target.value)}
        />
        <button onClick={handleCouponButton}>{selectedLanguage.couponButton}</button>
        <div>{errorMessage}</div>
    </section>
}
 
export default Coupon