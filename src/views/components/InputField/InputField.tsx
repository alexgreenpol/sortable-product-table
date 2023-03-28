import { Field } from "formik";
import { FC } from "react";
import "./InputField.scss";

type InputFieldProps = {
    errorField?: string;
    touchField?: boolean;
    label: string;
    name: string;
};

const InputField: FC<InputFieldProps> = ({
    name,
    label,
    errorField,
    touchField,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field
                name={name}
                className={`input-field ${
                    errorField && touchField ? "invalid" : "valid"
                }`}
            />
            {errorField && touchField ? <span>{errorField}</span> : null}
        </>
    );
};

export default InputField;
