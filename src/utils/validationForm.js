import { object, string } from "yup"

let userSchema = object({
    name: string().required("The name field is required."),
    phone: string().required("The phone field is required."),
    email: string().email("The email field is not in the correct format.").required("The email field is required.")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm