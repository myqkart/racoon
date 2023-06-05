import { generateOTP } from "../services/helper.service";
import { USERS } from "../utils/user";

export const loginFn = ({email, password}) => {
    const user = USERS.find(user => user.email === email && user.password === password && user.status === 2);
    return {
        status: !!user ? 200 : 401,
        message: !!user ? 'User logged in successfully' : 'Email or password incorrect'
    }
}

export const signupFn = ({fullName, email, password, confirmPass}) => {
    const user = USERS.find(user => user.email === email && user.status === 2);

    if (user) {
        return {
            status: 201,
            message: 'Email already in use'
        }
    }

    const otp = `${generateOTP()}`;

    USERS.push({
        id: USERS.slice(-1)[0].id + 1,
        fullName, email, password,
        otp
    })

    return {
        status: 200,
        data: { otp },
        message: 'User created successfully'
    }
}

export const verifyOTP = (otp) => {
    const user = USERS.find(user => user.otp === otp);

    if (user) {
        USERS.map(user => {
            if (user.otp === otp) {
                user.status = 2;
            }
        })
        return {
            status: 200,
            message: 'OTP has been verified'
        }   
    }

}