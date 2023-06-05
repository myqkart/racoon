export const generateOTP = () => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  }