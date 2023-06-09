import React from "react";
import LoginForm from "../forms/LoginForm";

export default function AcessarConta(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <img src="https://picsum.photos/2000/300?random=1" className="img-fluid"></img>
                                <h5 className="card-title">Acessar Conta</h5>
                                <p className="card-text"> Informe suas credenciais de acesso</p>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}