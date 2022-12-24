import React from 'react'

export default function AlertlassName(props) {
    if(props.alert.length > 0)
        return (
            <div>
                <div className="alert alert-warning alert-dismissible fade show m3" role="alert">
                    <strong>{props.alert}</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        )
    else
        return (
            <>
            </>
        )
}
