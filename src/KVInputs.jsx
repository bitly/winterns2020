import React from "react"

const KVInputs = (props) => {
    return (
        props.params.map((val, idx) => {
            let keyId = `key-${idx}`, ValueId = `: value-${idx}`
            return (
                <div key={idx}>
                    <label htmlFor={keyId}>{`Key`}</label>
                    <input
                        placeholder= {`${idx + 1}`} 
                        type="text"
                        name={keyId}
                        data-id={idx} 
                        id={keyId}
                        className="key"
                        onChange={(e) => props.handleChange(e, 'key', idx)} 
                    />
                    <label htmlFor={ValueId}>Value</label>
                    <input
                        placeholder= {`${idx + 1}`} 
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