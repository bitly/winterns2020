import React from "react"

const KVInputs = (props) => {
    return (
        props.params.map((val, idx) => {
            let keyId = `key-${idx}`, ValueId = `: value-${idx}`
            return (
                <div key={idx}>
                    <label htmlFor={keyId}>{`Key #${idx + 1}`}</label>
                    <input
                        type="text"
                        name={keyId}
                        data-id={idx}
                        id={keyId}
                        className="key"
                        onChange={(e) => props.handleChange(e, 'key')} 
                    />
                    <label htmlFor={ValueId}>Value</label>
                    <input
                        type="text"
                        name={ValueId}
                        data-id={idx}
                        id={ValueId}
                        className="value"
                        onChange={(e) => props.handleChange(e, 'value')}
                    />
                </div>
             )
          })
        
    )
}

export default KVInputs