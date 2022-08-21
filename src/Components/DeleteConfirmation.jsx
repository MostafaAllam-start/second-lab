import React from 'react';

const DeleteConfirmation = props => {
    return ( 
        <div 
            className={props.confirm?'d-block':"d-none"}
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgb(0,0,0,0.5)'
        }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection:"column",
                    justifyContent:"center",
                    position:"absolute",
                    top:"50%",
                    left:"50%",
                    transform:"translate(-50%,-50%)",
                    background:"white",
                    padding:"50px",
                    textAlign:"center",
                    borderRadius:"10px"
                }}>
                <h3>Are You Sure You Wanaa Delete This Employee?!</h3>
                <div
                    style={{
                        display: "flex",
                        justifyContent:"center",
                        marginTop:"10px",
                    }}>
                    <button className="btn btn-danger" style={{width:"100px"}} onClick={props.onConfirm}>Yes</button>
                    <button className="btn btn-primary " style={{width:"100px", marginLeft:"4px"}} onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </div>

    );
}
export default DeleteConfirmation;
 
