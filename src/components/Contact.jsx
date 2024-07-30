import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} onBlur={validate} />
        {errors.name && <span className="text-danger">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} onBlur={validate} />
        {errors.email && <span className="text-danger">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} onBlur={validate}></textarea>
        {errors.message && <span className="text-danger">{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Contact;

