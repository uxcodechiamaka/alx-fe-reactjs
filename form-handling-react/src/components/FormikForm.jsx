import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik User Registered:", values);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data));

    setSubmitting(false);
    resetForm();
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "8px 15px",
    backgroundColor: "#0F66B6",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Username:</label>
            <Field type="text" name="username" style={inputStyle} />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <label>Email:</label>
            <Field type="email" name="email" style={inputStyle} />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            <label>Password:</label>
            <Field type="password" name="password" style={inputStyle} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />

            <button type="submit" disabled={isSubmitting} style={buttonStyle}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
