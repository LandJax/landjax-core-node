const { response } = require("express");

class AuthController {
    async signup(req, res){
        res.status(201).send(response("User created", result))
    }

    async signin(req, res) {
        res.status(200).send(response("User login successful", result));
    }

    async updatePassword(req, res) {
        const result = await AuthServ.updatePassword(req.params.userId, req.body);
        res.status(200).send(response("Password updated", result));
    }
    
    async RequestEmailVerification(req, res) {
        const result = await AuthServ.RequestEmailVerification(req.query.email);
        res.status(200).send(response("Email verfication link sent", result));
    }
    
    async VerifyEmail(req, res) {
        const result = await AuthServ.VerifyEmail(req.body);
        res.status(200).send(response("Email verified successfully", result));
    }
    
    async RequestPasswordReset(req, res) {
        const result = await AuthServ.RequestPasswordReset(req.query.email);
        res.status(200).send(response("Password reset link sent", result));
    }

    async resetPassword(req, res) {
        const result = await AuthServ.resetPassword(req.body);
        res.status(200).send(response("Password updated", result));
    }
}