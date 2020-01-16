import React from "react"

const KVInputs = (props) => {
    return (
        props.params.map((val, idx) => {
            let keyId = `key-${idx}`, ValueId = `: value-${idx}`
            return (
                <div key={idx}>
                    <label htmlFor={keyId}>{`Key #${idx + 1}`}</label>
                    <input className="keybox"
                        type="text"
                        name={keyId}
                        data-id={idx}
                        id={keyId}
                        className="key"
                        onChange={(e) => props.handleChange(e, 'key', idx)} 
                    />  &nbsp; &nbsp; &nbsp;
                    <label htmlFor={ValueId}>Value</label>
                    <input className="Valuebox"
                        type="text"
                        name={ValueId}
                        data-id={idx}
                        id={ValueId}
                        className="value"
                        onChange={(e) => props.handleChange(e, 'value', idx)}
                    />
                </div>
             )
          })
        
    )
}

export default KVInputs