import '../style/LogRegInput.css'

function LogRegInput({
    value,
    setValue,
    inputType,
    title,
    description,
    imgName,
    placeholder
}){
    const imgUrl = `/NCA/${imgName}`

    const inputHandling = (e) => {
        setValue(e.target.value);
    }
    
    if(inputType === "title"){
        return(
            <>
                <h1 className='form-h1'>{title}</h1>
                <hr />
            </>
        );
    }

    if(inputType != "button"){
        return(
            <>
                <div className="input-container">
                    <div className="input-left">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="input-right">
                        <img src={imgUrl} alt="Image" />
                        <input type={inputType} placeholder={placeholder}/>
                    </div>
                </div>
                <hr />
            </>
        );
    }

    return (
        <>

        </>
    );
}

export default LogRegInput;