import { useState } from 'react';
import { IconEye, IconEyeOff, IconBrandFacebook, IconBrandGoogle } from '@tabler/icons-react';
import'../App.css'

const App = () => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', firstname: '', lastname: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        let newErrors = { email: '', password: '', firstname: '', lastname: '' };

        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (!firstname) newErrors.firstname = 'First Name is required';
        if (!lastname) newErrors.lastname = 'Last Name is required';

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password && !newErrors.firstname && !newErrors.lastname) {
            console.log('Signing up with:', { email, password, firstname, lastname });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
               <h2 className="signup-title">
                    Registration Form
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">
                                Preferred language: <span className="required">*</span>
                            </label>
                            <select className="form-input">
                                <option>English</option>
                                <option>Arabic</option>
                                <option>Chinese</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Title: <span className="required">*</span></label>
                            <select className="form-input">
                                <option>----- Please Select -----</option>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Miss.</option>
                                <option>Mrs.</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <div className="label-container">
                                <label className="form-label">
                                    First Name: <span className="required">*</span>
                                </label>
                                {errors.firstname && (
                                <span className="error-text">{errors.firstname}</span>
                                )}
                            </div>
                            <input
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <div className="label-container">
                                <label className="form-label">
                                    Last Name: <span className="required">*</span>
                                </label>
                                {errors.lastname && (
                                <span className="error-text">{errors.lastname}</span>
                                )}
                            </div>
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <div className="label-container">
                                <label className="form-label">
                                Email: <span className="required">*</span>
                                </label>
                                {errors.email && (
                                <span className="error-text">{errors.email}</span>
                                )}
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <div className="label-container">
                                <label className="form-label">
                                Password: <span className="required">*</span>
                                </label>
                                {errors.password && (
                                <span className="error-text">{errors.password}</span>
                                )}
                            </div>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                                </button>
                            </div>
                            <p className="password-hint">
                                Minimum 8 characters with at least one number and at least one symbol
                            </p>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo excepturi tempora? Officia harum
                            placeat totam. Accusamus animi totam quo reiciendis illum nulla rerum ea, veritatis illo. Numquam, remrecusandae?.
                        </span>
                        </label>
                    </div>

                    <div className="terms-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur porro, saepe.
                    </div>

                    <div className="submit-container">
                        <button
                            type="submit"
                            className="submit-button"
                        >
                        SIGN UP
                        </button>
                    </div>
                </form>

                <div className="divider">
                    <span className="divider-text">OR</span>
                </div>

                <div className="social-buttons">
                    <button className="social-button facebook-button">
                        <IconBrandFacebook size={20} className="social-icon" />
                        Sign Up with Facebook
                    </button>
                    <button className="social-button google-button">
                        <IconBrandGoogle size={20} className="social-icon" />
                        Sign Up with Google
                    </button>
                </div>

                <div className="footer-text">
                    This site is protected by hCaptcha and its{' '}
                    <a href="#" className="footer-link">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="footer-link">
                        Terms of Service
                    </a>{' '}
                    apply.
                </div>
            </div>
        </div>
    );
}

export default App;