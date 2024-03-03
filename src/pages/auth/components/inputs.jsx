import React, {useState} from 'react'

export function LoginInput({type}) {

    const [value, setValue] = useState('')
    
    function handleValue (event){
        const nextValue = event.target.value
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        setValue(nextValue)
        if (type == 'email'  && value.match(mailFormat) ) {
            console.log(JSON.stringify(value))
        }else {
            console.log("You have entered an invalid email address!");
        }
        
    }

  return (
    <div >
        <input 
            className='lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] ' 
            type={type} 
            onChange={handleValue}
            required 
        />
    </div>
  )
}

export function Label({name}) {
  return (
    <div className='mb-[12.5px]'>
        <label className='font-[600] text-[#333333] font-mulish sm:text-[14px] text-[12px]' >
            {name}
        </label>
    </div>
  )
}

export function HalfInputs({type, value, setValue}){
    // const [value, setValue] = useState('')
    
    function handleValue (event){
        const nextValue = event.target.value
        setValue(nextValue)
    }

    return(
        <div>
            <input 
                className='lg:w-[292px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px]' 
                type={type} 
                value={value}
                onChange={handleValue}
                required 
            />
        </div>
    )
}

